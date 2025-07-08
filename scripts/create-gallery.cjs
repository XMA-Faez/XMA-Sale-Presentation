#!/usr/bin/env node

const { createClient } = require('contentful-management');
require('dotenv').config();

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
});

async function createGallery() {
  try {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment('master');
    
    // Get all videos
    const videos = await environment.getEntries({
      content_type: 'video'
    });
    
    // Get all graphics
    const graphics = await environment.getEntries({
      content_type: 'graphic'
    });
    
    console.log(`Found ${videos.items.length} videos and ${graphics.items.length} graphics`);
    
    // Create gallery
    const gallery = await environment.createEntry('gallery', {
      fields: {
        title: {
          'en-US': 'XMA Presentation Gallery'
        },
        cloudinaryVideos: {
          'en-US': videos.items.map(video => ({
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: video.sys.id
            }
          }))
        },
        graphicOrder: {
          'en-US': graphics.items.map(graphic => ({
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: graphic.sys.id
            }
          }))
        }
      }
    });
    
    await gallery.publish();
    console.log('✅ Gallery created and published!');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

createGallery();