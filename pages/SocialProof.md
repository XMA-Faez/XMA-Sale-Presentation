---
class: text-center
---

# Trusted By Leading Businesses
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
            <dd class="text-2xl font-extrabold text-red-600 md:text-4xl mb-4">
                <Ticker :value="50" :decimalPlaces="0" />+
            </dd>
            <dt class="text-base font-medium text-zinc-400">Total Clients</dt>
        </div>
        <div 
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1, transition: { delay: 400 } }"
          class="flex flex-col px-4 py-8 text-center bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-red-600/50"
        >
            <dd class="text-2xl font-extrabold text-red-600 md:text-4xl mb-4">
                <Ticker :value="30" decimalPlaces="0" />K+
            </dd>
            <dt class="text-base font-medium text-zinc-400">Leads Generated</dt>
        </div>
        <div 
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1, transition: { delay: 600 } }"
          class="flex flex-col px-4 py-8 text-center bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-red-600/50"
        >
            <dd class="text-2xl font-extrabold text-red-600 md:text-4xl mb-4">
                AED <Ticker :value="3" decimalPlaces="0" />M+
            </dd>
            <dt class="text-base font-medium text-zinc-400">Ad Budget Managed</dt>
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
        <img src="/packman_Logo.png" class="h-12 duration-300 bg-white rounded-xl" />
        <img src="/Casapons.png" class="h-12 rounded-xl duration-300 bg-white rounded-xl" />
        <img src="/DXtreme.svg" class="h-12 rounded-xl duration-300 bg-white rounded-xl p-2" />
        <img src="/4Matic.jpg" class="h-12 rounded-xl duration-300 rounded-xl" />
        <img src="/wyz-logo.png" class="h-12 rounded-xl duration-300 bg-white rounded-xl p-2" />
        <img src="/Tick.webp" class="h-12 bg-white rounded-xl duration-300 p-2" />
        <img src="/ASUS.png" class="h-12 w-full rounded-xl bg-white rounded-xl duration-300" />
        <img src="/TFG.png" class="h-12 w-full rounded-xl bg-white rounded-xl duration-300" />
    </Marquee>
    <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0f0f0f] dark:from-background" />
    <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0f0f0f] dark:from-background" />
</div>

