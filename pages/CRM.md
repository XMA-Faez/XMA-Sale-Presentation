---
layout: center
class: text-center
---

<div class="process-header crm-header">
  <div class="header-icon">
    <lucide-layout-dashboard class="w-10 h-10" />
  </div>
  <h1>CRM Solutions</h1>
  <p class="header-description">Managing customer relationships seamlessly</p>
</div>

<style>
.process-header {
  @apply flex flex-col items-center mb-8;
}

.header-icon {
  @apply w-20 h-20 rounded-full flex items-center justify-center border-2 mb-4;
}

.crm-header .header-icon {
  @apply bg-green-950/40 border-green-500 text-green-500;
}

.crm-header h1 {
  @apply text-3xl font-bold text-green-500 mb-2;
}

.header-description {
  @apply text-lg text-zinc-400;
}
</style>

---
layout: center
class: text-center
---

<div class="crm-intro">
  <div class="crm-what-is">
    <h1 class="section-title">What is a CRM?</h1>
    <p 
      v-click
      class="section-text">A Customer Relationship Management system that centrally manages all your leads and customer interactions
    </p>
  </div>
</div>

<style>
.crm-intro {
  @apply flex flex-col gap-8 max-w-3xl mx-auto;
}

.crm-what-is {
  @apply text-center;
}

.section-title {
  @apply text-2xl font-bold mb-3 text-green-500;
}

.section-text {
  @apply text-lg text-white;
}

.crm-preview {
  @apply mt-4;
}

.dashboard-wrapper {
  @apply bg-zinc-900/50 rounded-lg border border-zinc-700 overflow-hidden shadow-xl;
}

.dashboard-header {
  @apply flex bg-zinc-900/70 px-4 pt-2 border-b border-zinc-700;
}

.tab {
  @apply px-4 py-2 text-zinc-300 text-sm rounded-t-md mr-1;
}

.tab.active {
  @apply bg-zinc-800 text-white border border-zinc-700 border-b-0 relative;
}

.tab.active::after {
  @apply content-[''] absolute bottom-[-1px] left-0 right-0 h-[1px] bg-zinc-800;
}

.dashboard-content {
  @apply grid grid-cols-2 gap-4 p-4 md:grid-cols-4;
}

.stat-card {
  @apply bg-zinc-900/50 p-3 rounded border border-zinc-700/50 flex flex-col items-center;
}

.stat-card h3 {
  @apply text-xs text-white/70 mb-2;
}

.stat-value {
  @apply text-2xl font-bold text-green-500;
}

.stat-label {
  @apply text-xs text-white/50 mt-1;
}
</style>

---
layout: center
class: text-center
zoom: 0.8
---


# To Understand Why You Need a CRM, Let's See What Happens Without One

<div class="problem-scenario">
  <div 
    v-click="1"
    class="problem-card"
  >
    <div class="problem-icon">
      <lucide-mail class="icon-red" />
    </div>
    <h4 class="text-lg font-bold mb-1">Email Chaos</h4>
    <p>Your leads get buried in your inbox, making you miss potential clients</p>
  </div>
  
  <div 
    v-click="2"
    class="problem-card"
  >
    <div class="problem-icon">
      <lucide-clock class="icon-red" />
    </div>
    <h4 class="text-lg font-bold mb-1">Manual Follow-ups</h4>
    <p>You need to follow up on leads manually, which is very time consuming</p>
  </div>
  
  <div 
    v-click="3"
    class="problem-card"
  >
    <div class="problem-icon">
      <lucide-list class="icon-red" />
    </div>
    <h4 class="text-lg font-bold mb-1">Scattered Data</h4>
    <p>Your customer info is spread across emails, notes, and spreadsheets</p>
  </div>
  
  <div 
    v-click="4"
    class="problem-card"
  >
    <div class="problem-icon">
      <lucide-users class="icon-red" />
    </div>
    <h4 class="text-lg font-bold mb-1">Volume Overwhelm</h4>
    <p>As leads increase, your system breaks down and you get overwhelmed</p>
  </div>
  
  <div 
    v-click="5"
    class="problem-card"
  >
    <div class="problem-icon">
      <lucide-ban class="icon-red" />
    </div>
    <h4 class="text-lg font-bold mb-1">No Prioritization</h4>
    <p>You can't tell which leads are hot and which can wait</p>
  </div>
  
  <div 
    v-click="6"
    class="problem-card"
  >
    <div class="problem-icon">
      <lucide-x-circle class="icon-red" />
    </div>
    <h4 class="text-lg font-bold mb-1">Lost Opportunities</h4>
    <p>You forget to follow up, and potential sales slip through the cracks</p>
  </div>
