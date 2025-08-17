---
class: text-center
---

<script setup>
const emailFlows = [
  {
    id: 1,
    title: 'Welcome Series',
    icon: 'Mail',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-300 to-pink-300',
    steps: [
      { number: '1', title: 'Brand Story', description: 'Mission & values', color: 'bg-rose-400' },
      { number: '2', title: 'Product Education', description: 'Usage & benefits', color: 'bg-rose-400' },
      { number: '3', title: 'Social Proof', description: 'Reviews & testimonials', color: 'bg-rose-400' }
    ],
    stepBorder: 'border-rose-100'
  },
  {
    id: 2,
    title: 'Replenishment Flow',
    icon: 'Repeat',
    bgGradient: 'from-white to-purple-50',
    borderColor: 'border-purple-100',
    iconGradient: 'from-purple-300 to-indigo-300',
    steps: [
      { icon: 'Clock', title: 'Usage Reminder', description: 'Product lifecycle tracking', color: 'bg-purple-400' },
      { icon: 'Percent', title: 'Exclusive Discount', description: 'VIP customer pricing', color: 'bg-purple-400' },
      { icon: 'ShoppingBag', title: 'Easy Reorder', description: 'One-click purchase', color: 'bg-purple-400' }
    ],
    stepBorder: 'border-purple-100'
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
          Key Email Flows
        </span>
      </h1>
      <p class="!text-lg text-gray-600 max-w-3xl mx-auto !leading-relaxed">
        Essential automated sequences for beauty brands
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div
        v-for="flow in emailFlows"
        :key="flow.id"
        :v-click="flow.id"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        :class="`bg-gradient-to-br ${flow.bgGradient} rounded-3xl p-5 shadow-lg border ${flow.borderColor} hover:shadow-2xl transition-all duration-300`"
      >
        <div class="flex gap-4 mb-4">
          <div :class="`w-10 h-10 bg-gradient-to-br ${flow.iconGradient} rounded-2xl flex items-center justify-center shadow-md`">
            <lucide-mail v-if="flow.icon === 'Mail'" class="w-6 h-6 text-white" />
            <lucide-repeat v-else-if="flow.icon === 'Repeat'" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="!text-xl !font-semibold text-left">{{ flow.title }}</h3>
          </div>
        </div>
        <div class="space-y-2 ml-14">
          <div
            v-for="step in flow.steps"
            :key="step.number || step.icon"
            :class="`flex items-center gap-2 p-2 bg-white rounded-lg border ${flow.stepBorder}`"
          >
            <div v-if="step.number" :class="`w-6 h-6 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`">
              <span class="!text-xs !font-bold text-white">{{ step.number }}</span>
            </div>
            <div v-else :class="`w-6 h-6 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`">
              <lucide-clock v-if="step.icon === 'Clock'" class="w-3 h-3 text-white" />
              <lucide-percent v-else-if="step.icon === 'Percent'" class="w-3 h-3 text-white" />
              <lucide-shopping-bag v-else-if="step.icon === 'ShoppingBag'" class="w-3 h-3 text-white" />
            </div>
            <div>
              <div class="!text-sm !font-medium text-gray-800">{{ step.title }}</div>
              <div class="!text-xs text-gray-600">{{ step.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
