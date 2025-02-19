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
layout: center
---

# About Us

<v-clicks>
  <IconBullet type="star">
    <strong>Full-service advertising agency</strong> specializing in video-driven lead generation
  </IconBullet>
  
  <IconBullet type="check">
    <strong>15-person in-house team</strong> - everything happens under one roof
  </IconBullet>
  
  <IconBullet type="target">
    <strong>Integrated approach:</strong> creative, ads, and lead management in one place
  </IconBullet>
  
  <IconBullet type="star">
    <strong>Full satisfaction guarantee</strong>
  </IconBullet>
</v-clicks>

---
layout: center
class: "bg-gradient-to-t from-rose-950 to-black text-white"
---

# Common Challenges for Businesses

<div class="grid grid-cols-3 gap-6 mt-8">
  <v-click>
    <div class="flex flex-col items-center p-4 bg-white/20 rounded-lg backdrop-blur">
      <div class="text-3xl mb-2">😓</div>
      <div class="text-center font-medium">Inconsistent lead generation</div>
    </div>
  </v-click>
  
  <v-click>
    <div class="flex flex-col items-center p-4 bg-white/20 rounded-lg backdrop-blur">
      <div class="text-3xl mb-2">👎</div>
      <div class="text-center font-medium">Poor lead quality</div>
    </div>
  </v-click>
  
  <v-click>
    <div class="flex flex-col items-center p-4 bg-white/20 rounded-lg backdrop-blur">
      <div class="text-3xl mb-2">🔄</div>
      <div class="text-center font-medium">Multiple vendors</div>
    </div>
  </v-click>
  
  <v-click>
    <div class="flex flex-col items-center p-4 bg-white/20 rounded-lg backdrop-blur">
      <div class="text-3xl mb-2">🧩</div>
      <div class="text-center font-medium">Lack of cohesive strategy</div>
    </div>
  </v-click>
  
  <v-click>
    <div class="flex flex-col items-center p-4 bg-white/20 rounded-lg backdrop-blur">
      <div class="text-3xl mb-2">⏰</div>
      <div class="text-center font-medium">Time-consuming management</div>
    </div>
  </v-click>
  
  <v-click>
    <div class="flex flex-col items-center p-4 bg-white/20 rounded-lg backdrop-blur">
      <div class="text-3xl mb-2">💰</div>
      <div class="text-center font-medium">High acquisition costs</div>
    </div>
  </v-click>
</div>

---
layout: center
---

# Our Integrated Solution

<div class="flex flex-col space-y-4">
  <v-clicks>
    <div class="flex items-center space-x-3">
      <div class="bg-green-500 text-white rounded-full p-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>ONE team handles everything</div>
    </div>
    <div class="flex items-center space-x-3">
      <div class="bg-green-500 text-white rounded-full p-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>Streamlined communication</div>
    </div>
    <div class="flex items-center space-x-3">
      <div class="bg-green-500 text-white rounded-full p-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>Consistent strategy</div>
    </div>
    <div class="flex items-center space-x-3">
      <div class="bg-green-500 text-white rounded-full p-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>Faster implementation</div>
    </div>
    <div class="flex items-center space-x-3">
      <div class="bg-green-500 text-white rounded-full p-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>Better results</div>
    </div>
  </v-clicks>
</div>

---

<div class="flex items-center justify-center h-full">
  <div class="w-3/4 p-5 m-auto">
    <div class="text-center font-bold border-2 border-red-500 p-5 rounded-lg transform transition-all duration-500 hover:scale-110">
        <div>RESULT</div>
        More leads, better conversion, less hassle
    </div>
  </div>
</div>

---
layout: image
image: <https://source.unsplash.com/collection/94734566/1920x1080>
class: "bg-black/40 bg-blend-multiply"
---

# Our Process