</div>

<style>
.problem-scenario {
  @apply grid grid-cols-3 gap-6 max-w-4xl mx-auto mt-8;
}
.problem-card {
  @apply flex flex-col items-center gap-2 p-4 bg-red-900/10 rounded-lg border border-red-950 text-center transition-all duration-300;
}
.problem-icon {
  @apply w-12 h-12 flex items-center justify-center rounded-full;
}
.icon-red {
  @apply w-6 h-6 text-red-500;
}
.problem-card p {
  @apply text-sm m-0;
}
</style>

---
class: text-center
layout: center
---

# A CRM Will Solve All Those Issues For You

---
layout: center
---

# Meta Integration: Seamless Lead Capture

<div class="meta-integration">
  <div 
    v-click="1"
    class="diagram-container"
  >
    <div class="diagram">
      <div class="diagram-node">
        <div class="node-icon facebook-icon">
          <lucide-facebook class="w-8 h-8" />
        </div>
        <div class="node-label">Facebook Ads</div>
      </div>
      <div class="diagram-arrow">
        <lucide-arrow-right class="w-6 h-6 text-white/50" />
      </div>
      <div class="diagram-node">
        <div class="node-icon lead-icon">
          <lucide-user-plus class="w-8 h-8" />
        </div>
        <div class="node-label">Lead Generated</div>
      </div>
      <div class="diagram-arrow">
        <lucide-arrow-right class="w-6 h-6 text-white/50" />
      </div>
      <div class="diagram-node">
        <div class="node-icon crm-icon">
          <lucide-database class="w-8 h-8" />
        </div>
        <div class="node-label">CRM</div>
      </div>
      <div class="diagram-arrow">
        <lucide-arrow-right class="w-6 h-6 text-white/50" />
      </div>
      <div class="diagram-node">
        <div class="node-icon response-icon">
          <lucide-message-circle class="w-8 h-8" />
        </div>
        <div class="node-label">Automatic Response</div>
      </div>
    </div>
  </div>
  
  <div class="integration-benefits">
    <div 
      v-click="2"
      class="benefit-item"
    >
      <lucide-zap class="w-5 h-5 text-green-500" />
      <p>Instant lead capture from Meta ad platforms</p>
    </div>
    <div 
      v-click="3"
      class="benefit-item"
    >
      <lucide-clock class="w-5 h-5 text-green-500" />
      <p>Immediate response to new leads</p>
    </div>
    <div 
      v-click="4"
      class="benefit-item"
    >
      <lucide-bot class="w-5 h-5 text-green-500" />
      <p>Custom chatbot engages while you're busy</p>
    </div>
    <div 
      v-click="5"
      class="benefit-item"
    >
      <lucide-check-circle class="w-5 h-5 text-green-500" />
      <p>Never miss a potential customer</p>
    </div>
  </div>
</div>

<style>
.meta-integration {
  @apply flex flex-col gap-10 max-w-4xl mx-auto;
}

.diagram-container {
  @apply p-6 bg-zinc-900/50 rounded-lg border border-zinc-700/30;
}

.diagram {
  @apply flex items-center justify-between;
}

.diagram-node {
  @apply flex flex-col items-center gap-2;
}

.node-icon {
  @apply w-16 h-16 flex items-center justify-center rounded-full;
}

.facebook-icon {
  @apply bg-blue-900/30 text-blue-500;
}

.lead-icon {
  @apply bg-yellow-900/30 text-yellow-500;
}

.crm-icon {
  @apply bg-green-900/30 text-green-500;
}

