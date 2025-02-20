---
theme: ./theme
colorschema: dark
transition: my-transition
title: Lead Generation Solutions
layout: cover
background: /gradient.jpg
fonts:
  mono: "JetBrains Mono"
  local: Mona Sans
---

<!-- Global state setup -->
<script setup>
import { ref, onMounted, provide } from 'vue'

const clientName = ref("")
const companyName = ref("")

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  clientName.value = urlParams.get('name') || ''
  companyName.value = urlParams.get('company') || ''
  
  // Make these values available to other slides
  provide('clientName', clientName)
  provide('companyName', companyName)
})
</script>

<div class="flex flex-col items-center justify-center h-full">
    <!-- Logo -->
    <div
        v-motion
        :initial="{ filter: 'blur(12px)', opacity: 0 }"
        :enter="{ filter: 'blur(0px)', opacity: 1 }"
        :duration="300"
        class="mb-8"
    >
        <img src="/logo.svg" alt="XMA Agency Logo" class="h-24 w-auto" />
    </div>
    <!-- Personalized Welcome -->
    <div
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, transition: { delay: 200 } }"
    :duration="300"
    class="text-5xl font-bold mb-4 text-center"
    >
    <template v-if="clientName">
    <HyperText :text="`Welcome, ${clientName}`" duration="2000" />
    </template>
    <template v-else>
    <HyperText text="Welcome to XMA Agency"  duration="2000" />
    </template>
</div>
<!-- Company specific message -->
<div
    v-if="companyName"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, transition: { delay: 400 } }"
    class="text-2xl mb-8 text-red-200"
>
    <HyperText :text="`Let\'s transform ${companyName}\'s digital presence`"  duration="2000" />
</div>
<div
    v-else
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, transition: { delay: 400 } }"
    class="text-2xl mb-8 text-red-200"
>
    <HyperText :text="`Let\'s transform your digital presence`"  duration="2000" />
</div>
<!-- Service icons with Lucide -->
<div class="flex gap-12 mt-12">
    <div 
        v-motion
        :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
        :enter="{ filter: 'blur(0px)', opacity: 1, y: 0, transition: { delay: 200 } }"
        :duration="500"
        class="text-center"
    >
        <div class="mb-3 p-4 bg-white/20 rounded-full">
            <lucide-video class="w-8 h-8" />
        </div>
        <div>Video</div>
    </div>
    <div 
        v-motion
        :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
        :enter="{ filter: 'blur(0px)', opacity: 1, y: 0, transition: { delay: 400 } }"
        :duration="500"
        class="text-center"
    >
        <div class="mb-3  p-4 bg-white/20 rounded-full ">
            <lucide-bar-chart3 class="w-8 h-8" />
        </div>
        <div>Marketing</div>
    </div>
    <div 
        v-motion
        :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
        :enter="{ filter: 'blur(0px)', opacity: 1, y: 0, transition: { delay: 600 } }"
        :duration="500"
        class="text-center"
    >
        <div class="mb-3  p-4 bg-white/20 rounded-full ">
            <lucide-bot class="w-8 h-8" />
        </div>
        <div>CRM</div>
    </div>
    <div 
        v-motion
        :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
        :enter="{ filter: 'blur(0px)', opacity: 1, y: 0, transition: { delay: 800 } }"
        :duration="500"
        class="text-center"
    >
        <div class="mb-3  p-4 bg-white/20 rounded-full ">
            <lucide-zap class="w-8 h-8" />
        </div>
        <div>Performance</div>
    </div>
</div>
</div>