<div class="flex flex-wrap justify-center gap-4 mt-12">
  <v-click>
    <div class="bg-red-950/20 p-5 rounded-lg shadow-lg w-64">
      <div class="text-4xl text-center text-yellow-500 mb-2">1</div>
      <div class="font-bold text-center mb-1">Strategy Development</div>
      <div class="text-sm text-center">Tailored to your business goals</div>
    </div>
  </v-click>
  
  <v-click>
    <div class="bg-red-950/20 p-5 rounded-lg shadow-lg w-64">
      <div class="text-4xl text-center text-yellow-500 mb-2">2</div>
      <div class="font-bold text-center mb-1">Creative Production</div>
      <div class="text-sm text-center">High-quality videos and graphics</div>
    </div>
  </v-click>
  
  <v-click>
    <div class="bg-red-950/20 p-5 rounded-lg shadow-lg w-64">
      <div class="text-4xl text-center text-yellow-500 mb-2">3</div>
      <div class="font-bold text-center mb-1">Campaign Launch</div>
      <div class="text-sm text-center">Multi-platform ad management</div>
    </div>
  </v-click>
  
  <v-click>
    <div class="bg-red-950/20 p-5 rounded-lg shadow-lg w-64">
      <div class="text-4xl text-center text-yellow-500 mb-2">4</div>
      <div class="font-bold text-center mb-1">Lead Capture & Nurturing</div>
      <div class="text-sm text-center">CRM & WhatsApp integration</div>
    </div>
  </v-click>
  
  <v-click>
    <div class="bg-red-950/20 p-5 rounded-lg shadow-lg w-64">
      <div class="text-4xl text-center text-yellow-500 mb-2">5</div>
      <div class="font-bold text-center mb-1">Optimization</div>
      <div class="text-sm text-center">Continuous performance improvement</div>
    </div>
  </v-click>
</div>

---
layout: iframe-right
---

# Creative Development

<v-clicks>
  <IconBullet type="idea">
    <strong>Professional in-house video production</strong>
  </IconBullet>
  
  <IconBullet type="idea">
    <strong>Data-driven creative strategy</strong>
  </IconBullet>
  
  <IconBullet type="idea">
    <strong>Multiple variants for A/B testing</strong>
  </IconBullet>
  
  <IconBullet type="idea">
    <strong>Consistent branding across platforms</strong>
  </IconBullet>
</v-clicks>

---
layout: section
zoom: 0.8
---

# Campaign Management

<div class="grid grid-cols-2 gap-8 mt-12">
  <v-click>
    <div class="bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-6 rounded-xl shadow-xl">
      <div class="text-4xl mb-2">📊</div>
      <h3 class="text-xl font-bold mb-2">Advanced Targeting</h3>
      <p>Precision demographic and behavioral targeting to reach the right audience</p>
    </div>
  </v-click>
  
  <v-click>
    <div class="bg-gradient-to-br from-blue-500 to-sky-600 text-white p-6 rounded-xl shadow-xl">
      <div class="text-4xl mb-2">🌐</div>
      <h3 class="text-xl font-bold mb-2">Multi-platform Strategy</h3>
      <p>Coordinated campaigns across all relevant platforms</p>
    </div>
  </v-click>
  
  <v-click>
    <div class="bg-gradient-to-br from-sky-500 to-cyan-600 text-white p-6 rounded-xl shadow-xl">
      <div class="text-4xl mb-2">📈</div>
      <h3 class="text-xl font-bold mb-2">Performance Reviews</h3>
      <p>Regular analysis and reporting on campaign metrics</p>
    </div>
  </v-click>
  
  <v-click>
    <div class="bg-gradient-to-br from-cyan-500 to-indigo-600 text-white p-6 rounded-xl shadow-xl">
      <div class="text-4xl mb-2">🔄</div>
      <h3 class="text-xl font-bold mb-2">Responsive Adjustments</h3>
      <p>Data-driven campaign optimizations for maximum ROI</p>
    </div>
  </v-click>
</div>

---
layout: table-contents
---

# Lead Nurturing System

