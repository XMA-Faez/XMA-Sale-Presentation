<template>
  <a 
    href="https://xma-website.vercel.app/proposal" 
    target="_blank" 
    rel="noopener noreferrer"
    class="fixed text-[10px] top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg transition-all duration-300 flex items-center gap-2 backdrop-blur-sm border border-red-400/20"
  >
    <span>Visit Proposal</span>
    <lucide-external-link class="w-4 h-4" />
  </a>

  <img src="/logo.svg" class="h-10 ml-2 w-auto" />
  <footer class="absolute hidden z-50 bottom-0 left-0 right-0 p-2 xl:flex justify-center gap-2">
    <!-- Back Button -->
    <div v-if="!$nav.isPresenter" class="relative group">
      <button
        class="p-1 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-red-600/50 transition-all duration-300 backdrop-blur-sm"
        @click="$slidev.nav.prev">
        <lucide-chevron-left class="w-4 h-4 text-zinc-400 group-hover:text-red-500 transition-colors" />
      </button>
      <div
        class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="bg-zinc-900 text-zinc-300 text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
          Previous (←)
        </div>
      </div>
    </div>

    <!-- Next Click Button -->
    <div v-if="!$nav.isPresenter" class="relative group">
      <button
        class="p-1 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-red-600/50 transition-all duration-300 backdrop-blur-sm"
        @click="$slidev.nav.nextSlide">
        <lucide-mouse-pointer-click class="w-4 h-4 text-zinc-400 group-hover:text-red-500 transition-colors" />
      </button>
      <div
        class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="bg-zinc-900 text-zinc-300 text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
          Next Click (Space)
        </div>
      </div>
    </div>

    <!-- Next Slide Button -->
    <div v-if="!$nav.isPresenter" class="relative group">
      <button
        class="p-1 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-red-600/50 transition-all duration-300 backdrop-blur-sm"
        @click="$slidev.nav.next">
        <lucide-chevron-right class="w-4 h-4 text-zinc-400 group-hover:text-red-500 transition-colors" />
      </button>
      <div
        class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="bg-zinc-900 text-zinc-300 text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
          Next Slide (→)
        </div>
      </div>
    </div>

    <!-- Current Slide Indicator -->
    <div class="absolute right-2 bottom-2 text-zinc-500 text-xs">
      {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
    </div>
  </footer>
</template>
