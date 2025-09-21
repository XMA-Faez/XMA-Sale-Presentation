---
class: text-center
---

<script setup>
const workflows = [
  {
    id: 1,
    title: 'Lifecycle Campaigns',
    icon: 'Bell',
    iconGradient: 'from-rose-700 to-rose-800',
    features: [
      { icon: 'UserPlus', title: 'New customer onboarding', bgColor: 'bg-rose-100', iconColor: 'text-rose-500' }, { icon: 'Crown', title: 'VIP tier progression', bgColor: 'bg-rose-100', iconColor: 'text-rose-500' }, { icon: 'Gift', title: 'Birthday & anniversary', bgColor: 'bg-rose-100', iconColor: 'text-rose-500' }
    ]
  },
  {
    id: 2,
    title: 'Revenue Optimization',
    icon: 'TrendingUp',
    iconGradient: 'from-rose-600 to-rose-700',
    features: [
      { icon: 'ArrowUp', title: 'Upsell & cross-sell triggers', bgColor: 'bg-rose-100', iconColor: 'text-rose-500' },
      { icon: 'Percent', title: 'Dynamic pricing alerts', bgColor: 'bg-rose-100', iconColor: 'text-rose-500' },
      { icon: 'Package', title: 'Bundle recommendations', bgColor: 'bg-rose-100', iconColor: 'text-rose-500' }
    ]
  },
  {
    id: 3,
    title: 'Retention Automation',
    icon: 'Shield',
    iconGradient: 'from-rose-600 to-rose-700',
    features: [
      { icon: 'AlertTriangle', title: 'Churn risk intervention', bgColor: 'bg-rose-100', iconColor: 'text-rose-500' },
      { icon: 'RefreshCw', title: 'Subscription management', bgColor: 'bg-rose-100', iconColor: 'text-rose-500' },
      { icon: 'Heart', title: 'Loyalty program automation', bgColor: 'bg-rose-100', iconColor: 'text-rose-500' }
    ]
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
        <span class="bg-gradient-to-r from-rose-700 to-rose-800 bg-clip-text text-transparent">
          Automation Workflows
        </span>
      </h1>
      <p class="!text-xl text-rose-900 max-w-3xl mx-auto !leading-relaxed">
        Smart automation that engages customers at every touchpoint
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div
        v-for="workflow in workflows"
        :key="workflow.id"
        v-click
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        class="bg-white rounded-3xl p-5 shadow-lg border border-stone-100 hover:shadow-2xl transition-all duration-300"
      >
        <div :class="`w-10 h-10 mb-2 bg-gradient-to-br ${workflow.iconGradient} rounded-2xl flex items-center justify-center shadow-md`">
          <lucide-bell v-if="workflow.icon === 'Bell'" class="w-6 h-6 text-white" />
          <lucide-trending-up v-else-if="workflow.icon === 'TrendingUp'" class="w-6 h-6 text-white" />
          <lucide-shield v-else-if="workflow.icon === 'Shield'" class="w-6 h-6 text-white" />
        </div>
        <h4 class="!text-xl mb-4 !font-semibold text-gray-800 text-left">{{ workflow.title }}</h4>
        <div class="space-y-3">
          <div
            v-for="feature in workflow.features"
            :key="feature.title"
            class="flex items-center gap-3"
          >
            <div :class="`w-6 h-6 ${feature.bgColor} rounded-full flex items-center justify-center`">
              <lucide-user-plus v-if="feature.icon === 'UserPlus'" :class="`w-3 h-3 ${feature.iconColor}`" />
              <lucide-crown v-else-if="feature.icon === 'Crown'" :class="`w-3 h-3 ${feature.iconColor}`" />
              <lucide-gift v-else-if="feature.icon === 'Gift'" :class="`w-3 h-3 ${feature.iconColor}`" />
              <lucide-arrow-up v-else-if="feature.icon === 'ArrowUp'" :class="`w-3 h-3 ${feature.iconColor}`" />
              <lucide-percent v-else-if="feature.icon === 'Percent'" :class="`w-3 h-3 ${feature.iconColor}`" />
              <lucide-package v-else-if="feature.icon === 'Package'" :class="`w-3 h-3 ${feature.iconColor}`" />
              <lucide-alert-triangle v-else-if="feature.icon === 'AlertTriangle'" :class="`w-3 h-3 ${feature.iconColor}`" />
              <lucide-refresh-cw v-else-if="feature.icon === 'RefreshCw'" :class="`w-3 h-3 ${feature.iconColor}`" />
              <lucide-heart v-else-if="feature.icon === 'Heart'" :class="`w-3 h-3 ${feature.iconColor}`" />
            </div>
            <span class="!text-sm text-rose-900">{{ feature.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
