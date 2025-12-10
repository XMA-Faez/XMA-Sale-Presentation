---
layout: center
class: text-center
---

# The Lead Engine
<p class="text-zinc-400 text-lg !mb-10">Everything you need to fill your pipeline with qualified property leads</p>

<div class="services-grid">
  <div
    v-click="1"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
    class="service-card service-card-main"
  >
    <div class="service-content">
      <lucide-megaphone class="service-icon text-yellow-500"/>
      <h3 class="service-title">Ad Campaigns</h3>
      <p class="service-desc">Strategic campaigns built for viewings, not vanity metrics</p>
    </div>
  </div>

  <div
    v-click="2"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
    class="service-card service-card-main"
  >
    <div class="service-content">
      <lucide-layout-dashboard class="service-icon text-green-500"/>
      <h3 class="service-title">CRM System</h3>
      <p class="service-desc">Automatic lead capture, instant follow-up, visual pipeline</p>
    </div>
  </div>

  <div
    v-click="3"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
    class="service-card service-card-main"
  >
    <div class="service-content">
      <lucide-video class="service-icon text-blue-500"/>
      <h3 class="service-title">Content Creation</h3>
      <p class="service-desc">Scroll-stopping property ads optimized for Meta</p>
    </div>
  </div>
</div>

<div class="supporting-points">
  <div
    v-click="4"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0 }"
    :enter="{ filter: 'blur(0px)', opacity: 1 }"
    class="supporting-item"
  >
    <lucide-check-circle class="w-4 h-4 text-red-500" />
    <span>Quality Over Quantity</span>
  </div>
  <div
    v-click="5"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0 }"
    :enter="{ filter: 'blur(0px)', opacity: 1 }"
    class="supporting-item"
  >
    <lucide-check-circle class="w-4 h-4 text-red-500" />
    <span>UAE Market Expertise</span>
  </div>
  <div
    v-click="6"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0 }"
    :enter="{ filter: 'blur(0px)', opacity: 1 }"
    class="supporting-item"
  >
    <lucide-check-circle class="w-4 h-4 text-red-500" />
    <span>Completely Hands-Off</span>
  </div>
</div>

<style>
.gradient-heading {
  margin-bottom: 0.5rem;
  text-align: center;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.service-card {
  padding: 1.5rem 1.25rem;
  background-color: rgba(24, 24, 27, 0.5);
  border-radius: 0.75rem;
  backdrop-filter: blur(8px);
  border: 1px solid rgb(39, 39, 42);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.service-card-main {
  min-height: 160px;
}

.service-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}

.service-icon {
  width: 2.5rem;
  height: 2.5rem;
}

.service-title {
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
}

.service-desc {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.4;
}

.supporting-points {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.supporting-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
}
</style>
