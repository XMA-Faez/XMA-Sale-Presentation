---
class: text-center
---

<script setup>
const metrics = [
  {
    id: 1,
    value: 35,
    suffix: '%',
    prefix: '',
    color: 'text-rose-500',
    label: 'Revenue from Email'
  },
  {
    id: 2,
    value: 45,
    suffix: '%',
    prefix: '',
    color: 'text-rose-500',
    label: 'Open Rate'
  },
  {
    id: 3,
    value: 8,
    suffix: '%',
    prefix: '',
    color: 'text-rose-500',
    label: 'Click-Through Rate'
  },
  {
    id: 4,
    value: 125,
    suffix: '',
    prefix: '$',
    color: 'text-rose-500',
    label: 'Revenue per Email'
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
        <span class="bg-gradient-to-r from-rose-700 to-rose-800 bg-clip-text text-transparent">
          Email Performance Metrics
        </span>
      </h1>
      <p class="!text-lg text-rose-900 max-w-3xl mx-auto !leading-relaxed">
        Industry-leading results for beauty brands
      </p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div
        v-for="metric in metrics"
        :key="metric.id"
        :v-click="metric.id"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        class="text-center"
      >
        <div :class="`!text-4xl !font-bold ${metric.color} mb-3`">
          {{ metric.prefix }}<Ticker :value="metric.value" :decimalPlaces="0" :color="metric.color" />{{ metric.suffix }}
        </div>
        <div class="!text-sm text-rose-900 !font-medium">{{ metric.label }}</div>
      </div>
    </div>
  </div>
</div>
