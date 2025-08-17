# Beauty-Focused Design System Documentation
## Sophisticated Pastel Light Mode Implementation Guide

### 1. Color Palette (HSL + Tailwind)

#### Primary Pastel Beauty Colors
```css
:root {
  /* Primary Pastel Colors - HSL Format */
  --beauty-rose: hsl(343, 68%, 79%);        /* #F4A4BF - Rose pastel */
  --beauty-purple: hsl(270, 50%, 75%);      /* #B794E6 - Purple pastel */
  --beauty-indigo: hsl(231, 48%, 78%);      /* #9BB5E8 - Indigo pastel */
  --beauty-pink: hsl(330, 81%, 84%);        /* #F7B5D1 - Pink pastel */
  
  /* Supporting Neutral Colors */
  --beauty-background: hsl(0, 0%, 99%);     /* #FEFEFE - Pure white */
  --beauty-surface: hsl(20, 14%, 96%);      /* #F5F4F3 - Stone surface */
  --beauty-border: hsl(20, 6%, 90%);        /* #E7E5E4 - Light border */
}
```

#### Tailwind CSS Color System
```css
/* Primary Pastel Colors */
--beauty-rose: rose-300;          /* #fda4af - Rose pastel */
--beauty-purple: purple-300;      /* #c4b5fd - Purple pastel */
--beauty-indigo: indigo-300;      /* #a5b4fc - Indigo pastel */
--beauty-pink: pink-300;          /* #f9a8d4 - Pink pastel */

/* Light Backgrounds */
--beauty-rose-bg: rose-50;        /* #fff1f2 - Rose background */
--beauty-purple-bg: purple-50;    /* #faf5ff - Purple background */
--beauty-indigo-bg: indigo-50;    /* #eef2ff - Indigo background */

/* Borders */
--beauty-rose-border: rose-100;   /* #ffe4e6 - Rose border */
--beauty-purple-border: purple-100; /* #f3e8ff - Purple border */
--beauty-indigo-border: indigo-100; /* #e0e7ff - Indigo border */
```

#### Background System (Light Mode)
```css
:root {
  /* Backgrounds */
  --bg-primary: hsl(0, 0%, 100%);    /* #FFFFFF - Pure white */
  --bg-gradient: hsl(20, 14%, 98%);  /* #FAFAF9 - Stone gradient */
  --bg-card: hsl(0, 0%, 100%);       /* #FFFFFF - Card background */
  --bg-section: hsl(20, 14%, 96%);   /* #F5F4F3 - Section background */
}

/* Tailwind Equivalents */
--bg-primary: white;
--bg-gradient: stone-50;
--bg-card: white;
--bg-section: stone-100;
```

#### Text Hierarchy
```css
:root {
  /* Text Colors */
  --text-primary: hsl(0, 0%, 11%);   /* #1C1C1C - Rich black */
  --text-secondary: hsl(0, 0%, 40%); /* #666666 - Medium gray */
  --text-muted: hsl(0, 0%, 60%);     /* #999999 - Light gray */
  --text-accent-rose: hsl(343, 68%, 60%);   /* #E879A6 - Rose accent */
  --text-accent-purple: hsl(270, 50%, 55%); /* #9B59E6 - Purple accent */
}

/* Tailwind Equivalents */
--text-primary: gray-800;     /* #1f2937 */
--text-secondary: gray-600;   /* #4b5563 */
--text-muted: gray-400;       /* #9ca3af */
--text-accent-rose: rose-400; /* #fb7185 */
--text-accent-purple: purple-400; /* #c084fc */
```

### 2. Component Styling Patterns

#### Elegant Pastel Card Component
```vue
<div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-100">
  <div class="flex items-center gap-4 mb-6">
    <div class="w-16 h-16 bg-gradient-to-br from-rose-300 to-pink-300 rounded-2xl flex items-center justify-center shadow-md">
      <lucide-icon class="w-8 h-8 text-white" />
    </div>
    <h3 class="!text-2xl !font-semibold text-gray-800">Elegant Title</h3>
  </div>
  <p class="text-gray-600 !leading-relaxed !text-lg">Beautiful, readable content with proper spacing</p>
</div>
```

#### Premium Button Styles
```vue
<!-- Primary CTA - Rose Pastel -->
<button class="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-8 py-4 rounded-2xl !font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
  Get Started
</button>

<!-- Secondary Button - Purple Pastel -->
<button class="bg-white border-2 border-purple-300 text-purple-500 px-8 py-4 rounded-2xl !font-semibold hover:bg-purple-50 transition-all duration-300">
  Learn More
</button>
```

