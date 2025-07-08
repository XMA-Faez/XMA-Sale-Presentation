#!/usr/bin/env node

const { createClient } = require('contentful-management');
const cloudinary = require('cloudinary/lib/v2');
require('dotenv').config();

// Configuration
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

// Initialize clients
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});

const contentfulClient = createClient({
  accessToken: CONTENTFUL_MANAGEMENT_TOKEN
});

async function migrate() {
  try {
    console.log('🚀 Starting migration to Contentful...\n');
    
    // Get Contentful space and environment
    const space = await contentfulClient.getSpace(CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment('master');
    
    // Check if content types exist
    console.log('🔍 Checking Contentful content types...');
    const contentTypes = await environment.getContentTypes();
    const contentTypeIds = contentTypes.items.map(ct => ct.sys.id);
    
    if (!contentTypeIds.includes('video')) {
      console.error('❌ Content type "video" not found. Please create it in Contentful first.');
      console.log('Available content types:', contentTypeIds.join(', '));
      process.exit(1);
    }
    
    if (!contentTypeIds.includes('graphic')) {
      console.error('❌ Content type "graphic" not found. Please create it in Contentful first.');
      console.log('Available content types:', contentTypeIds.join(', '));
      process.exit(1);
    }
    
    if (!contentTypeIds.includes('gallery')) {
      console.error('❌ Content type "gallery" not found. Please create it in Contentful first.');
      console.log('Available content types:', contentTypeIds.join(', '));
      process.exit(1);
    }
    
    console.log('✅ All required content types found\n');
    
    // Fetch videos from Cloudinary using search API
    console.log('📹 Fetching videos from Cloudinary...');
    let videoResults = { resources: [] };
    try {
      // Try searching for presentation videos by tag
      const searchResults = await cloudinary.search
        .expression('resource_type:video AND tags=Presentation')
        .max_results(500)
        .execute();
      
      videoResults.resources = searchResults.resources;
      
      // If no videos found with tag, get all videos
      if (videoResults.resources.length === 0) {
        console.log('No videos found with Presentation tag, fetching all videos...');
        videoResults = await cloudinary.api.resources({
          type: 'upload',
          max_results: 500,
          resource_type: 'video'
        });
      }
    } catch (error) {
      console.log('Search API failed, falling back to resources API...');
      videoResults = await cloudinary.api.resources({
        type: 'upload',
        max_results: 500,
        resource_type: 'video'
      });
    }
    
    console.log(`Found ${videoResults.resources.length} videos\n`);
    
    // Fetch graphics from Cloudinary
    console.log('🖼️  Fetching graphics from Cloudinary...');
    const graphicResults = await cloudinary.api.resources({
      type: 'upload',
      max_results: 500,
      resource_type: 'image'
    });
    
    console.log(`Found ${graphicResults.resources.length} graphics\n`);
    
    // Create Video entries
    console.log('📝 Creating Video entries in Contentful...');
    const videoEntries = [];
    
    for (const video of videoResults.resources) {
      try {
        const entry = await environment.createEntry('video', {
          fields: {
            title: {
              'en-US': formatTitle(video.public_id)
            },
            cloudinaryPublicId: {
              'en-US': video.public_id
            },
            thumbnailUrl: {
              'en-US': video.secure_url.replace(/\.[^/.]+$/, '.jpg')
            },
            width: {
              'en-US': video.width || 1920
            },
            height: {
              'en-US': video.height || 1080
            },
            format: {
              'en-US': getFormat(video.width, video.height)
            },
            tags: {
              'en-US': video.tags || []
            },
            published: {
              'en-US': true
            }
          }
        });
        
        await entry.publish();
        videoEntries.push(entry);
        console.log(`✅ Created video: ${entry.fields.title['en-US']}`);
      } catch (error) {
        console.error(`❌ Failed to create video ${video.public_id}:`, error.message);
      }
    }
    
    // Create Graphic entries
    console.log('\n📝 Creating Graphic entries in Contentful...');
    const graphicEntries = [];
    
    for (const graphic of graphicResults.resources) {
      try {
        const entry = await environment.createEntry('graphic', {
          fields: {
            title: {
              'en-US': formatTitle(graphic.public_id)
            },
            cloudinaryPublicId: {
              'en-US': graphic.public_id
            },
            width: {
              'en-US': graphic.width || 1200
            },
            height: {
              'en-US': graphic.height || 1200
            },
            format: {
              'en-US': getFormat(graphic.width, graphic.height)
            },
            type: {
              'en-US': detectGraphicType(graphic.public_id)
            },
            tags: {
              'en-US': graphic.tags || []
            },
            published: {
              'en-US': true
            }
          }
        });
        
        await entry.publish();
        graphicEntries.push(entry);
        console.log(`✅ Created graphic: ${entry.fields.title['en-US']}`);
      } catch (error) {
        console.error(`❌ Failed to create graphic ${graphic.public_id}:`, error.message);
      }
    }
    
    // Create or update Gallery singleton
    console.log('\n🎨 Creating Gallery singleton...');
    
    // Check if gallery already exists
    const existingGalleries = await environment.getEntries({
      content_type: 'gallery',
      limit: 1
    });
    
    let gallery;
    if (existingGalleries.items.length > 0) {
      gallery = existingGalleries.items[0];
      console.log('Found existing gallery, updating...');
      // Get the latest version of the entry
      gallery = await environment.getEntry(gallery.sys.id);
    } else {
      gallery = await environment.createEntry('gallery', {
        fields: {
          title: {
            'en-US': 'XMA Presentation Gallery'
          }
        }
      });
    }
    
    // Update gallery with references
    gallery.fields.cloudinaryVideos = {
      'en-US': videoEntries.map(entry => ({
        sys: {
          type: 'Link',
          linkType: 'Entry',
          id: entry.sys.id
        }
      }))
    };
    
    gallery.fields.graphicOrder = {
      'en-US': graphicEntries.map(entry => ({
        sys: {
          type: 'Link',
          linkType: 'Entry',
          id: entry.sys.id
        }
      }))
    };
    
    await gallery.update();
    await gallery.publish();
    
    console.log('\n✅ Migration completed successfully!');
    console.log(`📊 Summary: ${videoEntries.length} videos, ${graphicEntries.length} graphics`);
    console.log('\n🎯 Next steps:');
    console.log('1. Go to Contentful and reorder your content using drag-and-drop');
    console.log('2. Add tags to videos/graphics for filtering');
    console.log('3. Update your .env file with Contentful credentials');
    console.log('4. Deploy to Vercel');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Helper functions
function formatTitle(publicId) {
  const filename = publicId.split('/').pop();
  return filename
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function getFormat(width, height) {
  const aspectRatio = width / height;
  if (aspectRatio > 0.9 && aspectRatio < 1.1) return 'square';
  if (aspectRatio < 0.9) return 'reels';
  return 'feed';
}

function detectGraphicType(publicId) {
  const lower = publicId.toLowerCase();
  if (lower.includes('logo')) return 'logo';
  if (lower.includes('banner')) return 'banner';
  if (lower.includes('icon')) return 'icon';
  if (lower.includes('background')) return 'background';
  if (lower.includes('illustration')) return 'illustration';
  if (lower.includes('social')) return 'social';
  return 'image';
}

// Run migration
migrate();