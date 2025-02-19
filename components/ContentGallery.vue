<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('videos')
const activeFilter = ref('all')

// Video data
const videos = [
  {
    id: 1,
    title: 'Product Demo',
    type: 'product',
    industry: 'real-estate',
    format: 'reels', // 9:16
    views: '2.5k',
    engagement: '68%',
    performance: 'high'
  },
  {
    id: 2,
    title: 'Brand reels',
    type: 'brand',
    industry: 'education',
    format: 'reels', // 4:5
    views: '1.8k',
    engagement: '72%',
    performance: 'medium'
  },
  {
    id: 3,
    title: 'Brand reels',
    type: 'brand',
    industry: 'education',
    format: 'reels', // 4:5
    views: '1.8k',
    engagement: '72%',
    performance: 'medium'
  },
  {
    id: 4,
    title: 'Brand reels',
    type: 'brand',
    industry: 'education',
    format: 'reels', // 4:5
    views: '1.8k',
    engagement: '72%',
    performance: 'medium'
  },
  {
    id: 5,
    title: 'Brand reels',
    type: 'brand',
    industry: 'education',
    format: 'reels', // 4:5
    views: '1.8k',
    engagement: '72%',
    performance: 'medium'
  },
]

// Graphics data
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
]

const filters = {
  videos: {
    type: ['all', 'product', 'brand', 'testimonial'],
    industry: ['all', 'real-estate', 'education', 'retail'],
    format: ['all', 'reels', 'feed'],
    performance: ['all', 'high', 'medium', 'low']
  },
  graphics: {
    type: ['all', 'banner', 'post', 'reels'],
    industry: ['all', 'real-estate', 'education', 'retail'],
    format: ['all', 'square', 'reels', 'portrait'],
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
    return format === 'reels' ? 'h-96' : 'h-80'
  }
  return format === 'square' ? 'h-64' : 
         format === 'reels' ? 'h-96' : 
         'h-72'
}

const filteredContent = computed(() => {
  const content = activeTab.value === 'videos' ? videos : graphics
  return content.filter(item => {
    return Object.entries(currentFilters.value).every(([key, value]) => {
      return value === 'all' || item[key] === value
    })
  })
})
</script>

<template>
  <!-- Tabs -->
  <div class="flex gap-4 mb-8">
    <button 
      v-for="tab in ['videos', 'graphics']"
      :key="tab"
      @click="activeTab = tab"
      :class="[
        'px-4 text-sm py-2 rounded-lg font-medium transition-colors',
        activeTab === tab ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'
      ]"
    >
      {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
    </button>
  </div>

  <!-- Filters -->
  <div class="grid grid-cols-4 gap-4 mb-8">
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

  <!-- Masonry Content Grid -->
  <div class="columns-3 gap-4 space-y-4">
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