.response-icon {
  @apply bg-purple-900/30 text-purple-500;
}

.node-label {
  @apply text-sm font-medium;
}

.integration-benefits {
  @apply grid grid-cols-2 gap-4;
}

.benefit-item {
  @apply flex items-start gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-700/30;
}

.benefit-item p {
  @apply text-sm text-white/80 m-0;
}
</style>

---
layout: center
zoom: 0.8
---

# Contact Management & Communication

<div class="contact-management">
  <div class="contact-interface">
    <div 
      v-click="1"
      class="interface-preview"
    >
      <div class="interface-header">
        <h3>Contact Management</h3>
      </div>
      <div class="interface-content">
        <div class="contact-list">
          <div class="contact-item active">
            <div class="contact-avatar relative">
              <lucide-user class="w-6 h-6 text-gray-400" />
              <skill-icons-instagram class="absolute -bottom-1 -right-1 w-4 h-5" />
            </div>
            <div class="contact-info">
              <div class="contact-name">John Smith</div>
              <div class="contact-detail">Premium Package Inquiry</div>
            </div>
            <div class="contact-status new">New</div>
          </div>
          <div class="contact-item">
            <div class="contact-avatar relative">
              <lucide-user class="w-6 h-6 text-gray-400" />
              <ic-baseline-whatsapp class="absolute -bottom-1 -right-1 w-4 h-4 text-green-500" />
            </div>
            <div class="contact-info">
              <div class="contact-name">Sarah Johnson</div>
              <div class="contact-detail">Website Design Project</div>
            </div>
            <div class="contact-status follow">Follow-up</div>
          </div>
          <div class="contact-item">
            <div class="contact-avatar relative">
              <lucide-user class="w-6 h-6 text-gray-400" />
              <lucide-mail class="absolute -bottom-1 -right-1 w-4 h-4 text-purple-400" />
            </div>
            <div class="contact-info">
              <div class="contact-name">Michael Brown</div>
              <div class="contact-detail">Consultation Request</div>
            </div>
            <div class="contact-status">Contacted</div>
          </div>
        </div>
        <div class="conversation-panel">
          <div class="conversation-header">
            <h4>John Smith</h4>
            <div class="conversation-actions">
              <div class="action-button">
                <lucide-phone class="w-4 h-4" />
              </div>
              <div class="action-button">
                <lucide-mail class="w-4 h-4" />
              </div>
              <div class="action-button">
                <lucide-more-horizontal class="w-4 h-4" />
              </div>
            </div>
          </div>
          <div class="messages">
            <div class="message incoming">
              <div class="message-content">
                Hello, I'm interested in your Premium Package. Can you tell me more?
              </div>
              <div class="message-time">10:24 AM</div>
            </div>
            <div class="message outgoing">
              <div class="message-content">
                Hi John! Thanks for your interest. Our Premium Package includes...
              </div>
              <div class="message-time">10:26 AM</div>
            </div>
          </div>
        <div class="flex flex-col pl-2 pb-2">
          <div class="flex items-center gap-1.5 bg-zinc-800/50 px-2 py-0.5 rounded-t-md text-xs self-start ml-2 border border-zinc-700 border-b-0">
            <ic-baseline-whatsapp class="w-3.5 h-3.5 text-green-400" />
            <skill-icons-instagram class="w-3.5 h-3.5" />
            <lucide-mail class="w-3.5 h-3.5 text-purple-400" />
            <span class="text-[9px] text-white/60">All channels in one place</span>
          </div>
          <div class="flex gap-2 pr-2">
            <input type="text" placeholder="Type your message..." class="flex-grow bg-zinc-800/50 border border-zinc-700 rounded px-3 py-1 text-sm focus:outline-none focus:border-green-500" />
            <button class="w-7 h-7 flex items-center justify-center rounded bg-green-600 hover:bg-green-500">
              <lucide-send class="w-4 h-4" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="contact-features">
    <div 
      v-click="2"
      class="feature-item"
    >
      <lucide-users class="w-5 h-5 text-green-500" />
      <div>
        <h3>All Contacts in One Place</h3>
        <p>Complete customer information at your fingertips</p>
      </div>
    </div>
    <div 
      v-click="3"
      class="feature-item"
    >
      <lucide-message-square class="w-5 h-5 text-green-500" />
      <div>
        <h3>WhatsApp Integration</h3>
        <p>Message leads directly through your preferred channel</p>
      </div>
    </div>
    <div 
      v-click="4"
      class="feature-item"
    >
      <lucide-history class="w-5 h-5 text-green-500" />
      <div>
        <h3>Conversation History</h3>
        <p>Never forget what was discussed with each lead</p>
      </div>
    </div>
    <div 
      v-click="5"
      class="feature-item"
    >
      <lucide-tag class="w-5 h-5 text-green-500" />
      <div>
        <h3>Lead Tagging</h3>
        <p>Categorize and prioritize contacts for better follow-up</p>
      </div>
    </div>
  </div>
