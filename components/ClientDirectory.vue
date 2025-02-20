<script setup>
import ClientProfile from './ClientProfile.vue'
import { ref } from 'vue'

// Sample client data
const clients = [
  {
    id: 1,
    name: 'Dubai Real Estate Co.',
    industry: 'real-estate',
    logo: '/api/placeholder/80/80',
    stats: {
      totalCampaigns: 12,
      activeLeads: 245,
      totalVideos: 28,
      totalGraphics: 56,
      conversionRate: '12.5%',
      monthlyBudget: '15,000 AED'
    }
  },
  {
    id: 2,
    name: 'Elite Education Center',
    industry: 'education',
    logo: '/api/placeholder/80/80',
    stats: {
      totalCampaigns: 8,
      activeLeads: 180,
      totalVideos: 15,
      totalGraphics: 32,
      conversionRate: '8.9%',
      monthlyBudget: '8,000 AED'
    },
    content: {
      videos: [
        {
          id: 1,
          title: 'Company Overview',
          type: 'brand',
          industry: 'real-estate',
          format: 'story',
          views: '3.2k',
          engagement: '75%',
          performance: 'high'
        },
        {
          id: 2,
          title: 'Property Showcase',
          type: 'product',
          industry: 'real-estate',
          format: 'feed',
          views: '2.8k',
          engagement: '68%',
          performance: 'medium'
        }
      ],
      graphics: [
        {
          id: 1,
          title: 'Property Listing',
          type: 'banner',
          industry: 'real-estate',
          format: 'horizontal',
          engagement: '70%',
          performance: 'high'
        },
        {
          id: 2,
          title: 'Open House Announcement',
          type: 'post',
          industry: 'real-estate',
          format: 'square',
          engagement: '65%',
          performance: 'medium'
        }
      ]
    }
  },
  {
    id: 2,
    name: 'Elite Education Center',
    industry: 'education',
    logo: '/api/placeholder/80/80',
    stats: {
      totalCampaigns: 8,
      activeLeads: 180,
      totalVideos: 15,
      totalGraphics: 32,
      conversionRate: '8.9%',
      monthlyBudget: '8,000 AED'
    },
    content: {
      videos: [
        {
          id: 1,
          title: 'Course Introduction',
          type: 'product',
          industry: 'education',
          format: 'story',
          views: '1.5k',
          engagement: '82%',
          performance: 'high'
        }
      ],
      graphics: [
        {
          id: 1,
          title: 'Course Schedule',
          type: 'post',
          industry: 'education',
          format: 'square',
          engagement: '58%',
          performance: 'medium'
        }
      ]
    }
  }
  // Add more clients...
]

const selectedClient = ref(null)

const showClientProfile = (client) => {
  console.log('Opening client profile:', client)
  selectedClient.value = client
}

const closeClientProfile = () => {
  console.log('Closing client profile')
  selectedClient.value = null
}

const getIndustryColor = (industry) => {
  const colors = {
    'real-estate': 'bg-blue-500/20 text-blue-500',
    'education': 'bg-green-500/20 text-green-500',
    'retail': 'bg-purple-500/20 text-purple-500',
    'default': 'bg-gray-500/20 text-gray-500'
  }
  return colors[industry] || colors.default
}
</script>

<template>
  <div class="min-h-screen text-white pt-8">
    <!-- Client Grid -->
    <div v-if="!selectedClient" class="max-w-6xl mx-auto">
      <div class="grid grid-cols-3 gap-6">
        <div v-for="client in clients" :key="client.id"
          class="bg-zinc-800/40 rounded-lg p-6 cursor-pointer hover:bg-zinc-800 transition-colors"
          @click="showClientProfile(client)">
          <div class="flex items-start justify-between mb-4">
            <img :src="client.logo" class="w-16 h-16 rounded-lg bg-zinc-700" />
            <span class="px-3 py-1 rounded-full text-sm font-medium" :class="getIndustryColor(client.industry)">
              {{ client.industry }}
            </span>
          </div>
          <h3 class="text-xl font-bold mb-2">{{ client.name }}</h3>
          <div class="flex flex-wrap gap-4 text-sm text-zinc-400">
            <div>
              <div class="i-lucide-video w-4 h-4 inline-block mr-1" />
              {{ client.stats.totalVideos }} videos
            </div>
            <div>
              <div class="i-lucide-image w-4 h-4 inline-block mr-1" />
              {{ client.stats.totalGraphics }} graphics
            </div>
            <div>
              <div class="i-lucide-users w-4 h-4 inline-block mr-1" />
              {{ client.stats.activeLeads }} leads
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Client Profile -->
    <Transition name="fade">
      <ClientProfile v-if="selectedClient" :client="selectedClient" @close="closeClientProfile" />
    </Transition>
  </div>
</template>
