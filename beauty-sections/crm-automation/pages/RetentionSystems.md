---
class: text-center
zoom: 0.8
---

<script setup>
const retentionSystems = [
  {
    id: 1,
    title: 'Loyalty Programs',
    icon: 'Crown',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-700 to-rose-800',
    features: [
      'Points-based rewards system',
      'Tier-based VIP programs',
      'Birthday & anniversary perks',
      'Referral bonuses'
    ]
  },
  {
    id: 2,
    title: 'Subscription Management',
    icon: 'Repeat',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-600 to-rose-700',
    features: [
      'Flexible subscription options',
      'Automated replenishment',
      'Pause & skip functionality',
      'Usage tracking alerts'
    ]
  },
  {
    id: 3,
    title: 'Churn Prevention',
    icon: 'Shield',
    bgGradient: 'from-white to-indigo-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-600 to-rose-700',
    features: [
      'At-risk customer identification',
      'Predictive churn modeling',
      'Win-back campaigns',
      'Exit intent interventions'
    ]
  },
  {
    id: 4,
    title: 'Community Building',
    icon: 'Users',
    bgGradient: 'from-white to-rose-50',
    borderColor: 'border-rose-100',
    iconGradient: 'from-rose-700 to-rose-800',
    features: [
      'Beauty community platform',
      'User-generated content',
      'Expert tutorials & tips',
      'Social proof amplification'
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
          Customer Retention Systems
        </span>
      </h1>
      <p class="!text-xl text-rose-900 max-w-3xl mx-auto !leading-relaxed">
        Strategic systems that turn one-time buyers into loyal beauty advocates
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div
        v-for="system in retentionSystems"
        :key="system.id"
        v-click
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        :class="`bg-gradient-to-br ${system.bgGradient} rounded-3xl p-5 shadow-lg border ${system.borderColor} hover:shadow-2xl transition-all duration-300`"
      >
        <div class="flex gap-4 mb-4">
          <div :class="`w-10 h-10 bg-gradient-to-br ${system.iconGradient} rounded-2xl flex items-center justify-center shadow-md`">
            <lucide-crown v-if="system.icon === 'Crown'" class="w-6 h-6 text-white" />
            <lucide-repeat v-else-if="system.icon === 'Repeat'" class="w-6 h-6 text-white" />
            <lucide-shield v-else-if="system.icon === 'Shield'" class="w-6 h-6 text-white" />
            <lucide-users v-else-if="system.icon === 'Users'" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="!text-xl !font-semibold text-gray-800 text-left">{{ system.title }}</h3>
          </div>
        </div>
        <div class="space-y-2 ml-14">
          <div
            v-for="feature in system.features"
            :key="feature"
            class="flex items-center gap-3"
          >
            <div class="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
            <span class="!text-sm text-rose-900">{{ feature }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
