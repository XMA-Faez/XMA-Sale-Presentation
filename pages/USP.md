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
