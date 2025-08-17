---
class: text-center
---

<script setup>
const testingSteps = [
  {
    id: 1,
    number: '1',
    title: 'Hook Testing',
    description: 'Test 3-5 different opening hooks per audience',
    gradient: 'from-rose-300 to-pink-300'
  },
  {
    id: 2,
    number: '2',
    title: 'Format Testing',
    description: 'Video vs. carousel vs. static performance',
    gradient: 'from-purple-300 to-indigo-300'
  },
  {
    id: 3,
    number: '3',
    title: 'Angle Testing',
    description: 'Problem/solution vs. aspiration vs. social proof',
    gradient: 'from-indigo-300 to-purple-300'
  },
  {
    id: 4,
    number: '4',
    title: 'CTA Testing',
    description: 'Shop Now vs. Learn More vs. Get Yours',
    gradient: 'from-rose-300 to-pink-300'
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
          Creative Testing Strategy
        </span>
      </h1>
      <p class="!text-lg text-gray-600 max-w-3xl mx-auto !leading-relaxed">
        Systematic approach to optimizing ad performance
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
      <div
        v-for="step in testingSteps"
        :key="step.id"
        :v-click="step.id"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        class="bg-white rounded-3xl p-5 shadow-lg border border-stone-100 hover:shadow-2xl transition-all duration-300"
      >
        <div :class="`w-10 h-10 bg-gradient-to-br ${step.gradient} mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-md`">
          <span class="!text-sm !font-bold text-white">{{ step.number }}</span>
        </div>
        <div>
          <h4 class="!text-xl !font-medium text-gray-800 mb-3">{{ step.title }}</h4>
          <p class="text-gray-600 !m-0 !text-sm">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
