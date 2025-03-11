---
layout: center
class: text-center
---

# Our Process

<div class="process-summary">
  <div class="process-flow">
    <div v-click="1" class="process-step-summary">
      <div class="step-icon content-icon">
        <lucide-video class="w-8 h-8" />
      </div>
      <h3>Content Creation</h3>
    </div>
    <div v-click="2" class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div v-click="2" class="process-step-summary">
      <div class="step-icon crm-icon">
        <lucide-layout-dashboard class="w-8 h-8" />
      </div>
      <h3>CRM Setup</h3>
    </div>
    <div v-click="3" class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div v-click="3" class="process-step-summary">
      <div class="step-icon ads-icon">
        <lucide-megaphone class="w-8 h-8" />
      </div>
      <h3>Ads Campaign</h3>
    </div>
    <div v-click="4" class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div v-click="4" class="process-step-summary">
      <div class="step-icon leads-icon">
        <lucide-users class="w-8 h-8" />
      </div>
      <h3>Leads Management</h3>
    </div>
  </div>
</div>

<style>
.process-summary {
  @apply flex flex-col items-center gap-12 max-w-4xl mx-auto mt-8;
}

.process-flow {
  @apply flex items-center justify-between gap-4;
}

.process-step-summary {
  @apply flex flex-col items-center gap-2;
}

.step-icon {
  @apply w-16 h-16 rounded-full flex items-center justify-center border-2;
}

.content-icon {
  @apply bg-blue-950/40 border-blue-500 text-blue-500;
}

.crm-icon {
  @apply bg-green-950/40 border-green-500 text-green-500;
}

.ads-icon {
  @apply bg-yellow-950/40 border-yellow-500 text-yellow-500;
}

.leads-icon {
  @apply bg-red-950/40 border-red-500 text-red-500;
}

.process-step-summary h3 {
  @apply font-bold;
}

.process-step-summary:nth-child(1) h3 {
  @apply text-blue-500;
}

.process-step-summary:nth-child(3) h3 {
  @apply text-green-500;
}

.process-step-summary:nth-child(5) h3 {
  @apply text-yellow-500;
}

.process-step-summary:nth-child(7) h3 {
  @apply text-red-500;
}
</style>

---
layout: center
class: text-center
---

<div class="process-header content-header">
  <div class="header-icon">
    <lucide-video class="w-10 h-10" />
  </div>
  <h1>Content Creation</h1>
  <p class="header-description">Crafting compelling visuals that convert</p>
</div>

<style>
.process-header {
  @apply flex flex-col items-center mb-8;
}

.header-icon {
  @apply w-20 h-20 rounded-full flex items-center justify-center border-2 mb-4;
}

.content-header .header-icon {
  @apply bg-blue-950/40 border-blue-500 text-blue-500;
}

.content-header h1 {
  @apply text-3xl font-bold text-blue-500 mb-2;
}

.header-description {
  @apply text-lg text-zinc-400;
}
</style>

---
layout: center
---

<div class="grid grid-cols-2 gap-8">
  <div
    class="bg-zinc-500/10 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex gap-4 mb-4">
      <lucide-message-square class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Information Gathering</h3>
    </div>
    <p class="text-zinc-300">We deeply understand your company, target audience, and brand identity</p>
  </div>

  <div
    v-click
    class="bg-zinc-500/10 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-video class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Production</h3>
    </div>
    <p class="text-zinc-300">Professional video shoots crafted for maximum impact</p>
  </div>

  <div
    v-click
    class="bg-zinc-500/10 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-edit class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Editing & Production</h3>
    </div>
    <p class="text-zinc-300">Polishing and perfecting your video content</p>
  </div>

  <div
    v-click
    class="bg-zinc-500/10 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-check-circle class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Feedback Loop</h3>
    </div>
    <p class="text-zinc-300">Iterative refinement until complete satisfaction</p>
  </div>
</div>


---
src: ./CRM.md
---

---
layout: center
class: text-center
---

---

<div class="process-header ads-header">
  <div class="header-icon">
    <lucide-megaphone class="w-10 h-10" />
  </div>
  <h1>Advertising</h1>
  <p class="header-description">Strategic campaigns that drive results</p>
</div>

<style>
.process-header {
  @apply flex flex-col items-center mb-8;
}

.header-icon {
  @apply w-20 h-20 rounded-full flex items-center justify-center border-2 mb-4;
}

.ads-header .header-icon {
  @apply bg-yellow-950/40 border-yellow-500 text-yellow-500;
}

.ads-header h1 {
  @apply text-3xl font-bold text-yellow-500 mb-2;
}
</style>

---
layout: center
---

