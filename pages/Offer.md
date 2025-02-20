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
layout: center
---

<div 
  v-motion
  :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
  :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1 }"
  class="flex flex-col items-center"
>
  <div class="text-red-600 text-6xl font-bold mb-4">Premium</div>
  <div class="text-4xl font-semibold mb-2">25,000 AED</div>
  <div class="text-2xl font-medium text-zinc-400 mb-8">$6,800 USD</div>
  <div class="space-y-4 text-xl">
    <div class="flex items-center gap-2">
      <lucide-check class="text-red-500" /> 48 Ads
    </div>
    <div class="flex items-center gap-2">
      <lucide-check class="text-red-500" /> 20 Graphics
    </div>
    <div class="flex items-center gap-2">
      <lucide-check class="text-red-500" /> 28 Videos (with variants)
    </div>
    <div class="flex items-center gap-2">
      <lucide-check class="text-red-500" /> AI WhatsApp Chatbot
    </div>
  </div>
</div>

---
layout: center
---

<div 
  v-motion
  :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
  :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1 }"
  class="flex flex-col items-center"
>
  <div class="text-red-600 text-6xl font-bold mb-4">Standard</div>
  <div class="text-4xl font-semibold mb-2">15,000 AED</div>
  <div class="text-2xl font-medium text-zinc-400 mb-8">$4,500 USD</div>
  <div class="space-y-4 text-xl">
    <div class="flex items-center gap-2">
      <lucide-check class="text-red-500" /> 20 Ads
    </div>
    <div class="flex items-center gap-2">
      <lucide-check class="text-red-500" /> 10 Graphics
    </div>
    <div class="flex items-center gap-2">
      <lucide-check class="text-red-500" /> 10 Videos (with variants)
    </div>
    <div class="flex items-center gap-2">
      <lucide-check class="text-red-500" /> Marketing Tools & Chatbot
    </div>
  </div>
</div>

---
layout: center
---

<div 
  v-motion
  :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
  :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1 }"
  class="flex flex-col items-center"
>
  <div class="text-red-600 text-6xl font-bold mb-4">Base</div>
  <div class="text-4xl font-semibold mb-2">8,000 AED</div>
  <div class="text-2xl font-medium text-zinc-400 mb-8">$2,300 USD</div>
  <div class="space-y-4 text-xl">
    <div class="flex items-center gap-2">
      <lucide-check class="text-red-500" /> 7 Ads
    </div>
    <div class="flex items-center gap-2">
      <lucide-check class="text-red-500" /> 5 Graphics
    </div>
    <div class="flex items-center gap-2">
      <lucide-check class="text-red-500" /> 2 Videos
    </div>
    <div class="flex items-center gap-2">
      <lucide-check class="text-red-500" /> CRM & WhatsApp Integration
    </div>
  </div>
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
        { name: 'Ad Campaign(s) Set-up', base: '✅', standard: '✅', premium: '✅' },
        { name: 'Graphics', base: '5', standard: '10', premium: '20' },
        { name: 'Videos', base: '2', standard: '5', premium: '7' },
        { name: 'Variants', base: '1', standard: '2', premium: '4' },
        { name: 'Total Videos (with Variants)', base: '2', standard: '10', premium: '28' },
        { name: 'CRM', base: '✅', standard: '✅', premium: '✅' },
        { name: 'WhatsApp Integration', base: '✅', standard: '✅', premium: '✅' },
        { name: 'Chatbot', base: '❌', standard: '✅', premium: '✅' },
        { name: 'Marketing Tools', base: '❌', standard: '✅', premium: '✅' },
        { name: 'AI WhatsApp Chatbot', base: '❌', standard: '❌', premium: '✅' }
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
      <div v-for="plan in ['Base', 'Standard', 'Premium']" 
           class="p-4 font-bold text-xl text-red-600">
        {{ plan }}
      </div>
      <!-- Features -->
      <template v-for="feature in [
        { name: 'CRM Subscription', base: '✅', standard: '✅', premium: '✅' },
        { name: 'Single Platform Ad Management', base: '✅', standard: '✅', premium: '✅' },
        { name: 'Multi Platform Ad Management', base: '❌', standard: '✅', premium: '✅' },
        { name: 'WhatsApp Marketing Management', base: '❌', standard: '✅', premium: '✅' },
        { name: 'Monthly Graphics', base: '1', standard: '4', premium: '8' },
        { name: 'Monthly Videos (Types)', base: '0', standard: '0', premium: '4 in 1 Shoots' },
        { name: 'Ad Management Budget', base: '0 - 5,000', standard: '5,000 - 15,000', premium: '15,000+' }
      ]">
        <div class="p-4 border-t border-zinc-800 text-zinc-400">{{ feature.name }}</div>
        <div v-for="value in [feature.base, feature.standard, feature.premium]"
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
