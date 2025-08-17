# XMA Beauty Presentation Implementation Guide

## Design System Analysis

Based on your existing codebase, here's the comprehensive implementation guide for creating new beauty-focused slides.

## 1. Design Patterns & Standards

### Color Scheme
- **Primary Background**: Dark theme (`#0f0f0f`, zinc-900 variations)
- **Accent Color**: Red (`#EF4444`, red-500/600)
- **Text Colors**:
  - Primary: White
  - Secondary: zinc-400
  - Muted: zinc-500
- **Card Backgrounds**: `bg-zinc-900/50` with `border-zinc-800`

### Typography
- **Headings**: Bold, large sizes (text-2xl to text-5xl)
- **Body**: Standard sizing with proper contrast
- **Fonts**: Mona Sans (local), JetBrains Mono (mono)

## 2. Component Usage Standards

### HyperText Component
```vue
<HyperText :text="'Your Text Here'" duration="2000" />
```
- Use for dynamic, attention-grabbing titles
- Duration: 2000ms standard
- Automatically handles letter-by-letter animation

### PricingCardSystem Component
```vue
<PricingCardSystem
  title="Package Title"
  subtitle="Package Description"
  :plans="packageArray"
/>
```
- Structure for plans array:
```javascript
{
  name: 'Package Name',
  price: '25,000',
  currency: 'AED',
  usdPrice: '6,800', // optional
  popular: true/false,
  features: [
    { text: 'Feature name', included: true, color: 'blue', bold: false },
    { text: 'Special feature', bold: true, extraSpace: true }
  ]
}
```

### Ticker Component
```vue
<Ticker :value="50" :decimalPlaces="0" />
```
- Use for animated number counters
- Set decimalPlaces to 0 for whole numbers

## 3. Layout Patterns

### Standard Slide Layout Structure
```vue
---
layout: center
class: text-center
---

# Main Title

<div class="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
  <!-- Content cards -->
</div>
```

### Card Component Pattern
```vue
<div class="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-red-600/50 transition-all">
  <div class="flex items-center gap-4 mb-4">
    <lucide-icon class="w-6 h-6 text-red-500" />
    <h3 class="text-xl font-bold">Card Title</h3>
  </div>
  <p class="text-zinc-300">Card description</p>
</div>
```

## 4. Animation Standards

### v-motion Patterns
```vue
<!-- Slide in from bottom -->
<div
  v-motion
  :initial="{ opacity: 0, y: 100 }"
  :enter="{ opacity: 1, y: 0 }"
  class="..."
>

<!-- Blur fade in -->
<div
  v-motion
  :initial="{ filter: 'blur(12px)', opacity: 0 }"
  :enter="{ filter: 'blur(0px)', opacity: 1 }"
  class="..."
>

<!-- Scale in -->
<div
  v-motion
  :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
  :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1, transition: { delay: 200 } }"
  class="..."
>
```

### v-click Sequencing
- Use `v-click="1"`, `v-click="2"` etc. for step-by-step reveals
- Combine with v-motion for smooth transitions
- Use `v-click.hide="1"` to hide elements after click

## 5. Icon Usage (Lucide Icons)

### Beauty Industry Icons
- `lucide-mail` - Email marketing
- `lucide-shopping-cart` - Ecommerce
- `lucide-heart` - Beauty/wellness
- `lucide-palette` - Creative/design
- `lucide-bar-chart` - Analytics
- `lucide-users` - Customers
- `lucide-zap` - Performance/automation
- `lucide-target` - Targeting
- `lucide-refresh-cw` - Optimization
- `lucide-layout-dashboard` - CRM/dashboard

### Icon Styling
```vue
<lucide-icon class="w-6 h-6 text-red-500" />
```
- Standard size: w-6 h-6 (24px)
- Large size: w-8 h-8 (32px)
- Color: text-red-500 for primary actions

## 6. Grid and Spacing Standards

### Common Grid Patterns
```css
/* 2-column layout */
.grid.grid-cols-2.gap-8.max-w-4xl.mx-auto

/* 3-column layout */
.grid.grid-cols-3.gap-6.max-w-6xl.mx-auto

/* Card grid */
.grid.grid-cols-1.md:grid-cols-2.lg:grid-cols-3.gap-8
```

### Spacing Standards
- Section margins: `mb-8`, `mt-8`
- Card padding: `p-6`
- Icon gaps: `gap-4`
- Text spacing: `mb-4` between elements

## 7. Beauty-Specific Content Patterns

### Service Feature List
```vue
<div class="space-y-4">
  <div class="flex items-start gap-3">
    <lucide-icon class="w-5 h-5 text-red-500 mt-0.5" />
    <p class="text-zinc-300">Feature description</p>
  </div>
</div>
```

### Stats/Metrics Display
```vue
<div class="bg-zinc-900/50 rounded-xl border border-zinc-800 p-4">
  <dd class="text-2xl font-extrabold text-red-600 mb-4">
    <Ticker :value="30" decimalPlaces="0" />K+
  </dd>
  <dt class="text-base font-medium text-zinc-400">Metric Label</dt>
</div>
```

## 8. File Structure for New Slides

### Create New Slide File
```markdown
<!-- pages/NewSlide.md -->
---
layout: center
class: text-center
---

# Slide Title

Content goes here...

<style>
/* Slide-specific styles if needed */
</style>
```

### Add to slides.md
```markdown
---
src: ./pages/NewSlide.md
---
```

## 9. Beauty-Specific Implementation Rules

### Email Marketing Focus
- Always highlight Klaviyo integration
- Use mail icons for email-related content
- Emphasize automation and personalization

### Color Coding for Services
- **Blue** (`text-blue-500`): Email marketing
- **Green** (`text-green-500`): CRM/automation
- **Yellow** (`text-yellow-500`): Paid advertising
- **Red** (`text-red-500`): Performance/results
- **Purple** (`text-purple-500`): Analytics

### Beauty Industry Language
- Use terms: "beauty brands", "skincare", "customer retention"
- Focus on: personalization, segmentation, lifecycle marketing
- Avoid: generic "leads", use "subscribers" or "customers"

## 10. Performance Considerations

### Image Optimization
- Use WebP format when possible
- Compress images for web
- Lazy load non-critical images

### Animation Performance
- Use `transform` and `opacity` for smooth animations
- Avoid animating `width`, `height`, or `position`
- Use `transition-all` sparingly

This guide ensures consistency with your existing design system while implementing the new beauty-focused content.