<template>
  <div class="flex items-start gap-3 my-3 bullet-wrapper" :class="{ 'animate-slideIn': animate }">
    <div class="flex-shrink-0 mt-0.5">
      <div v-if="type === 'check'" class="rounded-full bg-emerald-100 p-1.5 dark:bg-emerald-800/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
      <div v-else-if="type === 'idea'" class="rounded-full bg-amber-100 p-1.5 dark:bg-amber-800/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
      </div>
      <div v-else-if="type === 'target'" class="rounded-full bg-blue-100 p-1.5 dark:bg-blue-800/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clip-rule="evenodd" />
        </svg>
      </div>
      <div v-else-if="type === 'alert'" class="rounded-full bg-red-100 p-1.5 dark:bg-red-800/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
      <div v-else-if="type === 'star'" class="rounded-full bg-purple-100 p-1.5 dark:bg-purple-800/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      <div v-else class="rounded-full bg-gray-100 p-1.5 dark:bg-gray-800/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    <div class="text-left">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Use withDefaults for a single defineProps call
const props = withDefaults(defineProps<{
  type?: 'default' | 'check' | 'idea' | 'target' | 'alert' | 'star';
  animate?: boolean;
}>(), {
  type: 'default',
  animate: true
});
</script>

<style scoped>
.bullet-wrapper {
  opacity: 0;
  transform: translateY(20px);
}

.animate-slideIn {
  animation: slideIn 0.5s ease forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bullet-wrapper.animate-slideIn:nth-child(1) { animation-delay: 0.1s; }
.bullet-wrapper.animate-slideIn:nth-child(2) { animation-delay: 0.2s; }
.bullet-wrapper.animate-slideIn:nth-child(3) { animation-delay: 0.3s; }
.bullet-wrapper.animate-slideIn:nth-child(4) { animation-delay: 0.4s; }
.bullet-wrapper.animate-slideIn:nth-child(5) { animation-delay: 0.5s; }
.bullet-wrapper.animate-slideIn:nth-child(6) { animation-delay: 0.6s; }
</style>
