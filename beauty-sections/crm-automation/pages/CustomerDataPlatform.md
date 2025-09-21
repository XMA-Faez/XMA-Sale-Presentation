---
class: text-center
---

<script setup>
const platforms = [
  {
    id: 1,
    title: 'Customer Data Platform',
    icon: 'Users',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-700 to-rose-800',
    features: [
      { title: '360° Customer Profiles', description: 'Purchase history, preferences, lifecycle stage', color: 'bg-rose-400' },
      { title: 'Beauty-Specific Tracking', description: 'Skin type, product usage patterns, seasonal trends', color: 'bg-rose-400' },
      { title: 'Multi-Channel Integration', description: 'Website, email, SMS, social media, in-store', color: 'bg-rose-400' }
    ]
  },
  {
    id: 2,
    title: 'Intelligent Automation',
    icon: 'Zap',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-600 to-rose-700',
    features: [
      { title: 'Behavioral Triggers', description: 'Actions based on customer behavior patterns', color: 'bg-rose-600' },
      { title: 'Predictive Analytics', description: 'Churn risk, next purchase timing, CLV forecasting', color: 'bg-rose-600' },
      { title: 'Dynamic Personalization', description: 'Product recommendations, pricing, messaging', color: 'bg-rose-600' }
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
          Customer Data & Intelligence
        </span>
      </h1>
      <p class="!text-xl text-rose-900 max-w-3xl mx-auto !leading-relaxed">
        Unified customer data platform with AI-powered insights
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div
        v-for="platform in platforms"
        :key="platform.id"
        v-click
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        :class="`bg-gradient-to-br ${platform.bgGradient} rounded-3xl p-5 shadow-lg border ${platform.borderColor} hover:shadow-2xl transition-all duration-300`"
      >
        <div class="flex gap-4 mb-4">
          <div :class="`w-10 h-10 bg-gradient-to-br ${platform.iconGradient} rounded-2xl flex items-center justify-center shadow-md`">
            <lucide-users v-if="platform.icon === 'Users'" class="w-6 h-6 text-white" />
            <lucide-zap v-else-if="platform.icon === 'Zap'" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="!text-xl !font-semibold text-gray-800 text-left">{{ platform.title }}</h3>
          </div>
        </div>
        <div class="space-y-3 ml-14">
          <div
            v-for="feature in platform.features"
            :key="feature.title"
            class="flex items-start gap-3"
          >
            <div :class="`w-2 h-2 ${feature.color} rounded-full mt-2 flex-shrink-0`"></div>
            <div>
              <div class="!font-medium text-left text-gray-800 mb-1">{{ feature.title }}</div>
              <div class="!text-sm text-left text-rose-900">{{ feature.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
