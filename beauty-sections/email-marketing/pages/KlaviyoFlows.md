---
class: text-center
zoom: 0.8
---

<script setup>
const klaviyoFlows = [
  {
    id: 1,
    title: 'Welcome Series',
    icon: 'UserPlus',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-700 to-rose-800',
    features: [
      'Brand introduction',
      'Product education', 
      'First purchase incentive',
      'Social proof showcase'
    ],
    impact: {
      text: 'Revenue Impact: 15-25%',
      bgColor: 'bg-rose-100',
      textColor: 'text-rose-700'
    }
  },
  {
    id: 2,
    title: 'Abandoned Cart',
    icon: 'ShoppingCart',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-600 to-rose-700',
    features: [
      'Immediate reminder',
      'Product benefits',
      'Limited-time discount',
      'Scarcity messaging'
    ],
    impact: {
      text: 'Recovery Rate: 25-35%',
      bgColor: 'bg-rose-100',
      textColor: 'text-rose-700'
    }
  },
  {
    id: 3,
    title: 'Post-Purchase',
    icon: 'Package',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-600 to-rose-700',
    features: [
      'Order confirmation',
      'Usage instructions',
      'Review request',
      'Cross-sell products'
    ],
    impact: {
      text: 'Upsell Rate: 12-18%',
      bgColor: 'bg-rose-100',
      textColor: 'text-rose-700'
    }
  },
  {
    id: 4,
    title: 'Replenishment',
    icon: 'Repeat',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-700 to-rose-800',
    features: [
      'Usage tracking',
      'Reorder reminders',
      'Loyalty discounts',
      'Subscription offers'
    ],
    impact: {
      text: 'LTV Increase: 40-60%',
      bgColor: 'bg-rose-100',
      textColor: 'text-rose-700'
    }
  },
  {
    id: 5,
    title: 'Win-Back',
    icon: 'Heart',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-600 to-rose-700',
    features: [
      '"We miss you" message',
      'Exclusive comeback offer',
      'New product highlights',
      'Final sunset email'
    ],
    impact: {
      text: 'Reactivation: 8-15%',
      bgColor: 'bg-rose-100',
      textColor: 'text-rose-700'
    }
  },
  {
    id: 6,
    title: 'Browse Abandonment',
    icon: 'Search',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-600 to-rose-700',
    features: [
      'Product viewed reminder',
      'Similar recommendations',
      'Customer reviews',
      'Limited stock alert'
    ],
    impact: {
      text: 'Conversion: 5-12%',
      bgColor: 'bg-rose-100',
      textColor: 'text-rose-700'
    }
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
          Klaviyo Automation Flows
        </span>
      </h1>
      <p class="!text-xl text-rose-900 max-w-3xl mx-auto !leading-relaxed">
        Set-and-forget email sequences that work 24/7 for your beauty brand
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
      <div
        v-for="flow in klaviyoFlows"
        :key="flow.id"
        v-motion
        v-click
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        :class="`bg-gradient-to-br ${flow.bgGradient} rounded-3xl p-5 shadow-lg flex gap-4 border ${flow.borderColor} hover:shadow-2xl transition-all duration-300`"
      >
        <div :class="`w-10 h-10 bg-gradient-to-br ${flow.iconGradient} rounded-2xl flex items-center justify-center mb-4 shadow-md text-left`">
          <lucide-user-plus v-if="flow.icon === 'UserPlus'" class="w-6 h-6 text-white" />
          <lucide-shopping-cart v-else-if="flow.icon === 'ShoppingCart'" class="w-6 h-6 text-white" />
          <lucide-package v-else-if="flow.icon === 'Package'" class="w-6 h-6 text-white" />
          <lucide-repeat v-else-if="flow.icon === 'Repeat'" class="w-6 h-6 text-white" />
          <lucide-heart v-else-if="flow.icon === 'Heart'" class="w-6 h-6 text-white" />
          <lucide-search v-else-if="flow.icon === 'Search'" class="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 class="!text-xl !font-semibold text-gray-800 mb-3 text-left">{{ flow.title }}</h3>
          <div class="space-y-2 text-left">
            <div
              v-for="feature in flow.features"
              :key="feature"
              class="!text-sm text-rose-900 text-left"
            >
              • {{ feature }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