</div>

<style>
.contact-management {
  @apply flex flex-col gap-6 max-w-4xl mx-auto;
}

.contact-interface {
  @apply w-full;
}

.interface-preview {
  @apply bg-zinc-900/50 rounded-lg border border-zinc-800 overflow-hidden shadow-xl;
}

.interface-header {
  @apply bg-zinc-900 p-3 border-b border-zinc-700;
}

.interface-header h3 {
  @apply text-white font-medium;
}

.interface-content {
  @apply flex;
}

.contact-list {
  @apply w-1/3 border-r border-zinc-700 max-h-64 overflow-y-auto;
}

.contact-item {
  @apply flex items-center gap-3 p-3 border-b border-zinc-700/50 cursor-pointer hover:bg-zinc-700/30;
}

.contact-item.active {
  @apply bg-zinc-700/50;
}

.contact-avatar {
  @apply w-8 h-8 rounded-full bg-zinc-700/50 aspect-square flex justify-center items-center;
}

.contact-info {
  @apply flex-grow min-w-0;
}

.contact-name {
  @apply text-sm font-medium text-white/90 truncate;
}

.contact-detail {
  @apply text-xs text-white/60 truncate;
}

.contact-status {
  @apply text-xs px-2 py-0.5 rounded-full bg-zinc-600/50 text-white/70 !whitespace-nowrap;
}

.contact-status.new {
  @apply bg-green-900/50 text-green-500;
}

.contact-status.follow {
  @apply bg-yellow-900/50 text-yellow-500;
}

.conversation-panel {
  @apply w-2/3 flex flex-col;
}

.conversation-header {
  @apply flex justify-between items-center p-3 border-b border-zinc-700/50;
}

.conversation-header h4 {
  @apply text-sm font-medium;
}

.conversation-actions {
  @apply flex gap-2;
}

.action-button {
  @apply w-7 h-7 flex items-center justify-center rounded-full bg-zinc-700/50 hover:bg-zinc-600;
}

.messages {
  @apply flex-grow p-3 space-y-3 max-h-40 overflow-y-auto;
}

.message {
  @apply flex flex-col max-w-[80%];
}

.message.incoming {
  @apply mr-auto;
}

.message.outgoing {
  @apply ml-auto;
}

.message-content {
  @apply p-2 rounded-lg text-xs;
}

.message.incoming .message-content {
  @apply bg-zinc-800;
}

.message.outgoing .message-content {
  @apply bg-green-900/70;
}

.message-time {
  @apply text-[10px] text-white/50 mt-1;
}

.message-input {
  @apply flex gap-2 p-3 pt-5 mt-5 border-t border-zinc-800/50 relative;
}

.channel-indicators {
  @apply absolute -top-1 left-5 flex items-center gap-1.5 bg-zinc-800 px-2 py-0.5 rounded-t border border-zinc-700/50 border-b-0 text-[10px];
}

.channel-icon {
  @apply flex items-center justify-center;
}

.channel-label {
  @apply text-[9px] text-white/60 ml-1;
}

.message-input input {
  @apply flex-grow bg-zinc-800/50 border border-zinc-600 rounded px-3 py-1 text-sm focus:outline-none focus:border-green-500;
}

.message-input button {
  @apply w-7 h-7 flex items-center justify-center rounded bg-green-600 hover:bg-green-500;
}

