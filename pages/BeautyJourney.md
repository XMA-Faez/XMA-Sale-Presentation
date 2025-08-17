---
class: text-center
zoom: 0.9
---

<script setup>
const journeyStages = [
  {
    id: 1,
    title: 'Discovery',
    description: 'Social media ads, influencer content, beauty tutorials',
    icon: 'Search',
    bgGradient: 'from-rose-300 to-pink-300',
    borderColor: 'border-rose-100',
    textColor: 'text-rose-500'
  },
  {
    id: 2,
    title: 'Interest', 
    description: 'Product research, reviews, ingredient analysis',
    icon: 'Heart',
    bgGradient: 'from-purple-300 to-indigo-300',
    borderColor: 'border-purple-100',
    textColor: 'text-purple-500'
  },
  {
    id: 3,
    title: 'Purchase',
    description: 'First order, welcome series, unboxing experience', 
    icon: 'ShoppingCart',
    bgGradient: 'from-indigo-300 to-purple-300',
    borderColor: 'border-indigo-100',
    textColor: 'text-indigo-500'
  },
  {
    id: 4,
    title: 'Retention',
    description: 'Usage tips, replenishment reminders, loyalty rewards',
    icon: 'Repeat',
    bgGradient: 'from-rose-300 to-pink-300',
    borderColor: 'border-rose-100',
    textColor: 'text-rose-500'
  },
  {
    id: 5,
    title: 'Advocacy',
    description: 'Reviews, referrals, user-generated content',
    icon: 'Users',
    bgGradient: 'from-purple-300 to-indigo-300', 
    borderColor: 'border-purple-100',
    textColor: 'text-purple-500'
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
          Beauty Customer Journey
        </span>
      </h1>
      <p class="!text-xl text-gray-600 max-w-3xl mx-auto !leading-relaxed">
        From discovery to loyalty - every touchpoint optimized for beauty brands
      </p>
    </div>
    <div class="relative">
      <div class="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-rose-200 via-purple-200 to-indigo-200 transform -translate-y-1/2 z-0"></div>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
        <div
          v-for="(stage, index) in journeyStages"
          :key="stage.id"
          :v-click="stage.id"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
          :class="`bg-white rounded-3xl p-4 shadow-lg ${stage.borderColor} hover:shadow-2xl transition-all duration-300`"
          v-click
        >
          <div :class="`w-16 h-16 bg-gradient-to-br ${stage.bgGradient} rounded-full flex items-center justify-center mb-4 mx-auto shadow-md`">
            <lucide-search v-if="stage.icon === 'Search'" class="w-8 h-8 text-white" />
            <lucide-heart v-else-if="stage.icon === 'Heart'" class="w-8 h-8 text-white" />
            <lucide-shopping-cart v-else-if="stage.icon === 'ShoppingCart'" class="w-8 h-8 text-white" />
            <lucide-repeat v-else-if="stage.icon === 'Repeat'" class="w-8 h-8 text-white" />
            <lucide-users v-else-if="stage.icon === 'Users'" class="w-8 h-8 text-white" />
          </div>
          <h3 class="!text-lg !font-semibold text-gray-800 !mb-3">{{ stage.title }}</h3>
          <p class="text-gray-600 !text-xs !leading-relaxed !m-0">{{ stage.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
