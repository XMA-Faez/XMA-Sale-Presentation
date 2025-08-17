---
class: text-center
zoom: 0.8
---

<script setup>
const segments = [
  {
    id: 1,
    title: 'Skin Concern Segments',
    icon: 'Sparkles',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-300 to-pink-300',
    features: [
      'Acne-prone skin solutions',
      'Anti-aging & wrinkles',
      'Sensitive skin care',
      'Hyperpigmentation focus'
    ]
  },
  {
    id: 2,
    title: 'Lifestyle Segments',
    icon: 'Calendar',
    bgGradient: 'from-white to-purple-50',
    borderColor: 'border-purple-100',
    iconGradient: 'from-purple-300 to-indigo-300',
    features: [
      'Busy professionals',
      'Minimalist beauty lovers',
      'K-beauty enthusiasts',
      'Clean beauty advocates'
    ]
  },
  {
    id: 3,
    title: 'Purchase Behavior',
    icon: 'ShoppingBag',
    bgGradient: 'from-white to-indigo-50',
    borderColor: 'border-indigo-100',
    iconGradient: 'from-indigo-300 to-purple-300',
    features: [
      'High-value customers (LTV)',
      'Frequent buyers',
      'Sale & discount hunters',
      'New product early adopters'
    ]
  },
  {
    id: 4,
    title: 'Age & Life Stage',
    icon: 'Users',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-300 to-pink-300',
    features: [
      'Gen Z beauty explorers',
      'Millennial skincare focus',
      'Gen X anti-aging',
      'Mature skin specialists'
    ]
  },
  {
    id: 5,
    title: 'Engagement Level',
    icon: 'Heart',
    bgGradient: 'from-white to-purple-50',
    borderColor: 'border-purple-100',
    iconGradient: 'from-purple-300 to-indigo-300',
    features: [
      'Brand advocates & reviewers',
      'Social media engagers',
      'Email active subscribers',
      'Dormant re-engagement'
    ]
  },
  {
    id: 6,
    title: 'Beauty Goals',
    icon: 'Target',
    bgGradient: 'from-white to-indigo-50',
    borderColor: 'border-indigo-100',
    iconGradient: 'from-indigo-300 to-purple-300',
    features: [
      'Skincare routine builders',
      'Makeup enhancement',
      'Natural glow seekers',
      'Problem-solving focus'
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
        <span class="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
          Beauty Customer Segmentation
        </span>
      </h1>
      <p class="!text-xl text-gray-600 max-w-3xl mx-auto !leading-relaxed">
        Precision targeting for personalized beauty marketing campaigns
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div
        v-for="segment in segments"
        :key="segment.id"
        v-click
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        :class="`bg-gradient-to-br ${segment.bgGradient} rounded-3xl p-5 shadow-lg border ${segment.borderColor} hover:shadow-2xl transition-all duration-300`"
      >
        <div class="flex gap-4">
          <div :class="`w-10 h-10 bg-gradient-to-br ${segment.iconGradient} rounded-2xl flex items-center justify-center shadow-md`">
            <lucide-sparkles v-if="segment.icon === 'Sparkles'" class="w-6 h-6 text-white" />
            <lucide-calendar v-else-if="segment.icon === 'Calendar'" class="w-6 h-6 text-white" />
            <lucide-shopping-bag v-else-if="segment.icon === 'ShoppingBag'" class="w-6 h-6 text-white" />
            <lucide-users v-else-if="segment.icon === 'Users'" class="w-6 h-6 text-white" />
            <lucide-heart v-else-if="segment.icon === 'Heart'" class="w-6 h-6 text-white" />
            <lucide-target v-else-if="segment.icon === 'Target'" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="!text-lg !font-semibold text-gray-800 text-left">{{ segment.title }}</h3>
          </div>
        </div>
        <div class="space-y-2 ml-14">
          <div
            v-for="feature in segment.features"
            :key="feature"
            class="flex items-center gap-3"
          >
            <div class="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
            <span class="!text-sm text-gray-600">{{ feature }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