.contact-features {
  @apply grid grid-cols-2 gap-4;
}

.feature-item {
  @apply flex items-start gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-700/30;
}

.feature-item h3 {
  @apply text-sm font-medium text-white/90 mb-0.5;
}

.feature-item p {
  @apply text-xs text-white/70 m-0;
}
</style>

---
class: text-center
---

# Lead Pipeline Management

<div 
  v-click="1"
  class="pipeline-visualization"
>
  <div class="pipeline-stage">
    <div class="stage-header">
      <h3>New Leads</h3>
      <div class="stage-count">6</div>
    </div>
    <div class="stage-content">
      <div class="lead-card">
        <div class="lead-info">
          <div class="lead-name">Emma Wilson</div>
          <div class="lead-source">Facebook Ad</div>
        </div>
        <div class="lead-value">$1,200</div>
      </div>
      <div class="lead-card">
        <div class="lead-info">
          <div class="lead-name">Alex Davis</div>
          <div class="lead-source">Instagram Ad</div>
        </div>
        <div class="lead-value">$2,500</div>
      </div>
      <div class="lead-card-more">+4 more</div>
    </div>
  </div>
  <div class="pipeline-arrow">
    <lucide-chevron-right class="w-6 h-6 text-white/30" />
  </div>
  <div class="pipeline-stage">
    <div class="stage-header">
      <h3>Contacted</h3>
      <div class="stage-count">4</div>
    </div>
    <div class="stage-content">
      <div class="lead-card">
        <div class="lead-info">
          <div class="lead-name">Ryan Murphy</div>
          <div class="lead-source">Facebook Ad</div>
        </div>
        <div class="lead-value">$3,000</div>
      </div>
      <div class="lead-card">
        <div class="lead-info">
          <div class="lead-name">Jessica Lee</div>
          <div class="lead-source">Website</div>
        </div>
        <div class="lead-value">$1,800</div>
      </div>
      <div class="lead-card-more">+2 more</div>
    </div>
  </div>
  <div class="pipeline-arrow">
    <lucide-chevron-right class="w-6 h-6 text-white/30" />
  </div>
  <div class="pipeline-stage">
    <div class="stage-header">
      <h3>Meeting Scheduled</h3>
      <div class="stage-count">3</div>
    </div>
    <div class="stage-content">
      <div class="lead-card">
        <div class="lead-info">
          <div class="lead-name">Thomas Brown</div>
          <div class="lead-source">Instagram Ad</div>
        </div>
        <div class="lead-value">$4,500</div>
      </div>
      <div class="lead-card-more">+2 more</div>
    </div>
  </div>
  <div class="pipeline-arrow">
    <lucide-chevron-right class="w-6 h-6 text-white/30" />
  </div>
  <div class="pipeline-stage">
    <div class="stage-header">
      <h3>Proposal Sent</h3>
      <div class="stage-count">2</div>
    </div>
    <div class="stage-content">
      <div class="lead-card">
        <div class="lead-info">
          <div class="lead-name">Linda Chen</div>
          <div class="lead-source">Facebook Ad</div>
        </div>
        <div class="lead-value">$5,600</div>
      </div>
      <div class="lead-card-more">+1 more</div>
    </div>
  </div>
  <div class="pipeline-arrow">
    <lucide-chevron-right class="w-6 h-6 text-white/30" />
  </div>
  <div class="pipeline-stage">
    <div class="stage-header">
      <h3>Closed Won</h3>
      <div class="stage-count">5</div>
    </div>
    <div class="stage-content">
      <div class="lead-card">
        <div class="lead-info">
          <div class="lead-name">David Kim</div>
          <div class="lead-source">Website</div>
        </div>
        <div class="lead-value">$8,200</div>
      </div>
      <div class="lead-card-more">+4 more</div>
    </div>
  </div>
