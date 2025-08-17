---
zoom: 0.6
---

<div class="w-full h-full flex flex-col items-center justify-center">
  <PricingCardSystem
    title="Our Setup Packages"
    subtitle="Tailored Solutions for Your Business Growth"
    :plans="packages"
  />
</div>

<script setup>
// Import the component if needed (might be auto-imported in Slidev)
// import PricingCardSystem from '../components/PricingCardSystem.vue';

// Data for pricing packages
const packages = [
  {
    name: 'Beauty Starter',
    price: '8,000',
    currency: 'AED',
    usdPrice: '2,200',
    popular: false,
    features: [
      { text: 'Beauty-focused CRM Setup', included: true, color: 'green', bold: true },
      { text: 'Customer Segmentation', included: true, color: 'green' },
      { text: 'Email Welcome Series', included: true, color: 'green' },
      { text: 'Basic Analytics Dashboard', included: true, color: 'green' },
      { text: 'Training & Support', included: true, color: 'green' },
      { text: '30-Day Money Back Guarantee', included: true, bold: true, extraSpace: true }
    ]
  },
  {
    name: 'Beauty Growth',
    price: '18,000',
    currency: 'AED',
    usdPrice: '4,900',
    popular: true,
    features: [
      { text: 'Complete Beauty CRM System', bold: true, included: true, color: 'green' },
      { text: '15 Beauty-focused Ad Creatives', included: true, color: 'blue' },
      { text: 'Klaviyo Email Automation', included: true, color: 'green' },
      { text: 'Customer Journey Mapping', included: true, color: 'yellow' },
      { text: 'Retention System Setup', included: true, color: 'yellow' },
      { text: '+1 Month Management Included', bold: true, extraSpace: true }
    ]
  },
  {
    name: 'Beauty Enterprise',
    price: '35,000',
    currency: 'AED',
    usdPrice: '9,500',
    popular: false,
    features: [
      { text: 'Full Beauty Marketing Stack', bold: true, included: true, color: 'green' },
      { text: '25 Premium Ad Creatives', included: true, color: 'blue' },
      { text: 'Advanced Segmentation', included: true, color: 'green' },
      { text: 'Subscription Flow Setup', included: true, color: 'yellow' },
      { text: 'Loyalty Program Integration', included: true, color: 'yellow' },
      { text: 'Beauty Influencer Strategy', included: true, color: 'yellow' },
      { text: 'Conversion Optimization', included: true, color: 'yellow' },
      { text: '+2 Months Management Included', bold: true, extraSpace: true }
    ]
  }
]
</script>

---
zoom: 0.6
---

<div class="w-full h-full flex flex-col items-center justify-center">
  <PricingCardSystem
    title="Our Subscriptions"
    subtitle="Monthly Support Plans for Ongoing Success"
    :plans="retainers"
  />
</div>

<script setup>
// Import the component if needed (might be auto-imported in Slidev)
// import PricingCardSystem from '../components/PricingCardSystem.vue';

// Data for retainer packages
const retainers = [
  {
    name: 'Lite',
    price: '1,500',
    currency: 'AED/mo',
    popular: false,
    features: [
      { text: 'CRM Subscription', included: true },
      { text: 'Ad Management', included: true },
      { text: '1 Monthly Graphic', included: true },
      { text: 'WhatsApp Marketing Management', included: false },
      { text: 'Smart AI ChatBot', included: false },
      { text: 'Monthly Videos', included: false },
      { text: 'Ad Budget: 3,000 - 5,000', bold: true, extraSpace: true }
    ]
  },
  {
    name: 'Plus',
    price: '3,500',
    currency: 'AED/mo',
    popular: true,
    features: [
      { text: 'CRM Subscription', included: true },
      { text: 'Ad Management', included: true },
      { text: '4 Monthly Graphics', included: true },
      { text: 'WhatsApp Marketing Management', included: true },
      { text: 'Smart AI ChatBot', included: true },
      { text: 'Monthly Videos', included: false },
      { text: 'Ad Budget: 5,000 - 15,000', bold: true, extraSpace: true }
    ]
  },
  {
    name: 'Pro',
    price: '7,000',
    currency: 'AED/mo',
    popular: false,
    features: [
      { text: 'CRM Subscription', included: true },
      { text: 'Ad Management', included: true },
      { text: '8 Monthly Graphics', included: true },
      { text: 'WhatsApp Marketing Management', included: true },
      { text: 'Smart AI ChatBot', included: true },
      { text: '4 Videos in 1 Shoot', included: true },
      { text: 'Ad Budget: 15,000+', bold: true, extraSpace: true }
    ]
  }
]
</script>
