# Beauty-Focused Design System Documentation
## Rose Gold Light Mode Implementation Guide

### 1. Color Palette (HSL + Tailwind)

#### Primary Rose Gold Colors
```css
:root {
  /* Rose Gold Primary - HSL Format */
  --beauty-primary: hsl(18, 45%, 79%);      /* #E8B4A6 - Main accent */
  --beauty-primary-dark: hsl(32, 35%, 69%); /* #D4A574 - Darker shade */
  --beauty-primary-light: hsl(35, 65%, 91%); /* #F7E7CE - Light champagne */
  
  /* Supporting Colors */
  --beauty-secondary: hsl(340, 40%, 85%);    /* #E8C4D6 - Soft pink */
  --beauty-tertiary: hsl(25, 30%, 88%);     /* #E6D5C7 - Warm beige */
}
```

#### Closest Tailwind CSS Equivalents
```css
/* Tailwind Color Mappings */
--beauty-primary: rose-300;          /* hsl(18, 45%, 79%) ≈ #fda4af */
--beauty-primary-dark: orange-300;   /* hsl(32, 35%, 69%) ≈ #fdba74 */
--beauty-primary-light: orange-100;  /* hsl(35, 65%, 91%) ≈ #ffedd5 */

/* Alternative Options */
--beauty-alt-1: pink-200;           /* For softer feel */
--beauty-alt-2: amber-200;          /* For warmer tone */
--beauty-alt-3: rose-200;           /* For classic beauty */
```

#### Background System (Light Mode)
```css
:root {
  /* Backgrounds */
  --bg-primary: hsl(0, 0%, 99%);     /* #FEFEFE - Pure white */
  --bg-secondary: hsl(30, 17%, 97%); /* #F8F7F6 - Warm off-white */
  --bg-card: hsl(0, 0%, 100%);       /* #FFFFFF - Card background */
  --bg-section: hsl(40, 14%, 96%);   /* #F5F4F3 - Section background */
  --bg-accent: hsl(35, 65%, 96%);    /* #FAF6F0 - Light accent bg */
}

/* Tailwind Equivalents */
--bg-primary: white;
--bg-secondary: stone-50;
--bg-card: white;
--bg-section: stone-100;
--bg-accent: orange-50;
```

#### Text Hierarchy
```css
:root {
  /* Text Colors */
  --text-primary: hsl(0, 0%, 16%);   /* #2A2A2A - Charcoal */
  --text-secondary: hsl(0, 0%, 42%); /* #6B6B6B - Medium gray */
  --text-muted: hsl(0, 0%, 60%);     /* #9A9A9A - Light gray */
  --text-accent: hsl(18, 45%, 65%);  /* #D49986 - Rose gold text */
}

/* Tailwind Equivalents */
--text-primary: gray-800;     /* #1f2937 */
--text-secondary: gray-600;   /* #4b5563 */
--text-muted: gray-400;       /* #9ca3af */
--text-accent: rose-400;      /* #fb7185 */
```

### 2. Component Styling Patterns

#### Elegant Card Component
```vue
<div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-100">
  <div class="flex items-center gap-4 mb-6">
    <div class="w-14 h-14 bg-gradient-to-br from-rose-300 to-orange-300 rounded-2xl flex items-center justify-center shadow-md">
      <lucide-icon class="w-7 h-7 text-white" />
    </div>
    <h3 class="text-2xl font-semibold text-gray-800">Elegant Title</h3>
  </div>
  <p class="text-gray-600 leading-relaxed text-lg">Beautiful, readable content with proper spacing</p>
</div>
```

#### Premium Button Styles
```vue
<!-- Primary CTA -->
<button class="bg-gradient-to-r from-rose-300 to-orange-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
  Get Started
</button>

<!-- Secondary Button -->
<button class="bg-white border-2 border-rose-300 text-rose-400 px-8 py-4 rounded-2xl font-semibold hover:bg-rose-50 transition-all duration-300">
  Learn More
</button>
```

