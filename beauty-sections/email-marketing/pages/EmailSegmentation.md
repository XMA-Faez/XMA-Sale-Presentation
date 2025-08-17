---
class: text-center
---

<script setup>
const segments = [
  {
    id: 1,
    title: 'Demographics',
    description: 'Age, location, skin type',
    icon: 'User',
    iconGradient: 'from-rose-300 to-pink-300'
  },
  {
    id: 2,
    title: 'Purchase Behavior',
    description: 'Frequency, AOV, category',
    icon: 'ShoppingCart',
    iconGradient: 'from-purple-300 to-indigo-300'
  },
  {
    id: 3,
    title: 'Engagement',
    description: 'Open rates, click behavior',
    icon: 'MousePointer',
    iconGradient: 'from-indigo-300 to-purple-300'
  },
  {
    id: 4,
    title: 'Lifecycle Stage',
    description: 'New, active, at-risk, loyal',
    icon: 'Calendar',
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
      <h1 class="!text-4xl !font-bold mb-6">
        <span class="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
          Advanced Email Segmentation
        </span>
      </h1>
      <p class="!text-lg text-gray-600 max-w-3xl mx-auto !leading-relaxed">
        Personalized messaging for beauty customer segments
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div
        v-for="segment in segments"
        :key="segment.id"
        :v-click="segment.id"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        class="bg-white rounded-3xl p-5 shadow-lg border border-stone-100 flex gap-4 hover:shadow-xl transition-all duration-300"
      >
        <div :class="`w-10 h-10 bg-gradient-to-br ${segment.iconGradient} rounded-2xl flex items-center justify-center shadow-md`">
          <lucide-user v-if="segment.icon === 'User'" class="w-6 h-6 text-white" />
          <lucide-shopping-cart v-else-if="segment.icon === 'ShoppingCart'" class="w-6 h-6 text-white" />
          <lucide-mouse-pointer v-else-if="segment.icon === 'MousePointer'" class="w-6 h-6 text-white" />
          <lucide-calendar v-else-if="segment.icon === 'Calendar'" class="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 class="!text-xl !font-medium text-gray-800 mb-2 text-left">{{ segment.title }}</h4>
          <p class="text-gray-600 !text-sm text-left">{{ segment.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
