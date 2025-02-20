<template>
  <div class="grid grid-cols-4 gap-4 text-center mb-8">
    <button v-for="process in processes" :key="process.id" @click="$slidev.nav.go(process.page)" :class="[
      'scale-step transform transition-all duration-300 p-4 rounded-lg',
      'flex flex-col items-center justify-center gap-2',
      activeProcess === process.id ? process.bgColor : ''
    ]">
      <div :class="[process.color]">
        <div :class="[process.icon, 'w-8 h-8']" />
      </div>
      <p style="margin: 0" :class="['text-sm font-bold', process.color]">
        {{ process.title }}
      </p>
    </button>
  </div>
</template>

<script setup>
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()

const props = defineProps({
  activeProcess: {
    type: String,
    default: 'content'
  }
})

defineEmits(['update:activeProcess'])

const processes = [
  {
    id: 'content',
    icon: 'i-lucide-video',
    title: 'Content Creation',
    color: 'text-blue-500',
    bgColor: 'bg-blue-950/40',
    page: 6
  },
  {
    id: 'crm',
    icon: 'i-lucide-layout-dashboard',
    title: 'CRM Setup',
    color: 'text-green-500',
    bgColor: 'bg-green-950/40',
    page: 7
  },
  {
    id: 'advertising',
    icon: 'i-mdi-bullhorn',
    title: 'Advertising',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-950/40',
    page: 8
  },
  {
    id: 'leads',
    icon: 'i-mdi-account-convert',
    title: 'Lead Management',
    color: 'text-red-500',
    bgColor: 'bg-red-950/40',
    page: 9
  }
]
</script>

<style scoped>
.scale-step {
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}
</style>
