<script setup>
import { ref } from 'vue'
import ContentGallery from './ContentGallery.vue'

const props = defineProps({
  client: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const getIndustryColor = (industry) => {
  const colors = {
    'real-estate': 'bg-blue-500/20 text-blue-500',
    'education': 'bg-green-500/20 text-green-500',
    'retail': 'bg-purple-500/20 text-purple-500',
    'default': 'bg-gray-500/20 text-gray-500'
  }
  return colors[industry] || colors.default
}

const activeTab = ref('content')

const stats = [
  {
    label: 'Total Campaigns',
    value: props.client.stats.totalCampaigns,
    icon: 'i-lucide-megaphone'
  },
  {
    label: 'Active Leads',
    value: props.client.stats.activeLeads,
    icon: 'i-lucide-users'
  },
  {
    label: 'Total Videos',
    value: props.client.stats.totalVideos,
    icon: 'i-lucide-video'
  },
  {
    label: 'Total Graphics',
    value: props.client.stats.totalGraphics,
    icon: 'i-lucide-image'
  },
  {
    label: 'Conversion Rate',
    value: props.client.stats.conversionRate,
    icon: 'i-lucide-percent'
  },
  {
    label: 'Monthly Budget',
    value: props.client.stats.monthlyBudget,
    icon: 'i-lucide-wallet'
  }
]
</script>

<template>
  <div class="fixed inset-0 bg-zinc-900 overflow-y-auto">
    <!-- Header -->
    <div class="sticky top-0 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 z-10">
      <div class="max-w-6xl mx-auto px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <button 
              @click="$emit('close')"
              class="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <div class="i-lucide-arrow-left w-5 h-5" />
            </button>
            <div class="flex items-center gap-3">
              <img 
                :src="client.logo" 
                class="w-10 h-10 rounded-lg bg-zinc-700"
              />
              <h1 class="text-xl font-bold">{{ client.name }}</h1>
            </div>
          </div>
          <span 
            class="px-3 py-1 rounded-full text-sm font-medium"
            :class="getIndustryColor(client.industry)"
          >
            {{ client.industry }}
          </span>
        </div>

        <!-- Tabs -->
        <div class="flex gap-8 mt-6">
          <button
            v-for="tab in ['content', 'stats']"
            :key="tab"
            @click="activeTab = tab"
            class="pb-4 px-2 text-sm font-medium relative"
            :class="activeTab === tab ? 'text-white' : 'text-zinc-400 hover:text-white'"
          >
            {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
            <div 
              v-if="activeTab === tab"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-6xl mx-auto px-8 py-8">
      <!-- Stats Tab -->
      <div v-if="activeTab === 'stats'" class="grid grid-cols-3 gap-6">
        <div 
          v-for="stat in stats"
          :key="stat.label"
          class="bg-zinc-800/40 rounded-lg p-6"
        >
          <div class="flex items-center gap-3 text-zinc-400 mb-2">
            <div :class="[stat.icon, 'w-5 h-5']" />
            <span class="text-sm">{{ stat.label }}</span>
          </div>
          <div class="text-2xl font-bold">{{ stat.value }}</div>
        </div>
      </div>

      <!-- Content Tab -->
      <div v-if="activeTab === 'content'">
        <ContentGallery />
      </div>
    </div>
  </div>
</template>

<style>
.fixed {
  position: fixed;
}
</style>