</div>
<div class="pipeline-benefits">
  <div 
    v-click="2"
    class="benefit-item"
  >
    <lucide-eye class="w-5 h-5 text-green-500" />
    <div>
      <h3>Visual Sales Funnel</h3>
      <p>See where every lead stands at a glance</p>
    </div>
  </div>
  <div 
    v-click="3"
    class="benefit-item"
  >
    <lucide-users class="w-5 h-5 text-green-500" />
    <div>
      <h3>Team Assignment</h3>
      <p>Assign sales reps to specific leads or stages</p>
    </div>
  </div>
  <div 
    v-click="4"
    class="benefit-item"
  >
    <lucide-bar-chart-2 class="w-5 h-5 text-green-500" />
    <div>
      <h3>Conversion Tracking</h3>
      <p>Measure performance at each stage of your funnel</p>
    </div>
  </div>
  <div 
    v-click="5"
    class="benefit-item"
  >
    <lucide-dollar-sign class="w-5 h-5 text-green-500" />
    <div>
      <h3>Lead Value</h3>
      <p>Prioritize high-value opportunities</p>
    </div>
  </div>
</div>

<style>
.pipeline-visualization {
  @apply flex items-start justify-between gap-2 p-4 !bg-zinc-900/70 rounded-lg border border-zinc-800 overflow-x-auto max-w-4xl mx-auto;
}

.pipeline-stage {
  @apply flex-shrink-0 w-44;
}

.stage-header {
  @apply flex justify-between items-center pb-2 mb-2 border-b border-zinc-700/50;
}

.stage-header h3 {
  @apply text-sm font-medium;
}

.stage-count {
  @apply text-xs px-2 py-0.5 rounded-full bg-zinc-800/70 text-white/80;
}

.stage-content {
  @apply space-y-2;
}

.lead-card {
  @apply bg-zinc-800/50 rounded p-2 flex justify-between items-center border border-zinc-700/30;
}

.lead-info {
  @apply min-w-0;
}

.lead-name {
  @apply text-xs font-medium text-white/90 truncate;
}

.lead-source {
  @apply text-[10px] text-white/60;
}

.lead-value {
  @apply text-xs font-medium text-green-500;
}

.lead-card-more {
  @apply text-center text-xs text-white/50 p-1;
}

.pipeline-arrow {
  @apply self-center flex-shrink-0;
}

.pipeline-benefits {
  @apply grid grid-cols-4 gap-4 mt-6 max-w-4xl mx-auto;
}

.benefit-item {
  @apply flex flex-col items-center gap-2 p-3 bg-zinc-900/50 rounded-lg border border-zinc-800/30 text-center;
}

.benefit-item h3 {
  @apply text-sm font-medium text-white/90;
}

.benefit-item p {
  @apply text-xs text-white/70;
}
</style>


---
layout: center
zoom: 0.8
---

<h1 class="text-center">
    Automation & AI Chatbots
</h1>

