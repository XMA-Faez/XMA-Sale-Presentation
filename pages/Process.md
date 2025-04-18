---
layout: center
class: text-center
---

# Understanding Advertising

<div 
  v-motion
  :initial="{ opacity: 0, y: 100 }"
  :enter="{ opacity: 1, y: 0 }"
  class="text-2xl text-zinc-400 mt-4"
>
  The Truth About What Works
</div>

---
layout: center
---

<div class="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
  <div
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500"
  >
    <div class="flex gap-4 mb-4">
      <lucide-target class="w-8 h-8 text-yellow-500" />
      <h2 class="text-2xl font-bold">The Game of Advertising</h2>
    </div>
    <p class="text-zinc-300 !mb-8">Advertising is not about creativity or looking professional—it's about <span class="text-yellow-500 font-bold">results</span>.</p>
    <div class="space-y-3 !mb-8">
      <div 
        v-click
        class="flex items-start gap-3 !my-4"
      >
        <lucide-dollar-sign class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">You pay money to get your message in front of strangers</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3 !my-4"
      >
        <lucide-users class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Some percentage of those strangers become leads</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3 !my-4"
      >
        <lucide-shopping-cart class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Some percentage of those leads become customers</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3 !my-4"
      >
        <lucide-trending-up class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">The money you make must exceed what you spent</p>
      </div>
    </div>
    <div 
      v-click
      class="mt-6 bg-yellow-950/20 p-4 rounded-lg border border-yellow-900/30"
    >
      <p class="text-white font-bold !m-0">Success = Put $1 in, get $2+ back.</p>
    </div>
  </div>
</div>

---
layout: center
---

<div class="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
  <div
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500"
  >
    <div class="flex gap-4 mb-4">
      <lucide-lightbulb class="w-8 h-8 text-yellow-500" />
      <h2 class="text-2xl font-bold">The Truth About Ad Performance</h2>
    </div>
    <div 
      v-click
      class="bg-yellow-950/20 p-4 rounded-lg border border-yellow-900/30 mb-6"
    >
      <p class="text-white font-bold !m-0">REALITY: The question isn't whether ads work—it's how well you can make them work.</p>
    </div>
    <div class="space-y-4 !mb-8">
      <div 
        v-click
        class="flex items-start gap-3"
      >
        <lucide-eye class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Reach is guaranteed (you will get views)</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3"
      >
        <lucide-zap class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Response is earned (you must get attention)</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3"
      >
        <lucide-bar-chart-2 class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Results are a numbers game (test, optimize, scale)</p>
      </div>
    </div>
    <div 
      v-click
      class="mt-6 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
    >
      <p class="text-zinc-300 !m-0 italic">You're not buying customers, you're renting attention.</p>
    </div>
  </div>
</div>

---
layout: center
---

<div class="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
  <div
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500"
  >
    <div class="flex gap-4 mb-4">
      <lucide-timer class="w-8 h-8 text-yellow-500" />
      <h2 class="text-2xl font-bold">Why Attention Is Everything</h2>
    </div>
    <div 
      v-click
      class="bg-yellow-950/20 p-4 rounded-lg border border-yellow-900/30 mb-6"
    >
      <p class="text-white font-bold !m-0">Getting attention is the foundation of all successful advertising.</p>
    </div>
    <p 
      v-click
      class="text-zinc-300"
    >
      If you don't capture attention in the first 5 seconds:
    </p>
    <div class="space-y-4 items !mb-8">
      <div 
        v-click
        class="flex items-start gap-3"
      >
        <lucide-x-circle class="w-5 h-5 text-red-500 mt-0.5" />
        <p class="text-zinc-300">Nothing else in your ad matters</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3"
      >
        <lucide-x-circle class="w-5 h-5 text-red-500 mt-0.5" />
        <p class="text-zinc-300">Your message never gets delivered</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3"
      >
        <lucide-x-circle class="w-5 h-5 text-red-500 mt-0.5" />
        <p class="text-zinc-300">Your money is wasted</p>
      </div>
    </div>
    <div 
      v-click
      class="mt-6 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
    >
      <p class="text-zinc-300 !m-0">People make an almost instant decision whether to keep watching or scroll past.</p>
    </div>
  </div>
</div>

<style>
  .items p {
    margin: 0 !important;
  }
</style>

---
layout: center
---

