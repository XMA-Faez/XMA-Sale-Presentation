<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  videos: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: 'Luxury Villa Showcase',
        type: 'product',
        industry: 'real-estate',
        format: 'story',
        views: '5.2k',
        engagement: '78%',
        performance: 'high'
      },
      {
        id: 2,
        title: 'Student Success Stories',
        type: 'testimonial',
        industry: 'education',
        format: 'story',
        views: '3.8k',
        engagement: '82%',
        performance: 'high'
      },
      {
        id: 3,
        title: 'Downtown Living',
        type: 'brand',
        industry: 'real-estate',
        format: 'feed',
        views: '4.1k',
        engagement: '71%',
        performance: 'medium'
      },
      {
        id: 4,
        title: 'Summer Collection',
        type: 'product',
        industry: 'retail',
        format: 'story',
        views: '6.3k',
        engagement: '75%',
        performance: 'high'
      },
      {
        id: 5,
        title: 'Campus Tour',
        type: 'brand',
        industry: 'education',
        format: 'story',
        views: '2.9k',
        engagement: '69%',
        performance: 'medium'
      },
      {
        id: 6,
        title: 'Store Opening Event',
        type: 'brand',
        industry: 'retail',
        format: 'feed',
        views: '3.5k',
        engagement: '73%',
        performance: 'medium'
      }
    ]
  },
  graphics: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: 'Property Listing Ad',
        type: 'banner',
        industry: 'real-estate',
        format: 'horizontal',
        engagement: '65%',
        performance: 'high'
      },
      {
        id: 2,
        title: 'Course Enrollment',
        type: 'post',
        industry: 'education',
        format: 'square',
        engagement: '58%',
        performance: 'medium'
      },
      {
        id: 3,
        title: 'Seasonal Sale',
        type: 'story',
        industry: 'retail',
        format: 'portrait',
        engagement: '72%',
        performance: 'high'
      },
      {
        id: 4,
        title: 'Luxury Apartment Launch',
        type: 'banner',
        industry: 'real-estate',
        format: 'horizontal',
        engagement: '68%',
        performance: 'medium'
      },
      {
        id: 5,
        title: 'Faculty Spotlight',
        type: 'post',
        industry: 'education',
        format: 'square',
        engagement: '61%',
        performance: 'medium'
      },
      {
        id: 6,
        title: 'New Collection Preview',
        type: 'story',
        industry: 'retail',
        format: 'portrait',
        engagement: '70%',
        performance: 'high'
      }
    ]
  }
})

const activeTab = ref('videos')
const activeFilter = ref('all')

const filters = {
  videos: {
    type: ['all', 'product', 'brand', 'testimonial'],
    industry: ['all', 'real-estate', 'education', 'retail'],
    format: ['all', 'story', 'feed'],
    performance: ['all', 'high', 'medium', 'low']
  },
  graphics: {
    type: ['all', 'banner', 'post', 'story'],
    industry: ['all', 'real-estate', 'education', 'retail'],
    format: ['all', 'square', 'horizontal', 'portrait'],
    performance: ['all', 'high', 'medium', 'low']
  }
}

const currentFilters = ref({
  type: 'all',
  industry: 'all',
  format: 'all',
  performance: 'all'
})

const getAspectRatioClass = (format, type) => {
  if (type === 'videos') {
    return format === 'story' ? 'h-96' : 'h-80'
  }
  return format === 'square' ? 'h-64' : 
         format === 'horizontal' ? 'h-96' : 
         'h-72'
}

const filteredContent = computed(() => {
  const content = activeTab.value === 'videos' ? props.videos : props.graphics
  return content.filter(item => {
    return Object.entries(currentFilters.value).every(([key, value]) => {
      return value === 'all' || item[key] === value
    })
  })
})

// Check if there's content for each tab
const hasVideos = computed(() => props.videos.length > 0)
const hasGraphics = computed(() => props.graphics.length > 0)

