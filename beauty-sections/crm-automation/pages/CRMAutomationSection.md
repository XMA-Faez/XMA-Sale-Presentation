---
layout: cover
class: text-center
---

<div class="flex flex-col items-center justify-center h-full">
  <div
    v-motion
    :initial="{ opacity: 0, scale: 0.95 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }"
    class="text-center"
  >
    <div class="w-20 h-20 bg-gradient-to-br from-rose-700 to-rose-800 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-lg">
      <lucide-users class="w-10 h-10 text-white" />
    </div>
    <h1 class="!text-6xl !font-bold mb-6">
      <span class="bg-gradient-to-r from-rose-700 to-rose-800 bg-clip-text text-transparent">
        CRM & Marketing Automation
      </span>
    </h1>
    <p class="!text-xl text-rose-900 max-w-2xl mx-auto !leading-relaxed">
      Intelligent customer relationship management that scales with your beauty brand
    </p>
  </div>
</div>