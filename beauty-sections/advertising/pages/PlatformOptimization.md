---
class: text-center
---

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
          Platform-Specific Optimization
        </span>
      </h1>
      <p class="!text-lg text-gray-600 max-w-3xl mx-auto !leading-relaxed">
        Tailored creative strategies for each advertising platform
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-click="1"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        class="bg-gradient-to-br from-white to-rose-50 rounded-3xl p-6 shadow-lg border border-rose-100 text-center"
      >
        <div class="w-12 h-12 bg-gradient-to-br from-rose-300 to-pink-300 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-md">
          <lucide-instagram class="w-6 h-6 text-white" />
        </div>
        <h4 class="!text-xl !font-semibold text-gray-800 mb-3">Meta (FB/IG)</h4>
        <p class="text-gray-600 !text-sm !leading-relaxed">Square & vertical formats, lifestyle-focused, UGC heavy</p>
      </div>
      <div
        v-click="2"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        class="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-6 shadow-lg border border-purple-100 text-center"
      >
        <div class="w-12 h-12 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-md">
          <mdi-google class="w-6 h-6 text-white" />
        </div>
        <h4 class="!text-xl !font-semibold text-gray-800 mb-3">Google Ads</h4>
        <p class="text-gray-600 !text-sm !leading-relaxed">Clean product shots, benefit-focused copy, search intent</p>
      </div>
      <div
        v-click="3"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        class="bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-6 shadow-lg border border-indigo-100 text-center"
      >
        <div class="w-12 h-12 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-md">
          <ic-outline-tiktok class="w-8 h-8 text-white" />
        </div>
        <h4 class="!text-xl !font-semibold text-gray-800 mb-3">TikTok</h4>
        <p class="text-gray-600 !text-sm !leading-relaxed">Vertical video, trend-based, authentic feel, quick hooks</p>
      </div>
    </div>
  </div>
</div>
