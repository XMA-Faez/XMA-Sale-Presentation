<!-- components/PricingCardSystem.vue -->
<template>
  <div class="w-full">
    <div class="text-center">
      <h1 class="">{{ title }}</h1>
      <div 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-2xl text-zinc-400 mt-4 mb-12"
      >
        {{ subtitle }}
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 w-full">
      <div 
        v-for="(plan, index) in plans" 
        :key="index"
        :class="`flex ${index === 1 ? '' : 'mt-8'} flex-col h-${index === 1 ? 'full' : '(calc(100%-2rem))'} rounded-xl border ${plan.popular ? 'border-red-500 shadow-lg' : 'border-zinc-800'} bg-zinc-900/50 backdrop-blur-sm transition-all hover:shadow-xl`"
      >
        <div v-if="plan.popular" class="bg-red-600 text-white text-center py-1 px-4 text-sm font-medium rounded-t-xl">
          Most Popular
        </div>
        <div class="p-6 flex flex-col h-full">
          <h3 :class="`text-2xl font-bold ${plan.popular ? 'text-red-500' : 'text-white'} mb-2`">{{ plan.name }}</h3>
          
          <div class="mb-6">
            <div class="flex items-end">
              <span class="text-4xl font-bold text-white">{{ plan.price }}</span>
              <span class="text-zinc-400 ml-2 mb-1">{{ plan.currency }}</span>
            </div>
            <div v-if="plan.usdPrice" class="text-zinc-400 text-sm mt-1">${{ plan.usdPrice }} USD</div>
          </div>
          
          <div class="flex-grow flex flex-col">
            <ul class="space-y-3 flex-grow">
              <li v-for="(feature, featureIndex) in plan.features.filter(f => !f.extraSpace)" :key="featureIndex" class="flex items-center !ml-0">
                <!-- If feature has an 'included' property and we need a checkmark or x icon -->
                <template v-if="feature.included !== undefined">
                  <div :class="getFeatureIconColor(feature)" class="mr-2 mt-0.5">
                    <svg v-if="feature.included" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span :class="feature.included ? '' : 'text-zinc-500'">
                    <b v-if="feature.bold">{{ feature.text }}</b>
                    <template v-else>{{ feature.text }}</template>
                  </span>
                </template>
                
                <!-- For features that are just displayed as text with no icon (like the budget line) -->
                <template v-else>
                  <span class="flex items-center">
                    <b v-if="feature.bold">{{ feature.text }}</b>
                    <template v-else>{{ feature.text }}</template>
                  </span>
                </template>
              </li>
            </ul>
            
            <!-- Bottom features with extraSpace -->
            <div v-if="plan.features.some(f => f.extraSpace)" class="mt-auto pt-3 border-t border-zinc-800" style="margin-top: 2rem !important;">
              <div v-for="(feature, featureIndex) in plan.features.filter(f => f.extraSpace)" :key="'bottom-' + featureIndex" class="flex items-center">
                <b v-if="feature.bold">{{ feature.text }}</b>
                <template v-else>{{ feature.text }}</template>
              </div>
            </div>
          </div>
          
          <button v-if="showButtons" :class="`mt-8 ${plan.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-zinc-800 hover:bg-zinc-700'} text-white font-medium py-2 px-4 rounded-lg transition-colors`">
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingCardSystem',
  props: {
    title: {
      type: String,
      default: 'Our Packages'
    },
    subtitle: {
      type: String,
      default: 'Tailored Solutions for Your Business Growth'
    },
    plans: {
      type: Array,
      required: true
    },
    showButtons: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: 'Get Started'
    }
  },
  methods: {
    getFeatureIconColor(feature) {
      if (!feature.included) return 'text-zinc-600'
      
      switch (feature.color) {
        case 'blue':
          return 'text-blue-500'
        case 'green':
          return 'text-green-500'
        case 'yellow':
          return 'text-yellow-500'
        default:
          return 'text-red-500'
      }
    }
  }
}
</script>
