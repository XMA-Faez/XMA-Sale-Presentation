---
class: text-center
---

<div class="">
  <div class="max-w-6xl mx-auto">
    <!-- Main Title -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }"
      class="text-center mb-16"
    >
      <h1 class="!text-5xl !font-bold mb-6">
        <span class="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
          Trusted By Leading Businesses
        </span>
      </h1>
      <p class="!text-xl text-gray-600 max-w-3xl mx-auto !leading-relaxed">
        Now specializing in beauty ecommerce after 5+ years of proven results
      </p>
    </div>
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        class="bg-gradient-to-br from-white to-rose-50 rounded-3xl p-8 shadow-lg border border-rose-100 hover:shadow-2xl transition-all duration-300"
      >
        <div class="text-center">
          <div class="!text-4xl !font-bold mb-2 text-rose-500">
            <Ticker :value="50" :decimalPlaces="0" color="text-rose-500" />+
          </div>
          <div class="!text-lg text-gray-600 !font-medium">Total Clients</div>
        </div>
      </div>
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        class="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-2xl transition-all duration-300"
      >
        <div class="text-center">
          <div class="!text-4xl !font-bold mb-2 text-purple-500">
            <Ticker :value="30" decimalPlaces="0" color="text-purple-500" />K+
          </div>
          <div class="!text-lg text-gray-600 !font-medium">Leads Generated</div>
        </div>
      </div>
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        class="bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-8 shadow-lg border border-indigo-100 hover:shadow-2xl transition-all duration-300"
      >
        <div class="text-center">
          <div class="!text-4xl !font-bold mb-2 text-indigo-500">
            AED <Ticker :value="3" decimalPlaces="0" color="text-indigo-500" />M+
          </div>
          <div class="!text-lg text-gray-600 !font-medium">Ad Budget Managed</div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Client Logos Section -->
<div 
  v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { duration: 0.7 } }"
  class="relative mt-8"
>
  <Marquee class="[--duration:20s]">
    <img src="/packman_Logo.png" class="h-16 duration-300 bg-white rounded-2xl shadow-md p-3 mx-4" />
    <img src="/Casapons.png" class="h-16 duration-300 bg-white rounded-2xl shadow-md p-3 mx-4" />
    <img src="/DXtreme.svg" class="h-16 duration-300 bg-white rounded-2xl shadow-md p-3 mx-4" />
    <img src="/4Matic.jpg" class="h-16 duration-300 rounded-2xl shadow-md mx-4" />
    <img src="/wyz-logo.png" class="h-16 duration-300 bg-white rounded-2xl shadow-md p-3 mx-4" />
    <img src="/Tick.webp" class="h-16 duration-300 bg-white rounded-2xl shadow-md p-3 mx-4" />
    <img src="/ASUS.png" class="h-16 duration-300 bg-white rounded-2xl shadow-md p-3 mx-4" />
    <img src="/TFG.png" class="h-16 duration-300 bg-white rounded-2xl shadow-md p-3 mx-4" />
  </Marquee>
  <div class="pointer-events-none absolute inset-y-0 -left-0.5 w-1/3 bg-gradient-to-r from-white" />
  <div class="pointer-events-none absolute inset-y-0 -right-0.5 w-1/3 bg-gradient-to-l from-white" />
</div>