<div class="automation-container">
  <div class="automation-columns">
    <div 
      v-click="1"
      class="automation-showcase"
    >
      <h2 class="showcase-title">Chatbot Automation</h2>
      <div class="chat-preview">
        <div class="chat-bubble company">
          <div class="chat-header">
            <div class="chat-avatar"></div>
            <div class="chat-name">Your Company</div>
          </div>
          <div class="chat-message">
            👋 Hello! Thanks for your interest in our services. I'm your virtual assistant. How can I help you today?
          </div>
          <div class="chat-time">10:01 AM</div>
        </div>
        <div class="chat-bubble user">
          <div class="chat-message">
            I saw your ad for web design. What packages do you offer?
          </div>
          <div class="chat-time">10:02 AM</div>
        </div>
        <div class="chat-bubble company">
          <div class="chat-message">
            We have 3 web design packages: <br /><br />
            📦 Basic: $999 - 5 pages, responsive design<br />
            🔹 Professional: $1,999 - 10 pages, SEO optimization<br />
            ⭐ Premium: $3,999 - 20 pages, full e-commerce<br /><br />
            Which one interests you most?
          </div>
          <div class="chat-time">10:02 AM</div>
        </div>
        <div class="chat-bubble user">
          <div class="chat-message">
            The Professional package sounds good. Do you have any examples?
          </div>
          <div class="chat-time">10:03 AM</div>
        </div>
        <div class="chat-bubble company">
          <div class="chat-message">
            Great choice! Yes, here are some examples of our Professional package websites:
            • www.example1.com
            • www.example2.com
            Would you like to schedule a consultation to discuss your project?
          </div>
          <div class="chat-time">10:03 AM</div>
        </div>
      </div>
    </div>
    <div class="automation-features">
      <div 
        v-click="2"
        class="feature-item"
      >
        <lucide-clock class="w-5 h-5 text-green-500" />
        <div>
          <h3>24/7 Response</h3>
          <p>Engage with leads any time, day or night</p>
        </div>
      </div>
      <div 
        v-click="3"
        class="feature-item"
      >
        <lucide-list-checks class="w-5 h-5 text-green-500" />
        <div>
          <h3>Lead Qualification</h3>
          <p>Automatically ask qualifying questions</p>
        </div>
      </div>
      <div 
        v-click="4"
        class="feature-item"
      >
        <lucide-calendar class="w-5 h-5 text-green-500" />
        <div>
          <h3>Scheduling</h3>
          <p>Book meetings and appointments automatically</p>
        </div>
      </div>
      <div 
        v-click="5"
        class="feature-item"
      >
        <lucide-refresh-cw class="w-5 h-5 text-green-500" />
        <div>
          <h3>Follow-up Sequences</h3>
          <p>Automated reminders and nurturing messages</p>
        </div>
      </div>
    </div>
  </div>
  
  <div 
    v-click="6"
    class="workflow-diagram"
  >
    <h2 class="workflow-title">Automated Workflow Example</h2>
    <div class="workflow">
      <div class="workflow-step">
        <div class="step-icon">
          <lucide-user-plus class="w-5 h-5" />
        </div>
        <div class="step-content">
          <h3>Lead Capture</h3>
          <p>From Meta ad to CRM contact</p>
        </div>
      </div>
      <div class="workflow-arrow">
        <lucide-arrow-right class="w-5 h-5" />
      </div>
      <div class="workflow-step">
        <div class="step-icon">
          <lucide-message-square class="w-5 h-5" />
        </div>
        <div class="step-content">
          <h3>Instant Response</h3>
          <p>AI chatbot engages immediately</p>
        </div>
      </div>
      <div class="workflow-arrow">
        <lucide-arrow-right class="w-5 h-5" />
      </div>
      <div class="workflow-step">
        <div class="step-icon">
          <lucide-list-checks class="w-5 h-5" />
        </div>
        <div class="step-content">
          <h3>Qualification</h3>
          <p>Bot asks key qualifying questions</p>
        </div>
      </div>
      <div class="workflow-arrow">
        <lucide-arrow-right class="w-5 h-5" />
      </div>
      <div class="workflow-step">
        <div class="step-icon">
          <lucide-users class="w-5 h-5" />
        </div>
        <div class="step-content">
          <h3>Routing</h3>
          <p>Hot leads assigned to sales team</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.automation-container {
  @apply flex flex-col gap-6 max-w-4xl mx-auto;
}

.automation-columns {
  @apply flex gap-6;
}

.automation-showcase {
  @apply w-1/2;
}

.showcase-title {
  @apply text-lg font-semibold mb-3 text-green-500;
}

.chat-preview {
  @apply bg-zinc-900/50 rounded-lg border border-zinc-800 p-4 space-y-4 max-h-80 overflow-y-auto;
}

.chat-bubble {
  @apply max-w-[85%] space-y-1;
}

.chat-bubble.company {
  @apply mr-auto;
}

.chat-bubble.user {
  @apply ml-auto;
}

.chat-header {
  @apply flex items-center gap-2 mb-1;
}

.chat-avatar {
  @apply w-6 h-6 rounded-full bg-green-900/50;
}

.chat-name {
  @apply text-xs font-medium text-white/80;
}

.chat-message {
  @apply p-3 rounded-lg text-xs whitespace-pre-line;
}

.chat-bubble.company .chat-message {
  @apply bg-zinc-800 text-white/90;
}

.chat-bubble.user .chat-message {
  @apply bg-green-900/70 text-white/90;
}

.chat-time {
  @apply text-[10px] text-white/50;
}

