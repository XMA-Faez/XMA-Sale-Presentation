#!/usr/bin/env node

const { createClient } = require('contentful-management');
require('dotenv').config();

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
});

async function setupContentModels() {
  try {
    console.log('🚀 Setting up Contentful content models...\n');
    
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment('master');
    
    // Create Video content type
    console.log('📹 Creating Video content type...');
    try {
      const videoType = await environment.createContentTypeWithId('video', {
        name: 'Video',
        displayField: 'title',
        fields: [
          {
            id: 'title',
            name: 'Title',
            type: 'Symbol',
            required: true
          },
          {
            id: 'cloudinaryPublicId',
            name: 'Cloudinary Public ID',
            type: 'Symbol',
            required: true
          },
          {
            id: 'thumbnailUrl',
            name: 'Thumbnail URL',
            type: 'Symbol',
            required: false
          },
          {
            id: 'width',
            name: 'Width',
            type: 'Number',
            required: false
          },
          {
            id: 'height',
            name: 'Height',
            type: 'Number',
            required: false
          },
          {
            id: 'format',
            name: 'Format',
            type: 'Symbol',
            required: false,
            validations: [{
              in: ['feed', 'square', 'reels']
            }]
          },
          {
            id: 'tags',
            name: 'Tags',
            type: 'Array',
            required: false,
            items: {
              type: 'Symbol',
              validations: [{
                in: ['service', 'product', 'best-performing']
              }]
            }
          },
          {
            id: 'published',
            name: 'Published',
            type: 'Boolean',
            required: false,
            defaultValue: {
              'en-US': true
            }
          }
        ]
      });
      await videoType.publish();
      console.log('✅ Video content type created');
    } catch (err) {
      if (err.name === 'VersionMismatch') {
        console.log('⚠️  Video content type already exists');
      } else {
        throw err;
      }
    }
    
    // Create Graphic content type
    console.log('\n🖼️  Creating Graphic content type...');
    try {
      const graphicType = await environment.createContentTypeWithId('graphic', {
        name: 'Graphic',
        displayField: 'title',
        fields: [
          {
            id: 'title',
            name: 'Title',
            type: 'Symbol',
            required: true
          },
          {
            id: 'cloudinaryPublicId',
            name: 'Cloudinary Public ID',
            type: 'Symbol',
            required: true
          },
          {
            id: 'width',
            name: 'Width',
            type: 'Number',
            required: false
          },
          {
            id: 'height',
            name: 'Height',
            type: 'Number',
            required: false
          },
          {
            id: 'format',
            name: 'Format',
            type: 'Symbol',
            required: false,
            validations: [{
              in: ['feed', 'square', 'reels']
            }]
          },
          {
            id: 'type',
            name: 'Type',
            type: 'Symbol',
            required: false,
            validations: [{
              in: ['logo', 'banner', 'social', 'icon', 'illustration', 'background', 'image']
            }]
          },
          {
            id: 'industry',
            name: 'Industry',
            type: 'Symbol',
            required: false
          },
          {
            id: 'tags',
            name: 'Tags',
            type: 'Array',
            required: false,
            items: {
              type: 'Symbol'
            }
          },
          {
            id: 'published',
            name: 'Published',
            type: 'Boolean',
            required: false,
            defaultValue: {
              'en-US': true
            }
          }
        ]
      });
      await graphicType.publish();
      console.log('✅ Graphic content type created');
    } catch (err) {
      if (err.name === 'VersionMismatch') {
        console.log('⚠️  Graphic content type already exists');
      } else {
        throw err;
      }
    }
    
    // Create Gallery content type
    console.log('\n🎨 Creating Gallery content type...');
    try {
      const galleryType = await environment.createContentTypeWithId('gallery', {
        name: 'Gallery',
        displayField: 'title',
        fields: [
          {
            id: 'title',
            name: 'Title',
            type: 'Symbol',
            required: true,
            defaultValue: {
              'en-US': 'XMA Presentation Gallery'
            }
          },
          {
            id: 'videoOrder',
            name: 'Video Order',
            type: 'Array',
            required: false,
            items: {
              type: 'Link',
              linkType: 'Entry',
              validations: [{
                linkContentType: ['video']
              }]
            }
          },
          {
            id: 'graphicOrder',
            name: 'Graphic Order',
            type: 'Array',
            required: false,
            items: {
              type: 'Link',
              linkType: 'Entry',
              validations: [{
                linkContentType: ['graphic']
              }]
            }
          }
        ]
      });
      await galleryType.publish();
      console.log('✅ Gallery content type created');
    } catch (err) {
      if (err.name === 'VersionMismatch') {
        console.log('⚠️  Gallery content type already exists');
      } else {
        throw err;
      }
    }
    
    console.log('\n✅ All content models created successfully!');
    console.log('\n📝 Next step: Run the migration script');
    console.log('   bun scripts/migrate-to-contentful.js');
    
  } catch (error) {
    console.error('❌ Error setting up content models:', error);
    process.exit(1);
  }
}

setupContentModels();