---
theme: ./theme
transition: my-transition
title: Lead Generation Solutions
fonts:
  mono: "JetBrains Mono"
  local: Mona Sans
---

# <Morph :texts="[ 'Welcome to XMA Agency', displayText ]" />

<script setup>
import { ref, onMounted } from 'vue'

const displayText = ref("")

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const name = urlParams.get('name')
  if (name) {
    displayText.value = name
  }
})
</script>

---
class: text-center
---

# Who We Are

<div class="relative h-full -mt-10">
  <!-- Section 1: Advertising Agency -->
  <div class="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2" v-click.hide="1">
    <div
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :enter="{ opacity: 1, y: 0 }"
      class="text-center text-2xl font-bold"
    >
      Advertising Agency
    </div>
  </div>
  <!-- Section 2: In-House Team (Two-Column Layout) -->
  <div class="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
    <div class="flex flex-col md:flex-row gap-8 justify-center items-center">
      <!-- Left Column: Team Label -->
      <div class="flex-1">
        <div
          v-click="1"
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :enter="{ opacity: 1, y: 0 }"
          class="text-xl font-semibold text-center"
        >
          15 In-House Team
        </div>
      </div>
      <!-- Right Column: Team Members -->
      <div class="flex-1 space-y-4">
        <div
          v-click="2"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0 }"
          class="text-base text-center"
        >
          Videographers
        </div>
        <div
          v-click="3"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0 }"
          class="text-base text-center"
        >
          Video Editors
        </div>
        <div
          v-click="4"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0 }"
          class="text-base text-center"
        >
          Developers
        </div>
        <div
          v-click="5"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0 }"
          class="text-base text-center"
        >
          Graphic Designer
        </div>
      </div>
    </div>
  </div>
</div>
---
layout: two-cols-header
class: text-center
---

<h1 class="text-center">We Offer</h1>

::left::

<div class="flex-1">
    <div
        v-click
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :enter="{ opacity: 1, x: 0 }"
        class="p-4 mx-4 bg-zinc-800 rounded shadow text-center"
    >
        Quality Lead
    </div>
</div>

::right::

<div class="flex-1">
    <div
        v-click
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :enter="{ opacity: 1, x: 0 }"
        class="p-4 mx-4 bg-zinc-800 rounded shadow text-center"
    >
        Lead Management System
    </div>
</div>

---
class: text-center
---

# Trusted By Dubai's Businesses

<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
    </div>
    <dl
        class="mg-6 grid grid-cols-1 gap-4 divide-y divide-zinc-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3 dark:divide-zinc-900"
    >
        <div class="flex flex-col px-4 py-8 text-center">
            <dt class="order-last text-lg font-medium text-zinc-500 dark:text-zinc-400">Total Clients</dt>
            <dd class="text-2xl font-extrabold text-red-600 md:text-5xl">
                <Ticker :value="50" :decimalPlaces="0" />+
            </dd>
        </div>
        <div class="flex flex-col px-4 py-8 text-center">
            <dt class="order-last text-lg font-medium text-zinc-500 dark:text-zinc-400">
        Leads Generated
            </dt>
            <dd class="text-2xl font-extrabold text-red-600 md:text-5xl">
                <Ticker :value="30" decimalPlaces="0" />K+
            </dd>
        </div>
        <div class="flex flex-col px-4 py-8 text-center">
            <dt class="order-last text-lg font-medium text-zinc-500 dark:text-zinc-400">Ad Budget Managed</dt>
            <dd class="text-2xl font-extrabold text-red-600 md:text-5xl">
                AED <Ticker :value="3" decimalPlaces="0" />M+
            </dd>
        </div>
    </dl>
</div>

<div class="relative">
    <Marquee
        class="[--duration:20s]"
    >
        <img src="/packman_Logo.jpg" class="h-10" />
        <img src="/packman_Logo.jpg" class="h-10" />
        <img src="/packman_Logo.jpg" class="h-10" />
        <img src="/packman_Logo.jpg" class="h-10" />
        <img src="/packman_Logo.jpg" class="h-10" />
        <img src="/packman_Logo.jpg" class="h-10" />
        <img src="/packman_Logo.jpg" class="h-10" />
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
    margin: 2rem 0;
    padding: 1rem;
    border-radius: 8px;
    background: rgba(255,255,255,0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.scale-step:hover {
    background: rgba(255,255,255,0.15);
    transform: scale(1.02);
}
</style>

<div class="grid mt-20 grid-cols-4 gap-4 text-center">
    <div v-click class="scale-step">
        <lucide-video class="w-12 h-12 text-blue-500" />
        <p class="text-lg font-bold text-blue-500">Content Creation</p>
    </div>
    <div v-click class="scale-step">
        <lucide-layout-dashboard class="w-12 h-12 text-green-500" />
        <p class="text-lg font-bold text-green-500">CRM Setup</p>
    </div>
    <div v-click class="scale-step">
        <mdi-bullhorn class="w-12 h-12 text-yellow-500" />
        <p class="text-lg font-bold text-yellow-500">Advertising</p>
    </div>
    <div v-click class="scale-step">
        <mdi-account-convert class="w-12 h-12 text-red-500" />
        <p class="text-lg font-bold text-red-500">Lead Management</p>
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
zoom: 0.6
---

# Our Packages

Choose the plan that fits your needs:

| Feature                         | Base    | Standard | Premium |
|---------------------------------|---------|----------|---------|
| **ADs**                         | 7       | 20       | 48      |
| **Ad Campaign(s) Set-up**         | ✅      | ✅       | ✅      |
| **Graphics**                    | 5       | 10       | 20      |
| **Videos**                      | 2       | 5        | 7       |
| **Variants**                    | 1       | 2        | 4       |
| **Total Videos (with Variants)**| 2       | 10       | 28      |
| **CRM**                         | ✅      | ✅       | ✅      |
| **WhatsApp Integration**        | ✅      | ✅       | ✅      |
| **Chatbot**                     | ❌      | ✅       | ✅      |
| **Marketing Tools**             | ❌      | ✅       | ✅      |
| **AI WhatsApp Chatbot**         | ❌      | ❌       | ✅      |
| **Price (AED)**                 | 8,000   | 15,000   | 25,000  |
| **Price (USD)**                 | 2,300   | 4,500    | 6,800   |

---

# Our Retainer Structure

| Feature                        | Base      | Standard | Premium     |
|--------------------------------|-----------|----------|-------------|
| **CRM Subscription**           | ✅        | ✅       | ✅          |
| **Single Platform Ad Management** | ✅      | ✅       | ✅          |
| **Multi Platform Ad Management**  | ❌      | ✅       | ✅          |
| **WhatsApp Marketing Management** | ❌      | ✅       | ✅          |
| **Monthly Graphics**           | 1         | 4        | 8           |
| **Monthly Videos (Types)**     | 0         | 0        | 4 in 1 Shoots |
| **Ad Management Budget**       | 0 - 5,000 | 5,000 - 15,000 | 15,000+ |
| **Price**                      | 1500 AED  | 3.5k AED | 7000 AED    |

---
layout: end
---

# Thank You For Your Time!

<div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">
    I'd Be Happy To Answer Your Questions! 
</div>

---
