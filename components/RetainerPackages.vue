<!-- RetainerPackages.vue -->
<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <div class="text-center">
      <h1 class="">Retainer Structure</h1>
      <div 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-2xl text-zinc-400 mt-4 mb-12"
      >
        Monthly Support Plans for Ongoing Success
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 w-full">
      <!-- Lite Package -->
      <div class="flex mt-8 flex-col h-(calc(100%-2rem)) rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:shadow-xl">
        <div class="p-6 flex flex-col h-full">
          <h3 class="text-2xl font-bold text-white mb-2">Lite</h3>
          <div class="mb-6">
            <div class="flex items-end">
              <span class="text-4xl font-bold text-white">1,500</span>
              <span class="text-zinc-400 ml-2 mb-1">AED/mo</span>
            </div>
          </div>
          <div class="flex-grow">
            <ul class="space-y-3">
              <li class="flex items-center !ml-0">
                <div class="text-red-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>CRM Subscription</span>
              </li>
              <li class="flex items-center !ml-0">
                <div class="text-red-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>Single Platform Ad Management</span>
              </li>
              <li class="flex items-center !ml-0">
                <div class="text-red-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>1 Monthly Graphic</span>
              </li>
              <li class="flex items-center !ml-0">
                <div class="text-zinc-600 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-zinc-500">WhatsApp Marketing Management</span>
              </li>
              <li class="flex items-center !ml-0">
                <div class="text-zinc-600 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-zinc-500">Monthly Videos</span>
              </li>
              <li class="flex items-center !ml-0 !mt-8">
                <span><b>Ad Budget: 3,000 - 5,000</b></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Plus Package -->
      <div class="flex flex-col h-full rounded-xl border border-red-500 shadow-lg bg-zinc-900/50 backdrop-blur-sm transition-all hover:shadow-xl">
        <div class="bg-red-600 text-white text-center py-1 px-4 text-sm font-medium rounded-t-xl">
          Most Popular
        </div>
        <div class="p-6 flex flex-col h-full">
          <h3 class="text-2xl font-bold text-red-500 mb-2">Plus</h3>
          <div class="mb-6">
            <div class="flex items-end">
              <span class="text-4xl font-bold text-white">3,500</span>
              <span class="text-zinc-400 ml-2 mb-1">AED/mo</span>
            </div>
          </div>
          <div class="flex-grow">
            <ul class="space-y-3">
              <li class="flex items-center !ml-0">
                <div class="text-red-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>CRM Subscription</span>
              </li>
              <li class="flex items-center !ml-0">
                <div class="text-red-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>Single Platform Ad Management</span>
              </li>
              <li class="flex items-center !ml-0">
                <div class="text-red-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>4 Monthly Graphics</span>
              </li>
              <li class="flex items-center !ml-0">
                <div class="text-red-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>WhatsApp Marketing Management</span>
              </li>
              <li class="flex items-center !ml-0">
                <div class="text-zinc-600 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-zinc-500">Monthly Videos</span>
              </li>
              <li class="flex items-center !ml-0 !mt-8">
                <span><b>Ad Budget: 5,000 - 15,000</b></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Pro Package -->
      <div class="flex mt-8 flex-col h-(calc(100%-2rem)) rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:shadow-xl">
        <div class="p-6 flex flex-col h-full">
          <h3 class="text-2xl font-bold text-white mb-2">Pro</h3>
          <div class="mb-6">
            <div class="flex items-end">
              <span class="text-4xl font-bold text-white">7,000</span>
              <span class="text-zinc-400 ml-2 mb-1">AED/mo</span>
            </div>
          </div>
          <div class="flex-grow">
            <ul class="space-y-3">
              <li class="flex items-center !ml-0">
                <div class="text-red-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>CRM Subscription</span>
              </li>
              <li class="flex items-center !ml-0">
                <div class="text-red-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>Single Platform Ad Management</span>
              </li>
              <li class="flex items-center !ml-0">
                <div class="text-red-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>8 Monthly Graphics</span>
              </li>
              <li class="flex items-center !ml-0">
                <div class="text-red-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>WhatsApp Marketing Management</span>
              </li>
              <li class="flex items-center !ml-0">
                <div class="text-red-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>4 Videos in 1 Shoot</span>
              </li>
              <li class="flex items-center !ml-0 !mt-8">
                <span><b>Ad Budget: 15,000+</b></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RetainerPackages'
}
</script>