<div class="grid grid-cols-2 gap-8">
  <div
    class="bg-zinc-500/10 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-layout-dashboard class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Campaign Setup</h3>
    </div>
    <p class="text-zinc-300">Creating targeted ad campaigns on Meta platforms</p>
  </div>

  <div
    v-click
    class="bg-zinc-500/10 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-target class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Audience Targeting</h3>
    </div>
    <p class="text-zinc-300">Defining and reaching your ideal customer segments</p>
  </div>

  <div
    v-click
    class="bg-zinc-500/10 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-bar-chart class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Performance Tracking</h3>
    </div>
    <p class="text-zinc-300">Monitoring and optimizing campaign results</p>
  </div>

  <div
    v-click
    class="bg-zinc-500/10 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-refresh-cw class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Continuous Optimization</h3>
    </div>
    <p class="text-zinc-300">Regular adjustments for maximum ROI</p>
  </div>
</div>


---
layout: center
class: text-center
---

<div class="process-header leads-header">
  <div class="header-icon">
    <lucide-users class="w-10 h-10" />
  </div>
  <h1>Lead Management</h1>
  <p class="header-description">Converting prospects into loyal customers</p>
</div>

<style>
.process-header {
  @apply flex flex-col items-center mb-8;
}

.header-icon {
  @apply w-20 h-20 rounded-full flex items-center justify-center border-2 mb-4;
}
.leads-header .header-icon {
  @apply bg-red-950/40 border-red-500 text-red-500;
}

.leads-header h1 {
  @apply text-3xl font-bold text-red-500 mb-2;
}
</style>

---
layout: center
---

<div class="grid grid-cols-2 gap-8">
  <div
    class="bg-zinc-500/10 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-user-plus class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">Lead Capture</h3>
    </div>
    <p class="text-zinc-300">Automated collection and organization of leads</p>
  </div>

  <div
    v-click
    class="bg-zinc-500/10 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-filter class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">Lead Qualification</h3>
    </div>
    <p class="text-zinc-300">Scoring and prioritizing potential customers</p>
  </div>

  <div
    v-click
    class="bg-zinc-500/10 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-message-circle class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">Communication</h3>
    </div>
    <p class="text-zinc-300">Multi-channel engagement with prospects</p>
  </div>

  <div
    v-click
    class="bg-zinc-500/10 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-check-circle-2 class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">Conversion</h3>
    </div>
    <p class="text-zinc-300">Turning qualified leads into customers</p>
  </div>
</div>


---
layout: center
class: text-center
---

# Complete Digital Marketing Solution

<div class="process-summary">
  <div class="process-flow">
    <div class="process-step-summary">
      <div class="step-icon content-icon">
        <lucide-video class="w-8 h-8" />
      </div>
      <h3>Content Creation</h3>
    </div>
    <div class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div class="process-step-summary">
      <div class="step-icon crm-icon">
        <lucide-layout-dashboard class="w-8 h-8" />
      </div>
      <h3>CRM Setup</h3>
    </div>
    <div class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div class="process-step-summary">
      <div class="step-icon ads-icon">
        <lucide-megaphone class="w-8 h-8" />
      </div>
      <h3>Ads Campaign</h3>
    </div>
    <div class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div class="process-step-summary">
      <div class="step-icon leads-icon">
        <lucide-users class="w-8 h-8" />
      </div>
      <h3>Leads Management</h3>
    </div>
  </div>
</div>

<style>
.process-summary {
  @apply flex flex-col items-center gap-12 max-w-4xl mx-auto mt-8;
}

.process-flow {
  @apply flex items-center justify-between gap-4;
}

.process-step-summary {
  @apply flex flex-col items-center gap-2;
}

.step-icon {
  @apply w-16 h-16 rounded-full flex items-center justify-center border-2;
}

.content-icon {
  @apply bg-blue-950/40 border-blue-500 text-blue-500;
}

.crm-icon {
  @apply bg-green-950/40 border-green-500 text-green-500;
}

.ads-icon {
  @apply bg-yellow-950/40 border-yellow-500 text-yellow-500;
}

.leads-icon {
  @apply bg-red-950/40 border-red-500 text-red-500;
}

.process-step-summary h3 {
  @apply font-bold text-base;
}

.process-step-summary:nth-child(1) h3 {
  @apply text-blue-500;
}

.process-step-summary:nth-child(3) h3 {
  @apply text-green-500;
}

.process-step-summary:nth-child(5) h3 {
  @apply text-yellow-500;
}

.process-step-summary:nth-child(7) h3 {
  @apply text-red-500;
}

.final-message {
  @apply text-center bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-red-900/20 p-8 rounded-xl border border-zinc-700/50;
}

.final-message h2 {
  @apply text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent mb-2;
}

.final-message p {
  @apply text-zinc-300;
}
</style>
