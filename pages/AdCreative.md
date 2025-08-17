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
          Beauty-Focused Ad Creatives
        </span>
      </h1>
      <p class="!text-lg text-gray-600 max-w-3xl mx-auto !leading-relaxed">
        High-converting ad formats designed for beauty brands
      </p>
    </div>
    <div class="grid !max-w-xl mx-auto grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-click="1"
        v-motion
        :initial="{ opacity: 0, x: -30 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 0.7 } }"
        class="bg-gradient-to-br from-white to-rose-50 rounded-3xl p-6 shadow-lg border border-rose-100"
      >
        <div class="w-12 h-12 bg-gradient-to-br from-rose-300 to-pink-300 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-md">
          <lucide-play class="w-6 h-6 text-white" />
        </div>
        <h3 class="!text-xl !font-semibold text-gray-800 mb-3">Video Creatives</h3>
        <ul class="text-gray-600 space-y-2">
          <li class="flex items-start gap-2">
            <div class="w-1.5 h-1.5 bg-rose-400 rounded-full mt-1.5 flex-shrink-0"></div>
            <span class="!text-sm">Before/after transformations</span>
          </li>
          <li class="flex items-start gap-2">
            <div class="w-1.5 h-1.5 bg-rose-400 rounded-full mt-1.5 flex-shrink-0"></div>
            <span class="!text-sm">Application tutorials</span>
          </li>
          <li class="flex items-start gap-2">
            <div class="w-1.5 h-1.5 bg-rose-400 rounded-full mt-1.5 flex-shrink-0"></div>
            <span class="!text-sm">UGC compilations</span>
          </li>
          <li class="flex items-start gap-2">
            <div class="w-1.5 h-1.5 bg-rose-400 rounded-full mt-1.5 flex-shrink-0"></div>
            <span class="!text-sm">Ingredient highlights</span>
          </li>
        </ul>
      </div>
      <div
        v-click="2"
        v-motion
        :initial="{ opacity: 0, x: 30 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 0.7 } }"
        class="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-6 shadow-lg border border-purple-100"
      >
        <div class="w-12 h-12 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-md">
          <lucide-image class="w-6 h-6 text-white" />
        </div>
        <h3 class="!text-xl !font-semibold text-gray-800 mb-3">Static Images</h3>
        <ul class="text-gray-600 space-y-2 !text-left">
          <li class="flex items-start gap-2">
            <div class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
            <span class="!text-sm">Lifestyle flat lays</span>
          </li>
          <li class="flex items-start gap-2">
            <div class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
            <span class="!text-sm">Natural model shots</span>
          </li>
          <li class="flex items-start gap-2">
            <div class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
            <span class="!text-sm">Benefit infographics</span>
          </li>
          <li class="flex items-start gap-2">
            <div class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
            <span class="!text-sm">Social proof testimonials</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
