<!-- Global state setup -->
<script setup>
import { ref, onMounted, provide } from 'vue'
const clientName = ref("")
const companyName = ref("")

const services = [
  {
    id: 1,
    title: 'Email Marketing',
    icon: 'Mail',
    gradient: 'from-rose-300 to-pink-300'
  },
  {
    id: 2,
    title: 'Paid Advertising',
    icon: 'Megaphone',
    gradient: 'from-purple-300 to-indigo-300'
  },
  {
    id: 3,
    title: 'CRM Automation',
    icon: 'LayoutDashboard',
    gradient: 'from-indigo-300 to-purple-300'
  },
  {
    id: 4,
    title: 'Analytics',
    icon: 'BarChart',
    gradient: 'from-pink-300 to-rose-300'
  }
]

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  clientName.value = urlParams.get('name') || ''
  companyName.value = urlParams.get('company') || ''
  // Make these values available to other slides
  provide('clientName', clientName)
  provide('companyName', companyName)
})
</script>

<div class="flex flex-col items-center justify-center h-full">
    <!-- Logo -->
    <div
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }"
        class="mb-12"
    >
        <img src="/XMA-01.svg" alt="XMA Agency Logo" class="h-12 w-auto" />
    </div>
    <!-- Personalized Welcome -->
    <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }"
        class="!text-5xl !font-bold mb-6 text-center"
    >
        <template v-if="clientName">
            <div class="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                Welcome, {{ clientName }}
            </div>
        </template>
        <template v-else>
            <div class="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                Welcome to XMA Agency
            </div>
        </template>
    </div>
    <!-- Company specific message -->
    <div
        v-if="companyName"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        class="!text-xl mb-12 text-gray-600 text-center max-w-3xl !leading-relaxed"
    >
        Scale {{ companyName }}'s beauty brand with sophisticated email marketing & paid advertising
    </div>
    <div
        v-else
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        class="!text-xl mb-12 text-gray-600 text-center max-w-3xl !leading-relaxed"
    >
        Scale your beauty brand with sophisticated email marketing & paid advertising
    </div>
    <!-- Service icons with elegant styling -->
    <div class="flex gap-16 mt-8">
        <div
            v-for="service in services"
            :key="service.id"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
            class="text-center flex flex-col items-center"
        >
            <div :class="`mb-4 flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg`">
                <lucide-mail v-if="service.icon === 'Mail'" class="w-10 h-10 text-white" />
                <lucide-megaphone v-else-if="service.icon === 'Megaphone'" class="w-10 h-10 text-white" />
                <lucide-layout-dashboard v-else-if="service.icon === 'LayoutDashboard'" class="w-10 h-10 text-white" />
                <lucide-bar-chart v-else-if="service.icon === 'BarChart'" class="w-10 h-10 text-white" />
            </div>
            <div class="text-center !text-lg !font-medium text-gray-700">{{ service.title }}</div>
        </div>
    </div>
</div>