<div class="mt-8">
  <v-click>
    <div class="flex items-start mb-6">
      <div class="bg-blue-100 p-3 rounded-full mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-2">Automated lead capture</h3>
        <p class="text-gray-300">Instantly collect and organize leads from all campaign sources</p>
      </div>
    </div>
  </v-click>
  
  <v-click>
    <div class="flex items-start mb-6">
      <div class="bg-green-100 p-3 rounded-full mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-2">Seamless CRM integration</h3>
        <p class="text-gray-300">Works with your existing systems or our proprietary platform</p>
      </div>
    </div>
  </v-click>
  
  <v-click>
    <div class="flex items-start mb-6">
      <div class="bg-yellow-100 p-3 rounded-full mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-2">WhatsApp marketing automation</h3>
        <p class="text-gray-300">Engage prospects where they're most responsive</p>
      </div>
    </div>
  </v-click>
  
  <v-click>
    <div class="flex items-start">
      <div class="bg-purple-100 p-3 rounded-full mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-2">AI chatbot engagement (Premium)</h3>
        <p class="text-gray-300">24/7 intelligent lead qualification and nurturing</p>
      </div>
    </div>
  </v-click>
</div>

---
layout: two-cols
---

# Case Study: Flower Guys

<div class="p-6 rounded-lg shadow-md my-6">
  <v-click>
    <h3 class="text-lg font-semibold mb-4 text-red-600">The Challenge</h3>
    <p class="mb-4">[Specific issue similar to prospect's situation]</p>
  </v-click>
  
  <v-click>
    <h3 class="text-lg font-semibold mb-4 text-blue-600">Our Solution</h3>
    <p>[Package level] implementation with focus on [key element]</p>
  </v-click>
</div>

::right::

<div class="pl-6 flex flex-col justify-center h-full">
  <h3 class="text-xl font-bold mb-6 text-center">Results Achieved</h3>
  
  <div class="space-y-4">
    <v-click>
      <div class="bg-zinc-900 p-4 rounded-lg shadow-md border-l-4 border-green-500">
        <div class="text-2xl font-bold text-green-600">[X]%</div>
        <div>increase in qualified leads</div>
      </div>
    </v-click>
    <v-click>
      <div class="bg-zinc-900 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
        <div class="text-2xl font-bold text-blue-600">[Y]%</div>
        <div>improvement in conversion rate</div>
      </div>
    </v-click>
    <v-click>
      <div class="bg-zinc-900 p-4 rounded-lg shadow-md border-l-4 border-purple-500">
        <div class="text-2xl font-bold text-purple-600">[Z]%</div>
        <div>reduction in cost per acquisition</div>
      </div>
    </v-click>
  </div>
</div>

<!--
Additional slide examples with different layouts
-->

---
layout: quote
---

# What Our Clients Say

> "Working with XMA Agency transformed our lead generation process completely. Their integrated approach eliminated all the headaches of managing multiple vendors and delivered results beyond our expectations."

<div class="text-right mt-4">
  <div class="font-bold">Jane Smith</div>
  <div class="text-sm">CEO, Company Name</div>
</div>


---
layout: center
class: "text-center"
---

# Ready to Transform Your Lead Generation?

<div class="mt-8 flex flex-col items-center">
  <div class="text-xl mb-6">Schedule your free consultation today</div>
  <div class="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-bold transform transition-all duration-300 hover:scale-105">
    Get Started
  </div>
</div>

<div class="mt-12 grid grid-cols-3 gap-8">
  <div class="flex flex-col items-center">
    <div class="text-4xl mb-2">📱</div>
    <div>(555) 123-4567</div>
  </div>
  
  <div class="flex flex-col items-center">
    <div class="text-4xl mb-2">📧</div>
    <div>info@xma-agency.com</div>
  </div>
  
  <div class="flex flex-col items-center">
    <div class="text-4xl mb-2">🌐</div>
    <div>www.xma-agency.com</div>
  </div>
</div>
