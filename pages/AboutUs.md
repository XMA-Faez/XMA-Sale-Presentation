---
class: text-center
---

# About Us

<div class="relative h-full -mt-10">
  <div class="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2" v-click.hide="1">
    <div
      v-motion
      :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
      :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1 }"
      class="text-center text-2xl max-w-2xl text-zinc-300 leading-relaxed"
    >
      We create a consistent flow of qualified leads for real estate professionals so they can focus on what they do best—<span class="text-red-500 font-semibold">closing deals</span>.
    </div>
  </div>

  <div class="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
    <div class="flex flex-col md:flex-row gap-12 justify-center items-center">
      <div class="flex-1">
        <div
          v-click="1"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1 }"
          class="text-3xl font-bold text-center"
        >
          <span class="text-white">Our Team</span>
        </div>
      </div>
      <div class="flex-1 text-left grid grid-cols-2 gap-4">
        <div
          v-click="2"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-target class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Advertising Strategists</span>
        </div>
        <div
          v-click="3"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-video class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Content Producers</span>
        </div>
        <div
          v-click="4"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-bot class="w-6 h-6 text-red-500"/>
          <span class="text-sm">CRM Specialists</span>
        </div>
        <div
          v-click="5"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-bar-chart-2 class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Dubai Market Analysts</span>
        </div>
      </div>
    </div>
  </div>
</div>