#### Sophisticated Stats Display
```vue
<div class="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-8 shadow-lg border border-orange-100">
  <div class="text-center">
    <div class="text-4xl font-bold text-gray-800 mb-2">
      <Ticker :value="30" decimalPlaces="0" />K+
    </div>
    <div class="text-lg text-gray-600 font-medium">Beauty Subscribers</div>
  </div>
</div>
```

### 3. Typography System

#### Font Hierarchy
```css
/* Headings */
.heading-1 { @apply text-5xl font-bold text-gray-800 leading-tight; }
.heading-2 { @apply text-4xl font-bold text-gray-800 leading-tight; }
.heading-3 { @apply text-3xl font-semibold text-gray-800 leading-snug; }
.heading-4 { @apply text-2xl font-semibold text-gray-700 leading-snug; }

/* Body Text */
.body-large { @apply text-xl text-gray-600 leading-relaxed; }
.body-base { @apply text-lg text-gray-600 leading-relaxed; }
.body-small { @apply text-base text-gray-500 leading-relaxed; }

/* Accent Text */
.text-accent { @apply text-rose-400 font-medium; }
.text-luxury { @apply bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent; }
```

### 4. Layout & Spacing

#### Generous Spacing System
```css
/* Section Spacing */
.section-padding { @apply py-16 px-8; }
.card-padding { @apply p-8; }
.content-spacing { @apply space-y-8; }

/* Elegant Margins */
.heading-margin { @apply mb-12; }
.paragraph-margin { @apply mb-6; }
.element-margin { @apply mb-8; }
```

#### Grid Layouts
```vue
<!-- 2-Column Elegant Layout -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
  <!-- Content -->
</div>

<!-- 3-Column Service Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  <!-- Cards -->
</div>
```

### 5. Animation & Motion

#### Sophisticated Animations
```vue
<!-- Gentle Fade Up -->
<div
  v-motion
  :initial="{ opacity: 0, y: 40 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }"
>

<!-- Elegant Scale In -->
<div
  v-motion
  :initial="{ opacity: 0, scale: 0.95 }"
  :enter="{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }"
>

<!-- Luxury Stagger -->
<div
  v-motion
  :initial="{ opacity: 0, y: 30 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 0.7 } }"
>
```

### 6. Beauty-Specific Service Color Coding

#### Updated Service Colors
```css
/* Service Categories */
.email-marketing { @apply text-rose-400 bg-rose-50 border-rose-200; }
.paid-advertising { @apply text-orange-400 bg-orange-50 border-orange-200; }
.crm-automation { @apply text-amber-400 bg-amber-50 border-amber-200; }
.analytics { @apply text-pink-400 bg-pink-50 border-pink-200; }
.retention { @apply text-rose-500 bg-rose-100 border-rose-300; }
```

### 7. Implementation Examples

#### Slide Header Pattern
```vue
<div class="text-center mb-16">
  <h1 class="text-5xl font-bold text-gray-800 mb-6">
    <span class="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
      Beautiful Title
    </span>
  </h1>
  <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    Elegant subtitle that explains the value proposition clearly
  </p>
</div>
```

#### Feature Grid Pattern
```vue
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div class="bg-white rounded-3xl p-8 shadow-lg border border-stone-100 hover:shadow-2xl transition-all duration-300">
    <div class="w-16 h-16 bg-gradient-to-br from-rose-300 to-orange-300 rounded-2xl flex items-center justify-center mb-6 shadow-md">
      <lucide-mail class="w-8 h-8 text-white" />
    </div>
    <h3 class="text-2xl font-semibold text-gray-800 mb-4">Email Marketing</h3>
    <p class="text-gray-600 leading-relaxed">Sophisticated email campaigns that convert.</p>
  </div>
</div>
```

### 8. Slide Configuration

#### Updated Slide Meta
```markdown
---
layout: center
class: text-center
colorScheme: light
htmlAttrs:
  class: 'light beauty-theme'
  data-theme: 'light'
themeConfig:
  primary: '#E8B4A6'
background: linear-gradient(135deg, #FEFEFE 0%, #F8F7F6 100%)
---
```

This design system creates a sophisticated, beauty-industry appropriate aesthetic that feels luxurious, elegant, and professional while maintaining excellent readability and user experience.