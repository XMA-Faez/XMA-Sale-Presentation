---
class: text-center
zoom: 0.6
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
        <span class="bg-gradient-to-r from-rose-700 to-rose-800 bg-clip-text text-transparent">
          Beauty Marketing Specialists
        </span>
      </h1>
      <p class="!text-xl text-rose-900 max-w-3xl mx-auto !leading-relaxed">
        15 dedicated professionals focused on scaling beauty ecommerce brands
      </p>
    </div>
    <!-- Team Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      <div
        v-click="1"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: {  duration: 0.7 } }"
        class="bg-white rounded-3xl p-8 shadow-lg border border-stone-100 hover:shadow-2xl transition-all duration-300"
      >
        <div class="w-16 h-16 bg-gradient-to-br from-rose-700 to-rose-800 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
          <lucide-mail class="w-8 h-8 text-white" />
        </div>
        <h3 class="!text-xl !font-semibold text-gray-800 mb-2">Email Specialists</h3>
        <p class="text-rose-900">Klaviyo experts crafting converting email flows</p>
      </div>
      <div
        v-click="2"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: {  duration: 0.7 } }"
        class="bg-white rounded-3xl p-8 shadow-lg border border-stone-100 hover:shadow-2xl transition-all duration-300"
      >
        <div class="w-16 h-16 bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
          <lucide-megaphone class="w-8 h-8 text-white" />
        </div>
        <h3 class="!text-xl !font-semibold text-gray-800 mb-2">Ad Campaign Managers</h3>
        <p class="text-rose-900">Meta, Google & TikTok advertising experts</p>
      </div>
      <div
        v-click="3"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: {  duration: 0.7 } }"
        class="bg-white rounded-3xl p-8 shadow-lg border border-stone-100 hover:shadow-2xl transition-all duration-300"
      >
        <div class="w-16 h-16 bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
          <lucide-palette class="w-8 h-8 text-white" />
        </div>
        <h3 class="!text-xl !font-semibold text-gray-800 mb-2">Creative Directors</h3>
        <p class="text-rose-900">Beauty-focused ad creative & visual design</p>
      </div>
      <div
        v-click="4"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: {  duration: 0.7 } }"
        class="bg-white rounded-3xl p-8 shadow-lg border border-stone-100 hover:shadow-2xl transition-all duration-300"
      >
        <div class="w-16 h-16 bg-gradient-to-br from-rose-700 to-rose-800 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
          <lucide-layout-dashboard class="w-8 h-8 text-white" />
        </div>
        <h3 class="!text-xl !font-semibold text-gray-800 mb-2">CRM Experts</h3>
        <p class="text-rose-900">Customer journey & automation specialists</p>
      </div>
      <div
        v-click="5"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: {  duration: 0.7 } }"
        class="bg-white rounded-3xl p-8 shadow-lg border border-stone-100 hover:shadow-2xl transition-all duration-300"
      >
        <div class="w-16 h-16 bg-gradient-to-br from-rose-700 to-rose-800 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
          <lucide-bar-chart class="w-8 h-8 text-white" />
        </div>
        <h3 class="!text-xl !font-semibold text-gray-800 mb-2">Data Analysts</h3>
        <p class="text-rose-900">Performance tracking & optimization experts</p>
      </div>
      <div
        v-click="6"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: {  duration: 0.7 } }"
        class="bg-white rounded-3xl p-8 shadow-lg border border-stone-100 hover:shadow-2xl transition-all duration-300"
      >
        <div class="w-16 h-16 bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
          <lucide-code-2 class="w-8 h-8 text-white" />
        </div>
        <h3 class="!text-xl !font-semibold text-gray-800 mb-2">Automation Specialists</h3>
        <p class="text-rose-900">Technical integration & workflow optimization</p>
      </div>
    </div>
  </div>
</div>

