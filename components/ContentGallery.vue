<script setup>
import { ref, computed, onMounted } from 'vue'

const activeTab = ref('videos')

// State for storing videos
const videos = ref([])
const isLoading = ref(true)
const error = ref(null)

// State for video playback
const activeVideo = ref(null)
const isPlaying = ref(false)

// State for storing graphics
const graphics = ref([])
const graphicsLoading = ref(true)
const graphicsError = ref(null)

// State for graphic preview
const activeGraphic = ref(null)
const isPreviewingGraphic = ref(false)

// Function to format video data
const formatVideoData = (item, index) => {
  // Determine format based on aspect ratio
  const aspectRatio = item.width / item.height;
  let format = 'reels'; // Default to reels (9:16)

  if (aspectRatio > 0.9) { // Closer to 1:1 or wider
    format = 'feed';
  }

  return {
    id: index + 1,
    cloudinaryId: item.public_id,
    title: item.title,
    format: format,
    url: item.url || null,
    width: item.width,
    height: item.height
  };
}

// Function to format graphic data
const formatGraphicData = (item, index) => {
  // Determine format based on aspect ratio
  const aspectRatio = item.width / item.height;
  let format = 'reels'; // Default to vertical (9:16)

  if (aspectRatio > 0.9 && aspectRatio < 1.1) {
    format = 'square'; // Close to 1:1
  } else if (aspectRatio >= 1.1) {
    format = 'feed'; // Landscape/horizontal
  }

  // Extract category from folder path
  let category = 'general';
  if (item.public_id) {
    const parts = item.public_id.split('/');
    if (parts.length > 1) {
      category = parts[1] || category;
    }
  }

  // Determine graphic type based on filename or folder
  let type = 'image';
  const typeKeywords = {
    'logo': 'logo',
    'banner': 'banner',
    'icon': 'icon',
    'background': 'background',
    'illustration': 'illustration',
    'social': 'social'
  };

  // Check if any keywords are in the public_id
  Object.entries(typeKeywords).forEach(([keyword, value]) => {
    if (item.public_id.toLowerCase().includes(keyword)) {
      type = value;
    }
  });

  // Format title from filename
  const filename = item.public_id.split('/').pop(); // Get last part after /
  const title = filename
    .replace(/\.\w+$/, '') // Remove file extension
    .replace(/[-_]/g, ' ') // Replace dashes and underscores with spaces
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  return {
    id: `graphic-${index + 1}`,
    cloudinaryId: item.public_id,
    title: title,
    type: type,
    industry: category,
    format: format,
    url: item.url || null,
    width: item.width,
    height: item.height
  };
}

// Fetch videos from the JSON file
const fetchCloudinaryVideos = async () => {
  try {
    isLoading.value = true;

    // Load the JSON file
    const response = await fetch('/cloudinary-videos-sorted.json');

    if (!response.ok) {
      throw new Error(`Failed to fetch videos: ${response.statusText}`);
    }

    const data = await response.json();

    // Format the videos
    videos.value = data.map(formatVideoData);

    console.log(`Loaded ${videos.value.length} videos`);

  } catch (err) {
    console.error('Error loading videos:', err);
    error.value = 'Failed to load videos. Please check if the JSON file exists.';
  } finally {
    isLoading.value = false;
  }
};

// Fetch graphics from the JSON file
const fetchCloudinaryGraphics = async () => {
  try {
    graphicsLoading.value = true;

    // Load the JSON file
    const response = await fetch('/cloudinary-graphics-sorted.json');

    if (!response.ok) {
      throw new Error(`Failed to fetch graphics: ${response.statusText}`);
    }

    const data = await response.json();

    // Format the graphics
    graphics.value = data.map(formatGraphicData);

    console.log(`Loaded ${graphics.value.length} graphics`);

  } catch (err) {
    console.error('Error loading graphics:', err);
    graphicsError.value = 'Failed to load graphics. Please check if the JSON file exists.';
  } finally {
    graphicsLoading.value = false;
  }
};

const getAspectRatioClass = (format, type) => {
  if (type === 'videos') {
    return format === 'reels' ? 'h-96' : 'h-80'
  }

  // For graphics
  return format === 'square' ? 'h-64' :
    format === 'reels' ? 'h-96' :
      'h-72'
}

// Play video function
const playVideo = (video) => {
  activeVideo.value = video;
  isPlaying.value = true;
  // Prevent body scrolling when modal is open
  document.body.style.overflow = 'hidden';
}