<!-- Style adjustments -->
<style>
.slidev-layout.cover {
  background: linear-gradient(to bottom right, #1a237e, #311b92);
  color: white;
}
</style>
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

---
layout: two-cols-header
class: text-center
---

<h1 class="text-center text-4xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">What We Offer</h1>

::left::
<div class="flex-1 px-8">
    <div
        v-click
        v-motion
        :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
        :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
        class="p-6 bg-zinc-900/50 rounded-xl backdrop-blur-sm border border-zinc-800 hover:border-red-600/50 shadow-lg"
    >
        <div class="flex flex-col items-center gap-4">
            <lucide-target class="w-12 h-12 text-red-500"/>
            <h3 class="text-xl font-semibold">Quality Lead Generation</h3>
            <p class="text-sm text-zinc-400">Targeted campaigns that convert prospects into valuable leads</p>
        </div>
    </div>
</div>

::right::
<div class="flex-1 px-8">
    <div
        v-click
        v-motion
        :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
        :enter="{ filter: 'blur(0px)', opacity: 1, y: 0, transition: { delay: 200 } }"
        class="p-6 bg-zinc-900/50 rounded-xl backdrop-blur-sm border border-zinc-800 hover:border-red-600/50 shadow-lg"
    >
        <div class="flex flex-col items-center gap-4">
            <lucide-settings class="w-12 h-12 text-red-500"/>
            <h3 class="text-xl font-semibold">Lead Management System</h3>
            <p class="text-sm text-zinc-400">Comprehensive CRM to track and nurture your leads effectively</p>
        </div>
    </div>
</div>
---
class: text-center
---

# Trusted By Dubai's Businesses
<div 
  v-motion
  :initial="{ opacity: 0, y: 100 }"
  :enter="{ opacity: 1, y: 0 }"
  :exit="{ opacity: 1, y: 0 }"
  class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
>
    <dl class="grid grid-cols-1 gap-8 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <div 
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1, transition: { delay: 200 } }"
          class="flex flex-col px-4 py-8 text-center bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-red-600/50"
        >
            <dd class="text-2xl font-extrabold text-red-600 md:text-5xl mb-4">
                <Ticker :value="50" :decimalPlaces="0" />+
            </dd>
            <dt class="text-lg font-medium text-zinc-400">Total Clients</dt>
        </div>
        <div 
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1, transition: { delay: 400 } }"
          class="flex flex-col px-4 py-8 text-center bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-red-600/50"
        >
            <dd class="text-2xl font-extrabold text-red-600 md:text-5xl mb-4">
                <Ticker :value="30" decimalPlaces="0" />K+
            </dd>
            <dt class="text-lg font-medium text-zinc-400">Leads Generated</dt>
        </div>
        <div 
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1, transition: { delay: 600 } }"
          class="flex flex-col px-4 py-8 text-center bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-red-600/50"
        >
            <dd class="text-2xl font-extrabold text-red-600 md:text-5xl mb-4">
                AED <Ticker :value="3" decimalPlaces="0" />M+
            </dd>
            <dt class="text-lg font-medium text-zinc-400">Ad Budget Managed</dt>
        </div>
    </dl>
</div>

<div 
  v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 800 } }"
  class="relative mt-8"
>
    <Marquee
        class="[--duration:20s]"
    >
        <img src="/packman_Logo.jpg" class="h-12 mx-4 duration-300" />
        <img src="/packman_Logo.jpg" class="h-12 mx-4 duration-300" />
        <img src="/packman_Logo.jpg" class="h-12 mx-4 duration-300" />
        <img src="/packman_Logo.jpg" class="h-12 mx-4 duration-300" />
        <img src="/packman_Logo.jpg" class="h-12 mx-4 duration-300" />
        <img src="/packman_Logo.jpg" class="h-12 mx-4 duration-300" />
        <img src="/packman_Logo.jpg" class="h-12 mx-4 duration-300" />
    </Marquee>
    <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0f0f0f] dark:from-background" />
    <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0f0f0f] dark:from-background" />
</div>

---
class: text-center
---

# Our Process

<style>
.scale-step {
    @apply rounded-lg p-6 transform transition duration-500 hover:scale-105

}

</style>

<div class="grid mt-32 grid-cols-4 gap-4 text-center">
    <div v-click class="scale-step bg-blue-950/40">
        <lucide-video class="w-12 h-12 text-blue-500" />
        <p style="margin: 0" class="text-lg font-bold text-blue-500">Content Creation</p>
    </div>
    <div v-click class="scale-step bg-green-950/40">
        <lucide-layout-dashboard class="w-12 h-12 text-green-500" />
        <p style="margin: 0" class="text-lg font-bold text-green-500">CRM Setup</p>
    </div>
    <div v-click class="scale-step bg-yellow-950/40">
        <mdi-bullhorn class="w-12 h-12 text-yellow-500" />
        <p style="margin: 0" class="text-lg font-bold text-yellow-500">Advertising</p>
    </div>
    <div v-click class="scale-step bg-red-950/40">
        <mdi-account-convert class="w-12 h-12 text-red-500" />
        <p style="margin: 0" class="text-lg font-bold text-red-500">Lead Management</p>
    </div>
</div>

---
src: ./pages/Process.md
---

---
src: ./pages/VideoType.md
---

---
src: ./pages/Clients.md
---

---
src: ./pages/Offer.md
---

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
        <span>+971 XX XXX XXXX</span>
      </div>
      <div class="flex items-center gap-2">
        <lucide-mail class="w-6 h-6 text-red-500" />
        <span>contact@xmaagency.com</span>
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

---
