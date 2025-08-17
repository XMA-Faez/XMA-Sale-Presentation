---
class: text-center
zoom: 0.6
---

<script setup>
const services = [
  {
    id: 1,
    title: 'Klaviyo Email Marketing',
    description: 'Advanced segmentation, flows, and campaigns that drive 35%+ revenue',
    icon: 'Mail',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-300 to-pink-300'
  },
  {
    id: 2,
    title: 'Beauty-Focused Advertising',
    description: 'Meta, Google & TikTok campaigns optimized for beauty audiences',
    icon: 'Megaphone',
    bgGradient: 'from-white to-purple-50',
    borderColor: 'border-purple-100',
    iconGradient: 'from-purple-300 to-indigo-300'
  },
  {
    id: 3,
    title: 'CRM & Automation',
    description: 'Customer journey automation that maximizes lifetime value',
    icon: 'LayoutDashboard',
    bgGradient: 'from-white to-indigo-50',
    borderColor: 'border-indigo-100',
    iconGradient: 'from-indigo-300 to-purple-300'
  },
  {
    id: 4,
    title: 'Creative Production',
    description: 'Beauty-specific ad creatives and visual content that converts',
    icon: 'Palette',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-300 to-pink-300'
  },
  {
    id: 5,
    title: 'Beauty Analytics',
    description: 'Performance tracking with beauty-specific KPIs and insights',
    icon: 'BarChart',
    bgGradient: 'from-white to-purple-50',
    borderColor: 'border-purple-100',
    iconGradient: 'from-purple-300 to-indigo-300'
  },
  {
    id: 6,
    title: 'Retention Systems',
    description: 'Loyalty programs and retention strategies for beauty customers',
    icon: 'Heart',
    bgGradient: 'from-white to-indigo-50',
    borderColor: 'border-indigo-100',
    iconGradient: 'from-indigo-300 to-purple-300'
  }
]
</script>

<div class="">
  <div class="max-w-6xl mx-auto">
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }"
      class="text-center mb-16"
    >
      <h1 class="!text-5xl !font-bold mb-6">
        <span class="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
          Complete Beauty Ecommerce Ecosystem
        </span>
      </h1>
      <p class="!text-xl text-gray-600 max-w-3xl mx-auto !leading-relaxed">
        Everything your beauty brand needs to scale from 6-figures to 8-figures
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="service in services"
        :key="service.id"
        :v-click="service.id"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        :class="`bg-gradient-to-br ${service.bgGradient} rounded-3xl p-5 shadow-lg flex gap-4 border ${service.borderColor} hover:shadow-2xl transition-all duration-300`"
      >
        <div :class="`w-10 h-10 bg-gradient-to-br ${service.iconGradient} rounded-2xl flex items-center justify-center shadow-md`">
          <lucide-mail v-if="service.icon === 'Mail'" class="w-6 h-6 text-white" />
          <lucide-megaphone v-else-if="service.icon === 'Megaphone'" class="w-6 h-6 text-white" />
          <lucide-layout-dashboard v-else-if="service.icon === 'LayoutDashboard'" class="w-6 h-6 text-white" />
          <lucide-palette v-else-if="service.icon === 'Palette'" class="w-6 h-6 text-white" />
          <lucide-bar-chart v-else-if="service.icon === 'BarChart'" class="w-6 h-6 text-white" />
          <lucide-heart v-else-if="service.icon === 'Heart'" class="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 class="!text-xl !font-semibold text-gray-800 mb-3 text-left">{{ service.title }}</h3>
          <p class="text-gray-600 !text-sm !leading-relaxed text-left">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
