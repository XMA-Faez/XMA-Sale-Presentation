---
class: text-center
---

<script setup>
const analyticsModules = [
  {
    id: 1,
    title: 'Customer Lifetime Value',
    icon: 'TrendingUp',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-300 to-pink-300',
    metrics: [
      { label: 'Average CLV', value: '$485', color: 'text-rose-600' },
      { label: 'Top 20% CLV', value: '$1,250', color: 'text-rose-600' },
      { label: 'Retention Rate', value: '68%', color: 'text-rose-600' }
    ]
  },
  {
    id: 2,
    title: 'Campaign Performance',
    icon: 'BarChart',
    bgGradient: 'from-white to-purple-50',
    borderColor: 'border-purple-100',
    iconGradient: 'from-purple-300 to-indigo-300',
    metrics: [
      { label: 'Email Revenue', value: '35%', color: 'text-purple-600' },
      { label: 'Paid Ads ROAS', value: '4.2x', color: 'text-purple-600' },
      { label: 'Conversion Rate', value: '3.8%', color: 'text-purple-600' }
    ]
  },
  {
    id: 3,
    title: 'Product Analytics',
    icon: 'Package',
    bgGradient: 'from-white to-indigo-50',
    borderColor: 'border-indigo-100',
    iconGradient: 'from-indigo-300 to-purple-300',
    metrics: [
      { label: 'Top Category', value: 'Skincare', color: 'text-indigo-600' },
      { label: 'Repeat Purchase', value: '42%', color: 'text-indigo-600' },
      { label: 'Cross-sell Rate', value: '28%', color: 'text-indigo-600' }
    ]
  },
  {
    id: 4,
    title: 'Customer Journey',
    icon: 'MapPin',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-300 to-pink-300',
    metrics: [
      { label: 'Time to Purchase', value: '12 days', color: 'text-rose-600' },
      { label: 'Touchpoints', value: '7.3 avg', color: 'text-rose-600' },
      { label: 'Channel Attribution', value: 'Multi-touch', color: 'text-rose-600' }
    ]
  }
]

const kpis = [
  { label: 'Monthly Revenue Growth', value: '+24%', icon: 'ArrowUp', color: 'text-emerald-600' },
  { label: 'Customer Acquisition Cost', value: '$28', icon: 'Users', color: 'text-blue-600' },
  { label: 'Average Order Value', value: '$89', icon: 'ShoppingCart', color: 'text-purple-600' },
  { label: 'Customer Satisfaction', value: '4.7/5', icon: 'Star', color: 'text-amber-600' }
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
          Beauty Analytics Dashboard
        </span>
      </h1>
      <p class="!text-xl text-gray-600 max-w-3xl mx-auto !leading-relaxed">
        Data-driven insights that power beauty brand growth strategies
      </p>
    </div>
    <!-- Key KPIs Row -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      <div
        v-for="kpi in kpis"
        :key="kpi.label"
        v-click
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
        class="bg-white rounded-2xl p-4 shadow-lg border border-stone-100 text-center hover:shadow-xl transition-all duration-300"
      >
        <div class="flex justify-center mb-2">
          <lucide-arrow-up v-if="kpi.icon === 'ArrowUp'" :class="`w-6 h-6 ${kpi.color}`" />
          <lucide-users v-else-if="kpi.icon === 'Users'" :class="`w-6 h-6 ${kpi.color}`" />
          <lucide-shopping-cart v-else-if="kpi.icon === 'ShoppingCart'" :class="`w-6 h-6 ${kpi.color}`" />
          <lucide-star v-else-if="kpi.icon === 'Star'" :class="`w-6 h-6 ${kpi.color}`" />
        </div>
        <div :class="`!text-2xl !font-bold ${kpi.color} mb-1`">{{ kpi.value }}</div>
        <div class="!text-xs text-gray-600">{{ kpi.label }}</div>
      </div>
    </div>
    <!-- Detailed Analytics Modules -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div
        v-for="module in analyticsModules"
        :key="module.id"
        v-click
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        :class="`bg-gradient-to-br ${module.bgGradient} rounded-3xl p-5 shadow-lg border ${module.borderColor} hover:shadow-2xl transition-all duration-300`"
      >
        <div class="flex gap-4 mb-4">
          <div :class="`w-10 h-10 bg-gradient-to-br ${module.iconGradient} rounded-2xl flex items-center justify-center shadow-md`">
            <lucide-trending-up v-if="module.icon === 'TrendingUp'" class="w-6 h-6 text-white" />
            <lucide-bar-chart v-else-if="module.icon === 'BarChart'" class="w-6 h-6 text-white" />
            <lucide-package v-else-if="module.icon === 'Package'" class="w-6 h-6 text-white" />
            <lucide-map-pin v-else-if="module.icon === 'MapPin'" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="!text-xl !font-semibold text-gray-800 text-left">{{ module.title }}</h3>
          </div>
        </div>
        <div class="space-y-3 ml-14">
          <div
            v-for="metric in module.metrics"
            :key="metric.label"
            class="flex justify-between items-center"
          >
            <span class="!text-sm text-gray-600">{{ metric.label }}</span>
            <span :class="`!text-sm !font-semibold ${metric.color}`">{{ metric.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
