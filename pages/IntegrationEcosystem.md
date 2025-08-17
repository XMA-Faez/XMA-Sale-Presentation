---
class: text-center
---

<script setup>
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
  },
  {
    id: 5,
    name: 'Gorgias',
    description: 'Customer support',
    icon: 'Headphones',
    iconGradient: 'from-purple-300 to-indigo-300'
  },
  {
    id: 6,
    name: 'Recharge',
    description: 'Subscription management',
    icon: 'Repeat',
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
          Integration Ecosystem
        </span>
      </h1>
      <p class="!text-xl text-gray-600 max-w-3xl mx-auto !leading-relaxed">
        Seamless connections with your favorite beauty ecommerce tools
      </p>
    </div>
    <div class="bg-gradient-to-br from-white to-stone-50 rounded-3xl p-8 shadow-lg border border-stone-100">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div
          v-for="integration in integrations"
          :key="integration.id"
          v-click
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
          class="flex gap-4 items-center"
        >
          <div :class="`w-10 h-10 bg-gradient-to-br ${integration.iconGradient} rounded-xl flex items-center justify-center shadow-md`">
            <lucide-mail v-if="integration.icon === 'Mail'" class="w-6 h-6 text-white" />
            <lucide-shopping-bag v-else-if="integration.icon === 'ShoppingBag'" class="w-6 h-6 text-white" />
            <lucide-bar-chart v-else-if="integration.icon === 'BarChart'" class="w-6 h-6 text-white" />
            <lucide-star v-else-if="integration.icon === 'Star'" class="w-6 h-6 text-white" />
            <lucide-headphones v-else-if="integration.icon === 'Headphones'" class="w-6 h-6 text-white" />
            <lucide-repeat v-else-if="integration.icon === 'Repeat'" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 class="!text-lg !font-medium text-gray-800 mb-1 text-left">{{ integration.name }}</h4>
            <p class="text-gray-600 !text-sm text-left !m-0">{{ integration.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
