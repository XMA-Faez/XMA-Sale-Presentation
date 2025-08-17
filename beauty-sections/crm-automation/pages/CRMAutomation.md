---
class: text-center
zoom: 0.6
---

<script setup>
const platforms = [
  {
    id: 1,
    title: 'Customer Data Platform',
    icon: 'Users',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-300 to-pink-300',
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
    bgGradient: 'from-white to-purple-50',
    borderColor: 'border-purple-100',
    iconGradient: 'from-purple-300 to-indigo-300',
    features: [
      { title: 'Behavioral Triggers', description: 'Actions based on customer behavior patterns', color: 'bg-purple-400' },
      { title: 'Predictive Analytics', description: 'Churn risk, next purchase timing, CLV forecasting', color: 'bg-purple-400' },
      { title: 'Dynamic Personalization', description: 'Product recommendations, pricing, messaging', color: 'bg-purple-400' }
    ]
  }
]

const workflows = [
  {
    id: 1,
    title: 'Lifecycle Campaigns',
    icon: 'Bell',
    iconGradient: 'from-rose-300 to-pink-300',
    features: [
      { icon: 'UserPlus', title: 'New customer onboarding', bgColor: 'bg-rose-100', iconColor: 'text-rose-500' },
      { icon: 'Crown', title: 'VIP tier progression', bgColor: 'bg-rose-100', iconColor: 'text-rose-500' },
      { icon: 'Gift', title: 'Birthday & anniversary', bgColor: 'bg-rose-100', iconColor: 'text-rose-500' }
    ]
  },
  {
    id: 2,
    title: 'Revenue Optimization',
    icon: 'TrendingUp',
    iconGradient: 'from-purple-300 to-indigo-300',
    features: [
      { icon: 'ArrowUp', title: 'Upsell & cross-sell triggers', bgColor: 'bg-purple-100', iconColor: 'text-purple-500' },
      { icon: 'Percent', title: 'Dynamic pricing alerts', bgColor: 'bg-purple-100', iconColor: 'text-purple-500' },
      { icon: 'Package', title: 'Bundle recommendations', bgColor: 'bg-purple-100', iconColor: 'text-purple-500' }
    ]
  },
  {
    id: 3,
    title: 'Retention Automation',
    icon: 'Shield',
    iconGradient: 'from-indigo-300 to-purple-300',
    features: [
      { icon: 'AlertTriangle', title: 'Churn risk intervention', bgColor: 'bg-indigo-100', iconColor: 'text-indigo-500' },
      { icon: 'RefreshCw', title: 'Subscription management', bgColor: 'bg-indigo-100', iconColor: 'text-indigo-500' },
      { icon: 'Heart', title: 'Loyalty program automation', bgColor: 'bg-indigo-100', iconColor: 'text-indigo-500' }
    ]
  }
]

const integrations = [
  {
    id: 1,
    name: 'Klaviyo',
    description: 'Email & SMS automation',
    icon: 'Mail',
    iconGradient: 'from-rose-300 to-pink-300'
  },
  {
    id: 2,
    name: 'Shopify Plus',
    description: 'Ecommerce platform',
    icon: 'ShoppingBag',
    iconGradient: 'from-purple-300 to-indigo-300'
  },
  {
    id: 3,
    name: 'Google Analytics',
    description: 'Customer analytics',
    icon: 'BarChart',
    iconGradient: 'from-indigo-300 to-purple-300'
  },
  {
    id: 4,
    name: 'Reviews.io',
    description: 'Social proof automation',
    icon: 'Star',
    iconGradient: 'from-rose-300 to-pink-300'
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
          CRM & Marketing Automation
        </span>
      </h1>
      <p class="!text-xl text-gray-600 max-w-3xl mx-auto !leading-relaxed">
        Intelligent customer relationship management that scales with your beauty brand
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
      <div
        v-for="platform in platforms"
        :key="platform.id"
        v-click
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        :class="`bg-gradient-to-br ${platform.bgGradient} rounded-3xl p-5 shadow-lg border ${platform.borderColor} transition-all duration-300`"
      >
        <div class="flex gap-4">
          <div :class="`w-10 h-10 bg-gradient-to-br ${platform.iconGradient} rounded-2xl flex items-center justify-center shadow-md`">
            <lucide-users v-if="platform.icon === 'Users'" class="w-6 h-6 text-white" />
            <lucide-zap v-else-if="platform.icon === 'Zap'" class="w-6 h-6 text-white" />
          </div>
          <h3 class="!text-xl !font-semibold text-gray-800 text-left">{{ platform.title }}</h3>
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
              <div class="!text-sm text-gray-600">{{ feature.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-click="3"
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
      class="mb-16"
    >
      <h3 class="!text-3xl !font-semibold text-gray-800 mb-8 text-center">Automation Workflows</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          v-for="workflow in workflows"
          :key="workflow.id"
          class="bg-white rounded-3xl p-5 shadow-lg border border-stone-100 transition-all duration-300"
        >
          <div class="flex gap-4 mb-4">
            <div :class="`w-10 h-10 bg-gradient-to-br ${workflow.iconGradient} rounded-2xl flex items-center justify-center shadow-md`">
              <lucide-bell v-if="workflow.icon === 'Bell'" class="w-6 h-6 text-white" />
              <lucide-trending-up v-else-if="workflow.icon === 'TrendingUp'" class="w-6 h-6 text-white" />
              <lucide-shield v-else-if="workflow.icon === 'Shield'" class="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 class="!text-xl !font-semibold text-gray-800 text-left">{{ workflow.title }}</h4>
            </div>
          </div>
          <div class="space-y-3 ml-14">
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
              <span class="!text-sm text-gray-600">{{ feature.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-click="4"
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
      class="bg-gradient-to-br from-white to-stone-50 rounded-3xl p-8 shadow-lg border border-stone-100"
    >
      <h3 class="!text-2xl !font-semibold text-gray-800 mb-8 text-center">Integration Ecosystem</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div
          v-for="integration in integrations"
          :key="integration.id"
          class=""
        >
          <div :class="`w-10 h-10 mb-4 bg-gradient-to-br mx-auto ${integration.iconGradient} rounded-xl flex items-center justify-center shadow-md`">
            <lucide-mail v-if="integration.icon === 'Mail'" class="w-6 h-6 text-white" />
            <lucide-shopping-bag v-else-if="integration.icon === 'ShoppingBag'" class="w-6 h-6 text-white" />
            <lucide-bar-chart v-else-if="integration.icon === 'BarChart'" class="w-6 h-6 text-white" />
            <lucide-star v-else-if="integration.icon === 'Star'" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 class="!text-lg !font-medium text-gray-800 !mb-1">{{ integration.name }}</h4>
            <p class="text-gray-600 !text-sm !m-0">{{ integration.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