<div class="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
  <div
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500"
  >
    <div class="flex gap-4 mb-4">
      <lucide-layers class="w-8 h-8 text-yellow-500" />
      <h2 class="text-2xl font-bold">What Makes an Effective Ad?</h2>
    </div>
    <p class="text-zinc-300 mb-4">Every successful ad has three parts:</p>
    <div class="flex gap-4 items">
      <div 
        v-click
        class="flex items-start gap-4 bg-yellow-950/20 p-4 rounded-lg border border-yellow-900/30"
      >
        <div class="rounded-full bg-yellow-600 w-8 h-8 flex justify-center items-center flex-shrink-0">1</div>
        <div>
          <h4 class="font-bold text-white">The Hook</h4>
          <p class="text-zinc-300 !mb-0">80% of success</p>
        </div>
      </div>
      <div 
        v-click
        class="flex items-start gap-4 bg-zinc-700/30 p-4 rounded-lg border border-zinc-700"
      >
        <div class="rounded-full bg-zinc-600 w-8 h-8 flex justify-center items-center flex-shrink-0">2</div>
        <div>
          <h4 class="font-bold text-white">The Value</h4>
          <p class="text-zinc-300 !mb-0">15% of success</p>
        </div>
      </div>
      <div 
        v-click
        class="flex items-start gap-4 bg-zinc-700/30 p-4 rounded-lg border border-zinc-700"
      >
        <div class="rounded-full bg-zinc-600 w-8 h-8 flex justify-center items-center flex-shrink-0">3</div>
        <div>
          <h4 class="font-bold text-white">The Call to Action</h4>
          <p class="text-zinc-300 !mb-0">5% of success</p>
        </div>
      </div>
    </div>
    <div 
      v-click
      class="mt-6 p-4 rounded-lg bg-red-900/20 border border-red-900/30"
    >
      <p class="text-white !m-0">Most businesses spend 80% of their time on the least important parts!</p>
    </div>
  </div>
</div>

<style>
  .items p {
    margin-bottom: 0 !important;
    margin-top: 0.5rem !important;
    font-size: 0.875rem !important;
  }
</style>

---
layout: center
class: text-center
---

# Our Complete Process

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
        <lucide-gauge class="w-8 h-8" />
      </div>
      <h3>Campaign Management</h3>
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

.process-step-summary h3 {
  @apply text-xl font-bold;
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
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex gap-4 mb-4">
      <lucide-message-square class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Information Gathering</h3>
    </div>
    <p class="text-zinc-300">We deeply understand your company, target audience, and brand identity</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-video class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Production</h3>
    </div>
    <p class="text-zinc-300">Professional video shoots crafted for maximum impact</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-edit class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Editing & Production</h3>
    </div>
    <p class="text-zinc-300">Polishing and perfecting your video content</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-check-circle class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Feedback Loop</h3>
    </div>
    <p class="text-zinc-300">Iterative refinement until complete satisfaction</p>
  </div>
</div>


---
src: ./VideoType.md
---

---
src: ./CRM.md
---

---
layout: center
class: text-center
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
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-layout-dashboard class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Campaign Setup</h3>
    </div>
    <p class="text-zinc-300">Creating targeted ad campaigns on Meta platforms</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-target class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Audience Targeting</h3>
    </div>
    <p class="text-zinc-300">Defining and reaching your ideal customer segments</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-bar-chart class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Performance Tracking</h3>
    </div>
    <p class="text-zinc-300">Monitoring and optimizing campaign results</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
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
    <lucide-gauge class="w-10 h-10" />
  </div>
  <h1>Campaign Management</h1>
  <p class="header-description">Optimizing your advertising performance</p>
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
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-message-square class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">WhatsApp Marketing</h3>
    </div>
    <p class="text-zinc-300">Automated messaging campaigns to nurture leads and drive conversions</p>
  </div>
  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-activity class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">Campaign Monitoring</h3>
    </div>
    <p class="text-zinc-300">Real-time tracking and reporting on ad performance across platforms</p>
  </div>
  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-database class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">CRM Subscription</h3>
    </div>
    <p class="text-zinc-300">Ongoing access to powerful CRM tools to organize and utilize your leads</p>
  </div>
  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-refresh-cw class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">Content Refresh</h3>
    </div>
    <p class="text-zinc-300">Regular updates to your ad creative to prevent audience fatigue</p>
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
        <lucide-gauge class="w-10 h-10" />
      </div>
      <h3>Campaign Management</h3>
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
