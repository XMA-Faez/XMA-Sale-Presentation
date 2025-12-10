---
layout: center
class: text-center
---

# You didn't become an agent to chase cold leads all day.

<div class="problem-grid">
  <div
    v-click="1"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
    class="problem-card"
  >
    <div class="problem-icon">
      <lucide-phone-off class="icon-red" />
    </div>
    <h4 class="problem-title">Leads Don't Answer</h4>
    <p class="problem-desc">You call 50 leads, 3 pick up</p>
  </div>

  <div
    v-click="2"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
    class="problem-card"
  >
    <div class="problem-icon">
      <lucide-brain class="icon-red" />
    </div>
    <h4 class="problem-title">No System</h4>
    <p class="problem-desc">Everything lives in your head or scattered notes</p>
  </div>

  <div
    v-click="3"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
    class="problem-card"
  >
    <div class="problem-icon">
      <lucide-banknote class="icon-red" />
    </div>
    <h4 class="problem-title">Wasted Ad Spend</h4>
    <p class="problem-desc">Boosting posts and hoping for the best</p>
  </div>

  <div
    v-click="4"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
    class="problem-card"
  >
    <div class="problem-icon">
      <lucide-eye-off class="icon-red" />
    </div>
    <h4 class="problem-title">Tire-Kickers</h4>
    <p class="problem-desc">Browsers, not buyers</p>
  </div>
</div>

<div
  v-click="5"
  v-motion
  :initial="{ filter: 'blur(12px)', opacity: 0 }"
  :enter="{ filter: 'blur(0px)', opacity: 1 }"
  class="transition-message"
>
  What if selling was the <span class="text-red-500 font-semibold">only</span> thing you did?
</div>

<style>
.problem-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 2rem auto;
}

.problem-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  background-color: rgba(127, 29, 29, 0.1);
  border-radius: 0.75rem;
  border: 1px solid rgba(127, 29, 29, 0.3);
  text-align: center;
  transition: all 0.3s ease;
}

.problem-card:hover {
  border-color: rgba(239, 68, 68, 0.5);
}

.problem-icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(127, 29, 29, 0.2);
}

.icon-red {
  width: 1.5rem;
  height: 1.5rem;
  color: #EF4444;
}

.problem-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.problem-desc {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.4;
}

.transition-message {
  margin-top: 2.5rem;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}
</style>