// Close video player
const closeVideoPlayer = () => {
  isPlaying.value = false;
  // Wait for animation to complete before removing the video
  setTimeout(() => {
    activeVideo.value = null;
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  }, 300);
}

// Preview graphic function
const previewGraphic = (graphic) => {
  activeGraphic.value = graphic;
  isPreviewingGraphic.value = true;
  // Prevent body scrolling when modal is open
  document.body.style.overflow = 'hidden';
}

// Close graphic preview
const closeGraphicPreview = () => {
  isPreviewingGraphic.value = false;
  // Wait for animation to complete before removing the graphic
  setTimeout(() => {
    activeGraphic.value = null;
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  }, 300);
}

// Determine if content is loading
const isContentLoading = computed(() => {
  return activeTab.value === 'videos' ? isLoading.value : graphicsLoading.value;
});

// Determine if there's an error
const contentError = computed(() => {
  return activeTab.value === 'videos' ? error.value : graphicsError.value;
});

// Filtered content based on active tab
const filteredContent = computed(() => {
  return activeTab.value === 'videos' ? videos.value : graphics.value;
})

// Use computed properties to conditionally style the container based on active tab
const contentContainerClass = computed(() => {
  return activeTab.value === 'videos' 
    ? 'grid grid-cols-3 gap-4 pb-12' // Grid for videos
    : 'columns-3 gap-4 space-y-4 pb-12'; // Masonry for graphics
});

// Use computed properties to conditionally style the items based on active tab
const contentItemClass = computed(() => {
  return activeTab.value === 'videos'
    ? 'bg-zinc-800/40 rounded-lg overflow-hidden group' // Grid item style
    : 'break-inside-avoid mb-4 bg-zinc-800/40 rounded-lg overflow-hidden group'; // Masonry item style
});

// Fetch data when component mounts
onMounted(() => {
  fetchCloudinaryVideos();
  fetchCloudinaryGraphics();

  // Add event listener to close video player on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (isPlaying.value) {
        closeVideoPlayer();
      }
      if (isPreviewingGraphic.value) {
        closeGraphicPreview();
      }
    }
  });
})
</script>

