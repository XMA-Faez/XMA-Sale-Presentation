---
class: text-center
---

<script setup>
const roiMetrics = [
  {
    id: 1,
    title: 'Email Marketing ROI',
    metric: '4,200%',
    description: 'Average return on email investment',
    icon: 'Mail',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  },
  {
    id: 2,
    title: 'Paid Advertising ROAS',
    metric: '4.8x',
    description: 'Return on ad spend for beauty brands',
    icon: 'TrendingUp',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 3,
    title: 'Customer Lifetime Value',
    metric: '$485',
    description: 'Average LTV for beauty customers',
    icon: 'Users',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 4,
    title: 'CRM Automation Savings',
    metric: '65%',
    description: 'Reduction in manual marketing tasks',
    icon: 'Zap',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
  }
]

const projections = [
  { period: 'Month 1-3', revenue: '$25K', growth: 'Foundation Building' },
  { period: 'Month 4-6', revenue: '$45K', growth: '80% Growth' },
  { period: 'Month 7-12', revenue: '$75K', growth: '200% Total Growth' }
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
          Beauty Marketing ROI
        </span>
      </h1>
      <p class="!text-xl text-gray-600 max-w-3xl mx-auto !leading-relaxed">
        Proven returns from comprehensive beauty marketing strategies
      </p>
    </div>
    
    <!-- ROI Metrics Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <div
        v-for="metric in roiMetrics"
        :key="metric.id"
        v-click
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        :class="`${metric.bgColor} rounded-3xl p-6 shadow-lg border ${metric.borderColor} hover:shadow-xl transition-all duration-300`"
      >
        <div class="flex justify-center mb-4">
          <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md">
            <lucide-mail v-if="metric.icon === 'Mail'" :class="`w-6 h-6 ${metric.color}`" />
            <lucide-trending-up v-else-if="metric.icon === 'TrendingUp'" :class="`w-6 h-6 ${metric.color}`" />
            <lucide-users v-else-if="metric.icon === 'Users'" :class="`w-6 h-6 ${metric.color}`" />
            <lucide-zap v-else-if="metric.icon === 'Zap'" :class="`w-6 h-6 ${metric.color}`" />
          </div>
        </div>
        <div :class="`!text-3xl !font-bold ${metric.color} mb-2`">{{ metric.metric }}</div>
        <h4 class="!text-lg !font-semibold text-gray-800 mb-2">{{ metric.title }}</h4>
        <p class="!text-sm text-gray-600">{{ metric.description }}</p>
      </div>
    </div>
    <!-- Revenue Projections -->
    <div
      v-click
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
      class="bg-gradient-to-br from-white to-stone-50 rounded-3xl p-8 shadow-lg border border-stone-100"
    >
      <h3 class="!text-3xl !font-semibold text-gray-800 mb-8 text-center">12-Month Revenue Projection</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(projection, index) in projections"
          :key="projection.period"
          class="text-center"
        >
          <div class="w-16 h-16 bg-gradient-to-br from-rose-300 to-pink-300 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-md">
            <span class="!text-xl !font-bold text-white">{{ index + 1 }}</span>
          </div>
          <div class="!text-2xl !font-bold text-gray-800 mb-2">{{ projection.revenue }}</div>
          <div class="!text-lg !font-medium text-gray-700 mb-1">{{ projection.period }}</div>
          <div class="!text-sm text-gray-600">{{ projection.growth }}</div>
        </div>
      </div>
      <div class="mt-8 text-center">
        <p class="!text-lg text-gray-700">
          <span class="!font-semibold">Total Investment:</span> $15K setup + $5K/month management
        </p>
        <p class="!text-lg text-gray-700 mt-2">
          <span class="!font-semibold">12-Month ROI:</span> <span class="text-emerald-600 !font-bold">400%+</span>
        </p>
      </div>
    </div>
  </div>
</div>
