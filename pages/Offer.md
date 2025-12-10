---
layout: center
---

<div class="pricing-container">
  <div
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.95 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1 }"
    class="pricing-card"
  >
    <div class="pricing-header">
      <h2 class="pricing-name">The Lead Engine</h2>
      <div class="pricing-price">
        <span class="price-amount">5,000</span>
        <span class="price-currency">AED/month</span>
      </div>
    </div>
    <div class="pricing-features">
      <div class="feature-section">
        <h3 class="feature-title text-yellow-500">Ad Management</h3>
        <ul class="feature-list">
          <li><lucide-check class="feature-icon text-yellow-500" /> Full campaign management (Meta & Google)</li>
          <li><lucide-check class="feature-icon text-yellow-500" /> Weekly optimization & A/B testing</li>
          <li><lucide-check class="feature-icon text-yellow-500" /> Performance reporting</li>
        </ul>
      </div>
      <div class="feature-section">
        <h3 class="feature-title text-green-500">CRM System</h3>
        <ul class="feature-list">
          <li><lucide-check class="feature-icon text-green-500" /> CRM setup & full access</li>
          <li><lucide-check class="feature-icon text-green-500" /> Lead capture automation</li>
          <li><lucide-check class="feature-icon text-green-500" /> Pipeline management</li>
        </ul>
      </div>
      <div class="feature-section">
        <h3 class="feature-title text-blue-500">Support</h3>
        <ul class="feature-list">
          <li><lucide-check class="feature-icon text-blue-500" /> Monthly strategy call</li>
          <li><lucide-check class="feature-icon text-blue-500" /> WhatsApp support</li>
          <li><lucide-check class="feature-icon text-blue-500" /> Training & onboarding</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
.pricing-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  max-width: 750px;
  margin: 0 auto;
}

.pricing-card {
  background-color: rgba(24, 24, 27, 0.7);
  border: 2px solid #EF4444;
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
}

.pricing-header {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.pricing-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
}

.pricing-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.25rem;
}

.price-amount {
  font-size: 3rem;
  font-weight: 800;
  color: #EF4444;
}

.price-currency {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
}

.pricing-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.feature-section {
  text-align: left;
}

.feature-title {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.375rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.375rem;
}

.feature-icon {
  width: 0.875rem;
  height: 0.875rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.pricing-requirements {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.requirement-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
}

.pricing-note {
  text-align: center;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
}

.why-commitment {
  background-color: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 0.75rem;
  padding: 1rem 1.5rem;
  text-align: center;
  max-width: 450px;
}

.why-commitment h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #EF4444;
  margin-bottom: 0.25rem;
}

.why-commitment p {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.4;
}
</style>
