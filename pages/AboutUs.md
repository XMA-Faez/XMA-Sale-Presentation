---
class: text-center
---

# Who We Are

<div class="relative h-full -mt-10">
  <!-- Section 1: Advertising Agency -->
  <div class="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2" v-click.hide="1">
    <div
      v-motion
      :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
      :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1 }"
      class="text-center text-4xl font-bold bg-gradient-to-r leading-[50px] from-red-600 to-red-500 bg-clip-text text-transparent"
    >
      Advertising Agency
    </div>
  </div>

  <!-- Section 2: In-House Team (Two-Column Layout) -->
  <div class="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
    <div class="flex flex-col md:flex-row gap-12 justify-center items-center">
      <!-- Left Column: Team Label -->
      <div class="flex-1">
        <div
          v-click="1"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1 }"
          class="text-3xl font-bold text-center"
        >
          <span class="text-red-600">15</span> In-House<br/>Professionals
        </div>
      </div>
      <!-- Right Column: Team Members -->
      <div class="flex-1 space-y-6">
        <div
          v-click="2"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-video class="w-6 h-6 text-red-500"/>
          <span class="text-lg">Videographers</span>
        </div>
        <div
          v-click="3"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-clapperboard class="w-6 h-6 text-red-500"/>
          <span class="text-lg">Video Editors</span>
        </div>
        <div
          v-click="4"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-code-2 class="w-6 h-6 text-red-500"/>
          <span class="text-lg">Developers</span>
        </div>
        <div
          v-click="5"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-palette class="w-6 h-6 text-red-500"/>
          <span class="text-lg">Graphic Designers</span>
        </div>
      </div>
    </div>
  </div>
</div>