.automation-features {
  @apply w-1/2 grid grid-cols-1 gap-4;
}

.feature-item {
  @apply flex items-start gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-700/30;
}

.feature-item h3 {
  @apply text-sm font-medium text-white/90 mb-0.5;
}

.feature-item p {
  @apply text-xs text-white/70 m-0;
}

.workflow-diagram {
  @apply bg-zinc-900/50 rounded-lg border border-zinc-700/30 p-4;
}

.workflow-title {
  @apply text-lg font-semibold mb-4 text-green-500 text-center;
}

.workflow {
  @apply flex items-center justify-between;
}

.workflow-step {
  @apply flex flex-col items-center text-center max-w-[20%];
}

.step-icon {
  @apply w-10 h-10 flex items-center justify-center rounded-full bg-green-900/30 text-green-500 mb-2;
}

.step-content h3 {
  @apply text-sm font-medium text-white/90 mb-0.5;
}

.step-content p {
  @apply text-xs text-white/70 m-0;
}

.workflow-arrow {
  @apply text-white/30;
}
</style>

---
layout: center
zoom: 0.7
---

<h1 class="text-center !mb-8">
    Why You Need a CRM
</h1>

<div 
  v-motion
  :initial="{ opacity: 0, y: 20 }"
  :enter="{ opacity: 1, y: 0 }"
  class="crm-benefits"
>
  <div 
    class="benefit-row"
  >
    <div v-click class="benefit-card">
      <div class="benefit-icon">
        <lucide-trending-up class="icon-green" />
      </div>
      <h3>Higher Conversion Rates</h3>
      <p>Turn more leads into customers with faster response times and consistent follow-up</p>
    </div>
    <div v-click class="benefit-card">
      <div class="benefit-icon">
        <lucide-clock class="icon-green" />
      </div>
      <h3>Save Time</h3>
      <p>Automate repetitive tasks and eliminate manual data entry</p>
    </div>
  </div>
  
  <div 
    class="benefit-row"
  >
    <div v-click class="benefit-card">
      <div class="benefit-icon">
        <lucide-folder-open class="icon-green" />
      </div>
      <h3>Organized Customer Data</h3>
      <p>All customer information and interactions in one central location</p>
    </div>
    <div v-click class="benefit-card">
      <div class="benefit-icon">
        <lucide-zap class="icon-green" />
      </div>
      <h3>Improved Efficiency</h3>
      <p>Streamlined workflows and better team collaboration</p>
    </div>
  </div>
  
  <div 
    class="benefit-row"
  >
    <div v-click class="benefit-card">
      <div class="benefit-icon">
        <lucide-bar-chart-2 class="icon-green" />
      </div>
      <h3>Better Insights</h3>
      <p>Understand what's working and make data-driven decisions</p>
    </div>
    <div v-click class="benefit-card">
      <div class="benefit-icon">
        <lucide-smile class="icon-green" />
      </div>
      <h3>Enhanced Customer Experience</h3>
      <p>Personalized service and faster response times</p>
    </div>
  </div>
</div>

<style>
.crm-benefits {
  @apply flex flex-col gap-6 max-w-4xl mx-auto;
}

.benefit-row {
  @apply grid grid-cols-2 gap-6;
}

.benefit-card {
  @apply bg-zinc-900/50 rounded-lg p-5 border border-zinc-700/30 transition-all duration-300 hover:border-green-500/30 hover:bg-zinc-800/70;
}

.benefit-icon {
  @apply w-12 h-12 flex items-center justify-center bg-green-900/20 rounded-full mb-3;
}

.icon-green {
  @apply w-6 h-6 text-green-500;
}

.benefit-card h3 {
  @apply text-base font-semibold mb-2 text-white/90;
}

.benefit-card p {
  @apply text-sm text-white/70 m-0;
}

.cta-container {
  @apply bg-gradient-to-r from-green-900/20 to-emerald-700/20 rounded-lg p-6 border border-green-600/20 text-center;
}

.cta-container h2 {
  @apply text-xl font-bold text-green-500 mb-2;
}

.cta-container p {
  @apply text-white/80 m-0;
}
</style>
