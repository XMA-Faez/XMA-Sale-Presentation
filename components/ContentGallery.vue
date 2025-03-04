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

// Graphics data (unchanged for now)
const graphics = [
  {
    id: 1,
    title: 'Product Banner',
    type: 'banner',
    industry: 'real-estate',
    format: 'square', // 1:1
    engagement: '65%',
    performance: 'high'
  },
  {
    id: 2,
    title: 'Promotional Post',
    type: 'post',
    industry: 'education',
    format: 'reels', // 9:16
    engagement: '58%',
    performance: 'medium'
  },
  {
    id: 3,
    title: 'Promotional Post',
    type: 'post',
    industry: 'education',
    format: 'reels', // 9:16
    engagement: '58%',
    performance: 'medium'
  },
  // ... other graphics
]

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
    type: 'video',
    industry: 'general',
    format: format,
    // Use the direct URL from the JSON file if available
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

const getAspectRatioClass = (format, type) => {
  if (type === 'videos') {
    return format === 'reels' ? 'h-96' : 'h-80'
  }
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

// Simplified version without filtering
const filteredContent = computed(() => {
  return activeTab.value === 'videos' ? videos.value : graphics;
})

// Fetch videos when component mounts
onMounted(() => {
  fetchCloudinaryVideos();

  // Add event listener to close video player on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isPlaying.value) {
      closeVideoPlayer();
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
  <div v-if="isLoading && activeTab === 'videos'" class="flex justify-center items-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
  </div>

  <!-- Error state -->
  <div v-else-if="error && activeTab === 'videos'" class="text-center py-12 text-red-500">
    {{ error }}
  </div>

  <!-- Masonry Content Grid -->
  <div v-else class="columns-3 gap-4 space-y-4 pb-12">
    <div v-for="item in filteredContent" :key="item.id"
      class="break-inside-avoid mb-4 bg-zinc-800/40 rounded-lg overflow-hidden group">
      <!-- Content Preview -->
      <div :class="[
        getAspectRatioClass(item.format, activeTab),
        'bg-zinc-900 relative group-hover:opacity-90 transition-opacity cursor-pointer'
      ]" @click="activeTab === 'videos' ? playVideo(item) : null">
        <!-- Video preview image -->
        <img v-if="activeTab === 'videos'" :src="item.url ? item.url.replace('.mp4', '.jpg') : null" :alt="item.title"
          class="w-full h-full object-cover"
          @error="$event.target.src = `https://res.cloudinary.com/dw1j7izud/video/upload/w_auto,c_scale,f_auto,q_auto/e_preview:duration_2/${item.cloudinaryId}`" />

        <!-- Fallback for non-image content -->
        <div v-else class="absolute inset-0 flex items-center justify-center">
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
      </div>

      <!-- Content Info -->
      <div class="p-4">
        <h3 class="!text-lg font-bold mb-2">{{ item.title }}</h3>
        <div class="flex flex-wrap gap-2">
          <span class="px-2 py-1 rounded bg-zinc-700 !text-xs">{{ item.type }}</span>
          <span class="px-2 py-1 rounded bg-zinc-700 !text-xs">{{ item.industry }}</span>
        </div>
      </div>
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
</template>

<style>
/* Optional: Add some smooth transitions */
.columns-3 {
  column-count: 3;
  column-gap: 1rem;
}

@media (max-width: 1024px) {
  .columns-3 {
    column-count: 2;
  }
}

@media (max-width: 640px) {
  .columns-3 {
    column-count: 1;
  }
}
</style>
