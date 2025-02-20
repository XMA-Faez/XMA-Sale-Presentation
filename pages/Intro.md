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