<template>
  <!-- Tabs -->
  <div class="flex gap-4 mb-8">
    <button v-for="tab in ['videos', 'graphics']" :key="tab" @click="activeTab = tab" :class="[
      'px-4 text-sm py-2 rounded-lg font-medium transition-colors',
      activeTab === tab ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'
    ]">
      {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
    </button>
  </div>

  <!-- Loading state -->
  <div v-if="isContentLoading" class="flex justify-center items-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
  </div>

  <!-- Error state -->
  <div v-else-if="contentError" class="text-center py-12 text-red-500">
    {{ contentError }}
  </div>

  <!-- Dynamic layout container - switches between grid and masonry -->
  <div v-else :class="contentContainerClass">
    <div v-for="item in filteredContent" :key="item.id" :class="contentItemClass">
      <!-- Content Preview -->
      <div :class="[
        getAspectRatioClass(item.format, activeTab),
        'bg-zinc-900 relative group-hover:opacity-90 transition-opacity cursor-pointer'
      ]" @click="activeTab === 'videos' ? playVideo(item) : previewGraphic(item)">
        <!-- Video preview image -->
        <img v-if="activeTab === 'videos'" :src="item.url ? item.url.replace('.mp4', '.jpg') : null" :alt="item.title"
          class="w-full h-full object-cover"
          @error="$event.target.src = `https://res.cloudinary.com/dw1j7izud/video/upload/w_auto,c_scale,f_auto,q_auto/e_preview:duration_2/${item.cloudinaryId}`" />

        <!-- Image for graphics -->
        <img v-else :src="item.url" :alt="item.title" class="w-full h-full object-cover" />

        <!-- Fallback for non-image content -->
        <div v-if="!item.url" class="absolute inset-0 flex items-center justify-center">
          <div :class="[
            activeTab === 'videos' ? 'i-lucide-play' : 'i-lucide-image',
            'w-12 h-12 text-zinc-600 group-hover:text-zinc-400 transition-colors'
          ]" />
        </div>

        <!-- Play button overlay for videos -->
        <div v-if="activeTab === 'videos'" class="absolute inset-0 flex items-center justify-center">
          <div
            class="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-red-600/50 transition-colors">
            <div class="i-lucide-play w-8 h-8 text-white ml-1"></div>
          </div>
        </div>

        <!-- View overlay for graphics -->
        <div v-if="activeTab === 'graphics'"
          class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div
            class="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-red-600/50 transition-colors">
            <div class="i-lucide-eye w-8 h-8 text-white"></div>
          </div>
        </div>
      </div>

      <!-- Content Info -->
      <!-- <div class="p-4"> -->
      <!--   <h3 class="!text-lg font-bold mb-2">{{ item.title }}</h3> -->
      <!--   <div class="flex flex-wrap gap-2"> -->
      <!--     <span class="px-2 py-1 rounded bg-zinc-700 !text-xs">{{ item.type }}</span> -->
      <!--     <span class="px-2 py-1 rounded bg-zinc-700 !text-xs">{{ item.industry }}</span> -->
      <!--     <span v-if="activeTab === 'graphics'" class="px-2 py-1 rounded bg-zinc-700 !text-xs">{{ item.format }}</span> -->
      <!--   </div> -->
      <!-- </div> -->
    </div>
  </div>

  <!-- Video Player Modal (Fully Responsive) -->
  <div v-if="activeVideo && isPlaying"
    class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center transition-opacity duration-300"
    :class="{ 'opacity-0': !isPlaying, 'opacity-100': isPlaying }" @click="closeVideoPlayer">
    <div class="relative w-full h-full p-4 md:p-6 flex flex-col items-center justify-center" @click.stop>
      <!-- Close button - Fixed position for better accessibility -->
      <button
        class="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 rounded-full p-2 text-white transition-colors"
        @click="closeVideoPlayer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <!-- Video container with controlled dimensions -->
      <div class="w-full h-full max-w-4xl max-h-[80vh] flex flex-col">
        <!-- Video title above video -->
        <h3 class="text-white text-xl font-bold mb-2 truncate px-2">
          {{ activeVideo ? activeVideo.title : '' }}
        </h3>

        <!-- Video element with responsive sizing -->
        <div class="flex-1 bg-black rounded-lg shadow-2xl overflow-hidden flex items-center justify-center">
          <video v-if="activeVideo" :src="activeVideo.url" controls autoplay class="max-w-full max-h-full"
            style="object-fit: contain;"></video>
        </div>
      </div>
    </div>
  </div>

  <!-- Graphic Preview Modal -->
  <div v-if="activeGraphic && isPreviewingGraphic"
    class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center transition-opacity duration-300"
    :class="{ 'opacity-0': !isPreviewingGraphic, 'opacity-100': isPreviewingGraphic }" @click="closeGraphicPreview">
    <div class="relative w-full h-full p-4 md:p-6 flex flex-col items-center justify-center" @click.stop>
      <!-- Close button -->
      <button
        class="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 rounded-full p-2 text-white transition-colors"
        @click="closeGraphicPreview">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <!-- Graphic container with controlled dimensions -->
      <div class="w-full h-full max-w-4xl max-h-[80vh] flex flex-col">
        <!-- Graphic title above image -->
        <h3 class="text-white text-xl font-bold mb-2 truncate px-2">
          {{ activeGraphic ? activeGraphic.title : '' }}
        </h3>

        <!-- Graphic details -->
        <div class="flex gap-2 mb-2 px-2">
          <span class="px-2 py-1 rounded bg-zinc-700 text-xs text-white">{{ activeGraphic?.type }}</span>
          <span class="px-2 py-1 rounded bg-zinc-700 text-xs text-white">{{ activeGraphic?.industry }}</span>
          <span class="px-2 py-1 rounded bg-zinc-700 text-xs text-white">{{ activeGraphic?.width }} × {{
            activeGraphic?.height }}</span>
        </div>

        <!-- Image with responsive sizing -->
        <div class="flex-1 bg-black rounded-lg shadow-2xl overflow-hidden flex items-center justify-center">
          <img v-if="activeGraphic" :src="activeGraphic.url" :alt="activeGraphic.title" class="max-w-full max-h-full"
            style="object-fit: contain;" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Responsive grid styles */
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

/* Masonry column styles */
.columns-3 {
  column-count: 3;
  column-gap: 1rem;
}

/* Responsive styles for both layouts */
@media (max-width: 1024px) {
  .grid-cols-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  .columns-3 {
    column-count: 2;
  }
}

@media (max-width: 640px) {
  .grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .columns-3 {
    column-count: 1;
  }
}
</style>