#### Sophisticated Stats Display with Custom Colors
```vue
<!-- Rose Stats Card -->
<div class="bg-gradient-to-br from-white to-rose-50 rounded-3xl p-8 shadow-lg border border-rose-100 hover:shadow-2xl transition-all duration-300">
  <div class="text-center">
    <div class="!text-4xl !font-bold mb-2 text-rose-500">
      <Ticker :value="50" :decimalPlaces="0" color="text-rose-500" />+
    </div>
    <div class="!text-lg text-gray-600 !font-medium">Total Clients</div>
  </div>
</div>

<!-- Purple Stats Card -->
<div class="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-2xl transition-all duration-300">
  <div class="text-center">
    <div class="!text-4xl !font-bold mb-2 text-purple-500">
      <Ticker :value="30" :decimalPlaces="0" color="text-purple-500" />K+
    </div>
    <div class="!text-lg text-gray-600 !font-medium">Leads Generated</div>
  </div>
</div>

<!-- Indigo Stats Card -->
<div class="bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-8 shadow-lg border border-indigo-100 hover:shadow-2xl transition-all duration-300">
  <div class="text-center">
    <div class="!text-4xl !font-bold mb-2 text-indigo-500">
      <Ticker :value="3" :decimalPlaces="0" color="text-indigo-500" />M+
    </div>
    <div class="!text-lg text-gray-600 !font-medium">Ad Budget Managed</div>
  </div>
</div>
```

### 3. Typography System (Always use !important)

#### Font Hierarchy
```css
/* Headings - Always use !important for override */
.heading-1 { @apply !text-5xl !font-bold text-gray-800 !leading-tight; }
.heading-2 { @apply !text-4xl !font-bold text-gray-800 !leading-tight; }
.heading-3 { @apply !text-3xl !font-semibold text-gray-800 !leading-snug; }
.heading-4 { @apply !text-2xl !font-semibold text-gray-700 !leading-snug; }

/* Body Text - Always use !important */
.body-large { @apply !text-xl text-gray-600 !leading-relaxed; }
.body-base { @apply !text-lg text-gray-600 !leading-relaxed; }
.body-small { @apply !text-base text-gray-500 !leading-relaxed; }

/* Accent Text - Pastel Gradients */
.text-accent-rose { @apply text-rose-500 !font-medium; }
.text-accent-purple { @apply text-purple-500 !font-medium; }
.text-accent-indigo { @apply text-indigo-500 !font-medium; }
.text-gradient-rose { @apply bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent; }
.text-gradient-purple { @apply bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent; }
```

#### Ticker Component Usage
```vue
<!-- Custom colored tickers -->
<Ticker :value="50" :decimalPlaces="0" color="text-rose-500" />
<Ticker :value="30" color="text-purple-500" />
<Ticker :value="100" color="text-indigo-500" />

<!-- Default fallback (gray-800) -->
<Ticker :value="25" />
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
  :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
>
```

### 6. Beauty-Specific Service Color Coding

#### Updated Pastel Service Colors
```css
/* Service Categories - Pastel Theme */
.email-marketing { @apply text-rose-500 bg-rose-50 border-rose-100; }
.paid-advertising { @apply text-purple-500 bg-purple-50 border-purple-100; }
.crm-automation { @apply text-indigo-500 bg-indigo-50 border-indigo-100; }
.analytics { @apply text-pink-500 bg-pink-50 border-pink-100; }
.retention { @apply text-rose-600 bg-rose-100 border-rose-200; }
.content-creation { @apply text-purple-600 bg-purple-100 border-purple-200; }
```

### 7. Implementation Examples

#### Slide Header Pattern
```vue
<div class="text-center mb-16">
  <h1 class="!text-5xl !font-bold mb-6">
    <span class="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
      Beautiful Title
    </span>
  </h1>
  <p class="!text-xl text-gray-600 max-w-3xl mx-auto !leading-relaxed">
    Elegant subtitle that explains the value proposition clearly
  </p>
</div>
```

#### Feature Grid Pattern
```vue
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div class="bg-white rounded-3xl p-8 shadow-lg border border-stone-100 hover:shadow-2xl transition-all duration-300">
    <div class="w-16 h-16 bg-gradient-to-br from-rose-300 to-pink-300 rounded-2xl flex items-center justify-center mb-6 shadow-md">
      <lucide-mail class="w-8 h-8 text-white" />
    </div>
    <h3 class="!text-2xl !font-semibold text-gray-800 mb-4">Email Marketing</h3>
    <p class="text-gray-600 !leading-relaxed">Sophisticated email campaigns that convert.</p>
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
  primary: 'rose-300'
background: linear-gradient(135deg, white 0%, stone-50 100%)
---
```

### 9. Key Design Principles

#### Color Usage Guidelines
- **No Yellow**: Avoid all yellow variations (amber, yellow, etc.)
- **Pastel Focus**: Use rose-300, purple-300, indigo-300, pink-300
- **Sophisticated Palette**: Professional yet feminine
- **Consistent Theming**: Each service gets its own pastel color

#### Typography Rules
- **Always use !important**: `!text-5xl`, `!font-bold`, `!leading-relaxed`
- **Bold weights**: Avoid thin fonts, use `!font-bold` and `!font-medium`
- **Proper hierarchy**: Clear distinction between headings and body text

#### Component Standards
- **Custom Ticker colors**: Always specify color prop for brand consistency
- **Rounded corners**: Use `rounded-3xl` for cards, `rounded-2xl` for icons
- **Elegant shadows**: `shadow-lg` for cards, `shadow-md` for icons
- **Smooth transitions**: Always include `transition-all duration-300`

This sophisticated pastel design system creates a beauty-industry appropriate aesthetic that feels luxurious, elegant, and professional while maintaining excellent readability and user experience.
