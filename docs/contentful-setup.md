# Contentful + Cloudinary Setup Guide

## Overview
This guide helps you set up Contentful as a CMS for managing your Cloudinary media gallery with drag-and-drop ordering.

## Step 1: Create Contentful Content Models

### 1.1 Create Video Content Type
1. Go to Content Model in Contentful
2. Create new Content Type: `Video`
3. Add fields:
   - **title** (Short text, Required)
   - **cloudinaryPublicId** (Short text, Required) 
   - **thumbnailUrl** (Short text)
   - **width** (Number)
   - **height** (Number)
   - **format** (Short text) - Validation: Accept only `feed`, `square`, `reels`
   - **tags** (Short text, List)
   - **published** (Boolean, Default: true)

### 1.2 Create Graphic Content Type
1. Create new Content Type: `Graphic`
2. Add fields:
   - **title** (Short text, Required)
   - **cloudinaryPublicId** (Short text, Required)
   - **width** (Number)
   - **height** (Number)
   - **format** (Short text) - Validation: Accept only `feed`, `square`, `reels`
   - **type** (Short text) - Validation: Accept only `logo`, `banner`, `social`, `icon`, `illustration`, `background`, `image`
   - **tags** (Short text, List)
   - **published** (Boolean, Default: true)

### 1.3 Create Gallery Content Type (Singleton)
1. Create new Content Type: `Gallery`
2. Add fields:
   - **title** (Short text, Required, Default: "XMA Presentation Gallery")
   - **videoOrder** (References, many) - Validation: Accept only Video entries
   - **graphicOrder** (References, many) - Validation: Accept only Graphic entries

## Step 2: Environment Setup

### 2.1 Get Contentful Credentials
1. Go to Settings → API keys in Contentful
2. Create a new API key
3. Copy:
   - Space ID
   - Content Delivery API - access token
   - Content Management API - access token (for migration)

### 2.2 Update .env file
```env
# Contentful Configuration
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token
CONTENTFUL_MANAGEMENT_TOKEN=your_management_api_token

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=dw1j7izud
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Step 3: Run Migration

### 3.1 Install dependencies
```bash
bun add contentful-management
```

### 3.2 Run migration script
```bash
node scripts/migrate-to-contentful.js
```

This will:
- Fetch all videos from `Videos/Presentation Videos` in Cloudinary
- Fetch all graphics from `graphics` folder in Cloudinary
- Create entries in Contentful for each asset
- Create/update the Gallery singleton with references

## Step 4: Manage Content in Contentful

### 4.1 Reorder Content
1. Go to Content in Contentful
2. Find and open "XMA Presentation Gallery"
3. Drag and drop videos/graphics to reorder
4. Save and publish

### 4.2 Add Tags
1. Edit individual video/graphic entries
2. Add tags like `service`, `product`, `best-performing`
3. These will be used for filtering in the UI

### 4.3 Control Publishing
- Set `published` to false to hide content
- Only published items appear in the gallery

## Step 5: Deploy to Vercel

### 5.1 Add Environment Variables
In Vercel dashboard:
1. Go to Settings → Environment Variables
2. Add all variables from .env file

### 5.2 Deploy
```bash
git add .
git commit -m "Add Contentful integration"
git push
```

## How It Works

1. **Frontend** calls `/api/gallery` endpoint
2. **API** fetches from Contentful (Gallery with all references)
3. **Data** is transformed and enriched with Cloudinary URLs
4. **Gallery** displays content in CMS-defined order
5. **Fallback** to static JSON files if API fails

## Benefits

- ✅ Drag-and-drop ordering in Contentful
- ✅ No manual order numbers
- ✅ Tag-based filtering
- ✅ Publishing control
- ✅ Maintains Cloudinary for optimized delivery
- ✅ Fallback to static files if needed

## Troubleshooting

### API returns 404
- Check Gallery entry exists in Contentful
- Verify environment variables are set
- Check API endpoint is deployed

### Missing content
- Ensure entries are published in Contentful
- Check cloudinaryPublicId matches actual Cloudinary paths
- Verify tags match filter values

### Order not updating
- Make sure to publish Gallery after reordering
- Clear browser cache
- Check API is returning fresh data