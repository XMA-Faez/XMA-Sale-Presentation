---
layout: center
---

# Our Packages

<div 
  v-motion
  :initial="{ opacity: 0, y: 100 }"
  :enter="{ opacity: 1, y: 0 }"
  class="text-2xl text-zinc-400 mt-4"
>
  Tailored Solutions for Your Business Growth
</div>

---
zoom: 0.5
---

<h1 class="text-center text-4xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
    Detailed Package Comparison
</h1>

<div class="overflow-x-auto py-8">
  <div class="inline-block min-w-full bg-zinc-900/50 rounded-xl border border-zinc-800 backdrop-blur-sm">
    <div class="grid grid-cols-4">
      <!-- Headers -->
      <div class="p-4 font-semibold text-zinc-400">Features</div>
      <div v-for="plan in ['Base', 'Standard', 'Premium']" 
           class="p-4 font-bold text-xl text-red-600">
        {{ plan }}
      </div>
      <!-- Features -->
      <template v-for="feature in [
        { name: 'ADs', base: '7', standard: '20', premium: '48' },
        { name: 'Graphics', base: '5', standard: '10', premium: '20' },
        { name: 'Videos', base: '2', standard: '5', premium: '7' },
        { name: 'Variants', base: '1', standard: '2', premium: '4' },
        { name: 'Total Videos (with Variants)', base: '2', standard: '10', premium: '28' },
        { name: 'Ad Campaign(s) Set-up', base: '✅', standard: '✅', premium: '✅' },
        { name: 'CRM', base: '✅', standard: '✅', premium: '✅' },
        { name: 'WhatsApp Integration', base: '✅', standard: '✅', premium: '✅' },
        { name: 'Chatbot', base: '❌', standard: '✅', premium: '✅' },
        { name: 'Marketing Tools', base: '❌', standard: '✅', premium: '✅' },
        { name: 'Smart AI WhatsApp Chatbot', base: '❌', standard: '❌', premium: '✅' }
      ]">
        <div class="p-4 border-t border-zinc-800 text-zinc-400">{{ feature.name }}</div>
        <div v-for="value in [feature.base, feature.standard, feature.premium]"
             class="p-4 border-t border-zinc-800 font-medium"
             :class="{'text-red-500': value === '✅', 'text-zinc-600': value === '❌'}">
          {{ value }}
        </div>
      </template>
      <!-- Pricing AED -->
      <div class="p-4 border-t border-zinc-800 font-semibold text-zinc-400">Price (AED)</div>
      <div class="p-4 border-t border-zinc-800 font-bold">8,000</div>
      <div class="p-4 border-t border-zinc-800 font-bold">15,000</div>
      <div class="p-4 border-t border-zinc-800 font-bold">25,000</div>
      <!-- Pricing USD -->
      <div class="p-4 border-t border-zinc-800 font-semibold text-zinc-400">Price (USD)</div>
      <div class="p-4 border-t border-zinc-800 font-bold">$2,300</div>
      <div class="p-4 border-t border-zinc-800 font-bold">$4,500</div>
      <div class="p-4 border-t border-zinc-800 font-bold">$6,800</div>
    </div>
  </div>
</div>

---
zoom: 0.5
---

<h1 class="text-center text-4xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
    Retainer Structure
</h1>

<div class="overflow-x-auto py-8">
  <div class="inline-block min-w-full bg-zinc-900/50 rounded-xl border border-zinc-800 backdrop-blur-sm">
    <div class="grid grid-cols-4 ">
      <!-- Headers -->
      <div class="p-4 font-semibold text-zinc-400">Features</div>
      <div v-for="plan in ['Lite', 'Plus', 'Pro']" 
           class="p-4 font-bold text-xl text-red-600">
        {{ plan }}
      </div>
      <!-- Features -->
      <template v-for="feature in [
        { name: 'CRM Subscription', lite: '✅', plus: '✅', pro: '✅' },
        { name: 'Single Platform Ad Management', lite: '✅', plus: '✅', pro: '✅' },
        { name: 'Multi Platform Ad Management', lite: '❌', plus: '✅', pro: '✅' },
        { name: 'WhatsApp Marketing Management', lite: '❌', plus: '✅', pro: '✅' },
        { name: 'Monthly Graphics', lite: '1', plus: '4', pro: '8' },
        { name: 'Monthly Videos (Types)', lite: '0', plus: '0', pro: '4 in 1 Shoots' },
        { name: 'Ad Management Budget', lite: '0 - 5,000', plus: '5,000 - 15,000', pro: '15,000+' }
      ]">
        <div class="p-4 border-t border-zinc-800 text-zinc-400">{{ feature.name }}</div>
        <div v-for="value in [feature.lite, feature.plus, feature.pro]"
             class="p-4 border-t border-zinc-800 font-medium"
             :class="{'text-red-500': value === '✅', 'text-zinc-600': value === '❌'}">
          {{ value }}
        </div>
      </template>
      <!-- Monthly Price -->
      <div class="p-4 border-t border-zinc-800 font-semibold text-zinc-400">Monthly Price (AED)</div>
      <div class="p-4 border-t border-zinc-800 font-bold">1,500</div>
      <div class="p-4 border-t border-zinc-800 font-bold">3,500</div>
      <div class="p-4 border-t border-zinc-800 font-bold">7,000</div>
    </div>
  </div>
</div>
