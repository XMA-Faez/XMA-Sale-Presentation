---
zoom: 0.6
---

<div class="w-full h-full flex flex-col items-center justify-center">
  <PricingCardSystem
    title="Our Packages"
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
    name: 'Starter',
    price: '10,000',
    currency: 'AED',
    usdPrice: '2,700',
    popular: false,
    features: [
      { text: '20 Total Ads', bold: true, included: true },
      { text: '10 Static Ads', included: true },
      { text: '10 Video Ads', included: true },
    ]
  },
  {
    name: 'Growth',
    price: '15,000',
    currency: 'AED',
    usdPrice: '4,500',
    popular: true,
    features: [
      { text: '20 Total Ads', bold: true, included: true },
      { text: '10 Static Ads', included: true },
      { text: '10 Video Ads', included: true },
      { text: 'Ad Campaign(s) Set-up', included: true },
      { text: 'CRM System', included: true },
      { text: 'WhatsApp Integration', included: true },
      { text: '+1 Month Free Ad Management', bold: true, extraSpace: true }
    ]
  },
  {
    name: 'Scale',
    price: '25,000',
    currency: 'AED',
    usdPrice: '6,800',
    popular: false,
    features: [
      { text: '20 Total Ads', bold: true, included: true },
      { text: '10 Static Ads', included: true },
      { text: '10 Video Ads', included: true },
      { text: 'Ad Campaign(s) Set-up', included: true },
      { text: 'CRM System', included: true },
      { text: 'WhatsApp Integration', included: true },
      { text: 'Sales Funnel Audit', included: true },
      { text: 'Sales Automation', included: true },
      { text: '+1 Month Free Ad Management', bold: true, extraSpace: true }
    ]
  }
]
</script>

---
zoom: 0.6
---

<div class="w-full h-full flex flex-col items-center justify-center">
  <PricingCardSystem
    title="Retainer Structure"
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
