// Client-side Contentful integration for Slidev
// This version fetches directly from Contentful

import { createClient } from 'contentful'

interface CloudinaryVideo {
  id: string
  cloudinaryId: string
  title: string
  url: string
  highQualityUrl?: string
  thumbnailUrl: string
  width: number
  height: number
  loaded: boolean
  tags: string[]
}

interface CloudinaryGraphic {
  id: string
  cloudinaryId: string
  title: string
  type: string
  industry: string
  format: string
  url: string
  width: number
  height: number
  loaded: boolean
  tags: string[]
}

interface GalleryResponse {
  videos: CloudinaryVideo[]
  graphics: CloudinaryGraphic[]
  meta: {
    totalVideos: number
    totalGraphics: number
    filteredVideos: number
    filteredGraphics: number
  }
}

// Contentful client configuration from environment variables
const CONTENTFUL_SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const CONTENTFUL_ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN  
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

// Initialize Contentful client
const contentfulClient = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

// Fetch all content from Contentful
async function fetchGallery(tags?: string[]): Promise<GalleryResponse> {
  try {
    // Get the Gallery singleton with all references
    const entries = await contentfulClient.getEntries({
      content_type: 'gallery',
      include: 2,
      limit: 1
    })

    if (!entries.items.length) {
      throw new Error('Gallery not found')
    }

    const gallery = entries.items[0]
    
    // Process videos from cloudinaryVideos field (direct Cloudinary data)
    const allVideos = (gallery.fields.cloudinaryVideos as any[] || [])
      .map((video: any, index: number) => {
        // Determine format based on aspect ratio
        let format = 'feed' // Default
        if (video.width && video.height) {
          const aspectRatio = video.width / video.height
          if (aspectRatio > 0.9 && aspectRatio < 1.1) {
            format = 'square'
          } else if (aspectRatio < 0.9) {
            format = 'reels'
          }
        }

        // Use optimized video URL with auto format and quality
        const videoUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/f_auto,q_auto/${video.public_id}`
        const thumbnailUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/so_0/${video.public_id}.jpg`

        return {
          id: `video-${index}`,
          title: video.public_id?.split('/').pop()?.replace(/[-_]/g, ' ') || `Video ${index + 1}`,
          cloudinaryId: video.public_id,
          url: videoUrl,
          thumbnailUrl: thumbnailUrl,
          tags: video.tags || [],
          width: video.width || 1920,
          height: video.height || 1080,
          format,
          loaded: false
        }
      })
    
    // Process graphics from cloudinaryGraphics field (direct Cloudinary data)
    const allGraphics = (gallery.fields.cloudinaryGraphics as any[] || [])
      .map((graphic: any, index: number) => {
        // Determine format based on aspect ratio
        let format = 'feed' // Default
        if (graphic.width && graphic.height) {
          const aspectRatio = graphic.width / graphic.height
          if (aspectRatio > 0.9 && aspectRatio < 1.1) {
            format = 'square'
          } else if (aspectRatio < 0.9) {
            format = 'reels'
          }
        }

        // Determine graphic type from public_id
        let type = 'image'
        const typeKeywords = {
          'logo': 'logo',
          'banner': 'banner', 
          'icon': 'icon',
          'background': 'background',
          'illustration': 'illustration',
          'social': 'social'
        }

        Object.entries(typeKeywords).forEach(([keyword, value]) => {
          if (graphic.public_id && graphic.public_id.toLowerCase().includes(keyword)) {
            type = value
          }
        })

        return {
          id: `graphic-${index}`,
          cloudinaryId: graphic.public_id,
          title: graphic.public_id?.split('/').pop()?.replace(/[-_]/g, ' ') || `Graphic ${index + 1}`,
          type,
          industry: 'general',
          format,
          url: graphic.secure_url || graphic.url,
          width: graphic.width || 1200,
          height: graphic.height || 1200,
          tags: graphic.tags || [],
          loaded: false
        }
      })

    // Filter by tags if provided
    const videos = tags?.length 
      ? allVideos.filter(video => video.tags.some(tag => tags.includes(tag)))
      : allVideos
      
    const graphics = tags?.length
      ? allGraphics.filter(graphic => graphic.tags.some(tag => tags.includes(tag)))
      : allGraphics

    return {
      videos,
      graphics,
      meta: {
        totalVideos: allVideos.length,
        totalGraphics: allGraphics.length,
        filteredVideos: videos.length,
        filteredGraphics: graphics.length
      }
    }

  } catch (error) {
    console.error('Error fetching from Contentful:', error)
    // Fall back to static files
    return fallbackToStaticFiles(tags)
  }
}

// Fallback function to use static JSON files
async function fallbackToStaticFiles(tags?: string[]): Promise<GalleryResponse> {
  const [videosResponse, graphicsResponse] = await Promise.all([
    fetch('/cloudinary-videos-sorted.json').catch(() => ({ ok: false, json: () => [] })),
    fetch('/cloudinary-graphics-sorted.json').catch(() => ({ ok: false, json: () => [] }))
  ])
  
  const videosData = videosResponse.ok ? await videosResponse.json() : []
  const graphicsData = graphicsResponse.ok ? await graphicsResponse.json() : []
  
  // Transform to match API format
  const videos = videosData.map((item: any, index: number) => ({
    id: `video-${index + 1}`,
    cloudinaryId: item.public_id,
    title: item.title || item.filename || `Video ${index + 1}`,
    url: item.url,
    thumbnailUrl: item.thumbnail || item.url.replace('/video/', '/video/').replace('.mp4', '.jpg'),
    width: item.width || 1920,
    height: item.height || 1080,
    loaded: false,
    tags: item.tags || []
  }))
  
  const graphics = graphicsData.map((item: any, index: number) => {
    const aspectRatio = item.width / item.height
    let format = 'reels'
    if (aspectRatio > 0.9 && aspectRatio < 1.1) format = 'square'
    else if (aspectRatio >= 1.1) format = 'feed'
    
    return {
      id: `graphic-${index + 1}`,
      cloudinaryId: item.public_id,
      title: item.title || `Graphic ${index + 1}`,
      type: 'image',
      industry: 'general',
      format,
      url: item.url,
      width: item.width || 1200,
      height: item.height || 1200,
      loaded: false,
      tags: item.tags || []
    }
  })
  
  // Apply tag filtering if needed
  const filteredVideos = tags?.length 
    ? videos.filter(v => v.tags.some(t => tags.includes(t)))
    : videos
    
  const filteredGraphics = tags?.length
    ? graphics.filter(g => g.tags.some(t => tags.includes(t)))  
    : graphics
  
  return {
    videos: filteredVideos,
    graphics: filteredGraphics,
    meta: {
      totalVideos: videos.length,
      totalGraphics: graphics.length,
      filteredVideos: filteredVideos.length,
      filteredGraphics: filteredGraphics.length
    }
  }
}

export async function fetchCloudinaryVideos(tags?: string[]): Promise<CloudinaryVideo[]> {
  try {
    // Always fetch fresh data from API
    const gallery = await fetchGallery(tags)
    return gallery.videos
  } catch (error) {
    console.error('Error fetching videos:', error)
    throw error
  }
}

export async function fetchCloudinaryGraphics(tags?: string[]): Promise<CloudinaryGraphic[]> {
  try {
    // Always fetch fresh data from API
    const gallery = await fetchGallery(tags)
    return gallery.graphics
  } catch (error) {
    console.error('Error fetching graphics:', error)
    throw error
  }
}
