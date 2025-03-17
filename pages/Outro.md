---
layout: center
class: text-center
---

<div class="flex flex-col items-center justify-center gap-8">
  <div
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: -50 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
  >
    <h1 class="text-6xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent mb-2">
      Let's Work Together
    </h1>
  </div>

  <div
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, transition: { delay: 200 } }"
    class="flex flex-col items-center gap-6"
  >
    <div class="text-2xl text-zinc-400">Transform Your Business with XMA Agency</div>
    <div class="flex items-center gap-8 mt-4">
      <div class="flex items-center gap-2">
        <lucide-phone class="w-6 h-6 text-red-500" />
        <span><a href="tel:+971503636856">+971 50 363 6856</a></span>
      </div>
      <div class="flex items-center gap-2">
        <lucide-mail class="w-6 h-6 text-red-500" />
        <span><a href="mailto:admin@xmaagency.com">admin@xmaagency.com</a></span>
      </div>
    </div>
  </div>

  <div 
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
    class="mt-8 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 backdrop-blur-sm"
  >
    <div class="text-xl">
      Ready to discuss your project? Let's schedule a call!
    </div>
  </div>

  <div 
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1, transition: { delay: 600 } }"
    class="absolute bottom-8 flex items-center gap-2 text-zinc-500"
  >
    <lucide-map-pin class="w-5 h-5" />
    <span>Dubai, UAE</span>
  </div>
</div>
