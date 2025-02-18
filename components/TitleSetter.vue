<template>
  <span id="client-name">{{ displayText }}</span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  defaultText: {
    type: String,
    default: "to Our Presentation",
  },
})

const displayText = ref(props.defaultText)

onMounted(() => {
  // Get the URL parameters
  const urlParams = new URLSearchParams(window.location.search)
  const name = urlParams.get('name')
  
  // Update the displayText with the name if it exists
  if (name) {
    displayText.value = name
  }
})
</script>