// Set initial active tab based on available content
if (!hasVideos.value && hasGraphics.value) {
  activeTab.value = 'graphics'
}
</script>

<template>
  <!-- Tabs -->
  <div v-if="hasVideos || hasGraphics" class="flex gap-4 mb-8">
    <button 
      v-if="hasVideos"
      @click="activeTab = 'videos'"
      :class="[
        'px-4 text-sm py-2 rounded-lg font-medium transition-colors',
        activeTab === 'videos' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'
      ]"
    >
      Videos
    </button>
    <button 
      v-if="hasGraphics"
      @click="activeTab = 'graphics'"
      :class="[
        'px-4 text-sm py-2 rounded-lg font-medium transition-colors',
        activeTab === 'graphics' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'
      ]"
    >
      Graphics
    </button>
  </div>

  <!-- Filters -->
  <div v-if="filteredContent.length > 0" class="grid grid-cols-4 gap-4 mb-8">
    <div v-for="(options, filter) in filters[activeTab]" :key="filter" class="space-y-2">
      <label class="!text-sm font-medium text-zinc-400">{{ filter.charAt(0).toUpperCase() + filter.slice(1) }}</label>
      <select 
        v-model="currentFilters[filter]"
        class="w-full bg-zinc-800 rounded-lg px-3 py-2 !text-sm"
      >
        <option 
          v-for="option in options" 
          :key="option"
          :value="option"
        >
          {{ option.charAt(0).toUpperCase() + option.slice(1) }}
        </option>
      </select>
    </div>
  </div>

  <!-- Empty State -->
  <div 
    v-if="!hasVideos && !hasGraphics" 
    class="text-center py-12 text-zinc-400"
  >
    No content available
  </div>

  <!-- Masonry Content Grid -->
  <div v-else-if="filteredContent.length > 0" class="columns-3 gap-4 space-y-4">
    <div 
      v-for="item in filteredContent"
      :key="item.id"
      class="break-inside-avoid mb-4 bg-zinc-800/40 rounded-lg overflow-hidden group"
    >
      <!-- Content Preview -->
      <div 
        :class="[
          getAspectRatioClass(item.format, activeTab),
          'bg-zinc-900 relative group-hover:opacity-90 transition-opacity'
        ]"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <div 
            :class="[
              activeTab === 'videos' ? 'i-lucide-play' : 'i-lucide-image',
              'w-12 h-12 text-zinc-600 group-hover:text-zinc-400 transition-colors'
            ]"
          />
        </div>
        <!-- Format indicator -->
        <div class="absolute top-2 right-2 px-2 py-1 rounded bg-black/50 !text-xs font-medium">
          {{ item.format }}
        </div>
      </div>
      <!-- Content Info -->
      <div class="p-4">
        <h3 class="!text-lg font-bold mb-2">{{ item.title }}</h3>
        <div class="flex flex-wrap gap-2 mb-3">
          <span class="px-2 py-1 rounded bg-zinc-700 !text-xs">{{ item.type }}</span>
          <span class="px-2 py-1 rounded bg-zinc-700 !text-xs">{{ item.industry }}</span>
          <span 
            class="px-2 py-1 rounded !text-xs"
            :class="{
              'bg-green-500/20 text-green-500': item.performance === 'high',
              'bg-yellow-500/20 text-yellow-500': item.performance === 'medium',
              'bg-red-500/20 text-red-500': item.performance === 'low'
            }"
          >
            {{ item.performance }}
          </span>
        </div>
        <div class="flex items-center gap-4 !text-sm text-zinc-400">
          <div v-if="activeTab === 'videos'" class="flex items-center gap-1">
            <div class="i-lucide-eye w-4 h-4" />
            {{ item.views }} views
          </div>
          <div class="flex items-center gap-1">
            <div class="i-lucide-activity w-4 h-4" />
            {{ item.engagement }} engagement
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- No Results -->
  <div 
    v-else 
    class="text-center py-12 text-zinc-400"
  >
    No results found with current filters
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
