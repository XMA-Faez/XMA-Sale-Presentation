---
class: text-center
---

# Who We Are

<div class="relative h-full -mt-10">
  <!-- Section 1: Advertising Agency -->
  <div class="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2" v-click.hide="1">
    <div
      v-motion
      :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
      :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1 }"
      class="text-center text-4xl font-bold bg-gradient-to-r leading-[50px] from-red-600 to-red-500 bg-clip-text text-transparent"
    >
      Advertising Agency
    </div>
  </div>

  <!-- Section 2: In-House Team (Two-Column Layout) -->
  <div class="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
    <div class="flex flex-col md:flex-row gap-12 justify-center items-center">
      <!-- Left Column: Team Label -->
      <div class="flex-1">
        <div
          v-click="1"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1 }"
          class="text-3xl font-bold text-center"
        >
          <span class="text-red-600">15</span> In-House<br/>Professionals
        </div>
      </div>
      <!-- Right Column: Team Members -->
      <div class="flex-1 text-left grid grid-cols-2 gap-4">
        <div
          v-click="2"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-video class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Videographers</span>
        </div>
        <div
          v-click="3"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-clapperboard class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Video Editors</span>
        </div>
        <div
          v-click="4"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-code-2 class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Developers</span>
        </div>
        <div
          v-click="5"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-palette class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Graphic Designers</span>
        </div><div
          v-click="6"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-presentation class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Marketing Managers</span>
        </div><div
          v-click="7"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-megaphone class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Advertising Experts</span>
        </div>
      </div>
    </div>
  </div>
</div>

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

# Our Clients 

<ClientDirectory />
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
        <img src="/XMA-White.svg" alt="XMA Agency Logo" class="h-10 w-auto" />
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
        class="text-center flex flex-col items-center"
    >
        <div class="mb-3 flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
            <lucide-video class="w-8 h-8" />
        </div>
        <div class="text-center w-16">Video</div>
    </div>
    <div
        v-motion
        :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
        :enter="{ filter: 'blur(0px)', opacity: 1, y: 0, transition: { delay: 400 } }"
        :duration="500"
        class="text-center flex flex-col items-center"
    >
        <div class="mb-3 flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
            <lucide-bar-chart3 class="w-8 h-8" />
        </div>
        <div class="text-center w-16">Marketing</div>
    </div>
    <div
        v-motion
        :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
        :enter="{ filter: 'blur(0px)', opacity: 1, y: 0, transition: { delay: 600 } }"
        :duration="500"
        class="text-center flex flex-col items-center"
    >
        <div class="mb-3 flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
            <lucide-bot class="w-8 h-8" />
        </div>
        <div class="text-center w-16">CRM</div>
    </div>
    <div
        v-motion
        :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
        :enter="{ filter: 'blur(0px)', opacity: 1, y: 0, transition: { delay: 800 } }"
        :duration="500"
        class="text-center flex flex-col items-center"
    >
        <div class="mb-3 flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
            <lucide-zap class="w-8 h-8" />
        </div>
        <div class="text-center w-16">Performance</div>
    </div>
</div>
</div>
---
layout: none
---

<script setup>
const meetings = [
  {
    week: 'Week 1',
    meeting: 'Kickoff Meeting',
    duration: '90 minutes',
    agenda: [
      'Company & brand deep-dive',
      'Content strategy discussion',
      'Timeline confirmation',
      'Required materials checklist',
      'CRM requirements gathering'
    ],
    deliverables: 'Brand questionnaire, content brief, timeline document'
  },
  {
    week: 'Week 1',
    meeting: 'Content Strategy Session',
    duration: '60 minutes',
    agenda: [
      'Video concepts presentation',
      'Hook variations discussion',
      'Shot list review',
      'Location/talent requirements',
      'Filming schedule confirmation'
    ],
    deliverables: 'Content plan, shoot schedule, requirements list'
  },
  {
    week: 'Week 2-3',
    meeting: 'Production Review',
    duration: '45 minutes',
    agenda: [
      'First draft review',
      'Feedback collection',
      'Hook variations approval',
      'CRM setup walkthrough',
      'Campaign strategy overview'
    ],
    deliverables: 'Revision notes, CRM setup confirmation'
  },
  {
    week: 'Week 4',
    meeting: 'Launch Preparation',
    duration: '60 minutes',
    agenda: [
      'Final video approval',
      'Campaign settings review',
      'CRM/WhatsApp demo',
      'Launch timeline confirmation',
      'Success metrics setup'
    ],
    deliverables: 'Launch checklist, training documents'
  }
]
</script>

<div class="space-y-8 p-8 max-w-3xl mx-auto">
  <h1 class="text-3xl text-center font-bold"> Client Onboarding Journey</h1>
  <!-- Timeline -->
  <div v-for="meeting in meetings" class="bg-zinc-800/40 rounded-lg p-6">
    <div class="flex items-center gap-4 mb-4">
      <div class="bg-blue-500/20 text-blue-500 px-3 py-1 rounded text-sm font-medium">
        {{ meeting.week }}
      </div>
      <h3 class="text-xl font-bold">{{ meeting.meeting }}</h3>
      <div class="text-zinc-400 text-sm">{{ meeting.duration }}</div>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <div>
        <h4 class="text-base font-medium mb-3">Meeting Agenda</h4>
        <ul class="space-y-2">
          <li 
            v-for="item in meeting.agenda" 
            class="flex items-center !text-xs gap-2 text-zinc-300"
          >
            <div class="i-lucide-check-circle w-3 h-4 text-green-500" />
            {{ item }}
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-base font-medium mb-3">Key Deliverables</h4>
        <div class="bg-zinc-900/40 text-xs rounded text-zinc-300">
          {{ meeting.deliverables }}
        </div>
      </div>
    </div>
  </div>
</div>
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
  // {
  //   name: 'Ad Creation',
  //   price: '10,000',
  //   currency: 'AED',
  //   usdPrice: '2,700',
  //   popular: false,
  //   features: [
  //     { text: '20 Total Ads', bold: true, included: true, color: 'blue' },
  //     { text: '10 Static Ads', included: true, color: 'blue' },
  //     { text: '10 Video Ads', included: true, color: 'blue' },
  //   ]
  // },
  {
    name: 'CRM System',
    price: '5,000',
    currency: 'AED/year',
    usdPrice: '1,400',
    popular: false,
    features: [
      { text: 'Unlimited Users', included: true, color: 'green', bold: true },
      { text: 'Unlimited Contacts', included: true, color: 'green', bold: true },
      { text: 'Lead Management System', included: true, color: 'green' },
      { text: 'Automated Workflows', included: true, color: 'green' },
      { text: 'Reporting & Analytics', included: true, color: 'green' },
      { text: 'Integration with Ads', included: true, color: 'green' },
      { text: 'Training & Support', included: true, color: 'green' },
      { text: '14-Day Money Back Guarantee', included: true, bold: true, extraSpace: true }
    ]
  },
  {
    name: 'Lead Generator',
    price: '20,000',
    currency: 'AED',
    usdPrice: '5,500',
    popular: true,
    features: [
      { text: '20 Total Ads', bold: true, included: true, color: 'blue' },
      { text: '10 Static Ads', included: true, color: 'blue' },
      { text: '10 Video Ads', included: true, color: 'blue' },
      { text: 'CRM System Setup', included: true, color: 'green' },
      { text: 'Ad Campaigns Setup', included: true, color: 'yellow' },
      { text: '+1 Month Ad Management', bold: true, extraSpace: true }
    ]
  },
  {
    name: 'Lead Generator +',
    price: '35,000',
    currency: 'AED',
    usdPrice: '9,500',
    popular: false,
    features: [
      { text: '20 Total Ads', bold: true, included: true, color: 'blue' },
      { text: '10 Static Ads', included: true, color: 'blue' },
      { text: '10 Video Ads', included: true, color: 'blue' },
      { text: 'CRM System', included: true, color: 'green' },
      { text: 'Ad Campaign(s) Set-up', included: true, color: 'yellow' },
      { text: 'Sales Funnel Audit', included: true, color: 'yellow' },
      { text: 'Sales Automation', included: true, color: 'yellow' },
      { text: 'Lead Magnet Development', included: true, color: 'yellow' },
      { text: '+1 Month Ad Management', bold: true, extraSpace: true }
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
---
layout: center
class: text-center
---

<div class="flex flex-col items-center justify-center gap-8">
  <div
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: -50 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
  >
    <h1 class="text-6xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent mb-2">
      Let's Work Together
    </h1>
  </div>

  <div
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, transition: { delay: 200 } }"
    class="flex flex-col items-center gap-6"
  >
    <div class="text-2xl text-zinc-400">Transform Your Business with XMA Agency</div>
    <div class="flex items-center gap-8 mt-4">
      <div class="flex items-center gap-2">
        <lucide-phone class="w-6 h-6 text-red-500" />
        <span><a href="tel:+971503636856">+971 50 363 6856</a></span>
      </div>
      <div class="flex items-center gap-2">
        <lucide-mail class="w-6 h-6 text-red-500" />
        <span><a href="mailto:admin@xmaagency.com">admin@xmaagency.com</a></span>
      </div>
    </div>
  </div>

  <div 
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
    class="mt-8 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 backdrop-blur-sm"
  >
    <div class="text-xl">
      Ready to discuss your project? Let's schedule a call!
    </div>
  </div>

  <div 
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1, transition: { delay: 600 } }"
    class="absolute bottom-8 flex items-center gap-2 text-zinc-500"
  >
    <lucide-map-pin class="w-5 h-5" />
    <span>Dubai, UAE</span>
  </div>
</div>
---
layout: center
class: text-center
---

# Understanding Advertising

<div 
  v-motion
  :initial="{ opacity: 0, y: 100 }"
  :enter="{ opacity: 1, y: 0 }"
  class="text-2xl text-zinc-400 mt-4"
>
  The Truth About What Works
</div>

---
layout: center
---

<div class="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
  <div
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500"
  >
    <div class="flex gap-4 mb-4">
      <lucide-target class="w-8 h-8 text-yellow-500" />
      <h2 class="text-2xl font-bold">The Game of Advertising</h2>
    </div>
    <p class="text-zinc-300 !mb-8">Advertising is not about creativity or looking professional—it's about <span class="text-yellow-500 font-bold">results</span>.</p>
    <div class="space-y-3 !mb-8">
      <div 
        v-click
        class="flex items-start gap-3 !my-4"
      >
        <lucide-dollar-sign class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">You pay money to get your message in front of strangers</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3 !my-4"
      >
        <lucide-users class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Some percentage of those strangers become leads</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3 !my-4"
      >
        <lucide-shopping-cart class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Some percentage of those leads become customers</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3 !my-4"
      >
        <lucide-trending-up class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">The money you make must exceed what you spent</p>
      </div>
    </div>
    <div 
      v-click
      class="mt-6 bg-yellow-950/20 p-4 rounded-lg border border-yellow-900/30"
    >
      <p class="text-white font-bold !m-0">Success = Put $1 in, get $2+ back.</p>
    </div>
  </div>
</div>

---
layout: center
---

<div class="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
  <div
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500"
  >
    <div class="flex gap-4 mb-4">
      <lucide-lightbulb class="w-8 h-8 text-yellow-500" />
      <h2 class="text-2xl font-bold">The Truth About Ad Performance</h2>
    </div>
    <div 
      v-click
      class="bg-yellow-950/20 p-4 rounded-lg border border-yellow-900/30 mb-6"
    >
      <p class="text-white font-bold !m-0">REALITY: The question isn't whether ads work—it's how well you can make them work.</p>
    </div>
    <div class="space-y-4 !mb-8">
      <div 
        v-click
        class="flex items-start gap-3"
      >
        <lucide-eye class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Reach is guaranteed (you will get views)</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3"
      >
        <lucide-zap class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Response is earned (you must get attention)</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3"
      >
        <lucide-bar-chart-2 class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Results are a numbers game (test, optimize, scale)</p>
      </div>
    </div>
    <div 
      v-click
      class="mt-6 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
    >
      <p class="text-zinc-300 !m-0 italic">You're not buying customers, you're renting attention.</p>
    </div>
  </div>
</div>

--- 
layout: center 
zoom: 1.2
---

<div class="max-w-3xl mx-auto">
  <div class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 border border-zinc-800">
    <div class="flex gap-3 mb-4 items-center">
      <lucide-lightbulb class="w-8 h-8 text-yellow-500" />
      <h2 class="!text-2xl font-bold ">What Makes an Ad Successful?</h2>
    </div>
    <div class="bg-yellow-950/20 p-4 rounded-lg border border-yellow-900/30 mb-5">
      <p class="text-white font-bold !m-0">Getting attention is everything.</p>
    </div>
    <h3 class="!text-sm mb-3 font-semibold">
      If you don't capture it in the first 5 seconds:
    </h3>
    <div class="space-y-3">
      <div class="flex items-center gap-3 rounded-lg">
        <lucide-message-square-off class="w-4 h-4 text-red-500" />
        <p class="text-zinc-300 !m-0 !text-sm">Your message never gets delivered</p>
      </div>
      <div class="flex items-center gap-3 rounded-lg">
        <lucide-x-circle class="w-4 h-4 text-red-500" />
        <p class="text-zinc-300 !m-0 !text-sm">Your creative efforts go unseen</p>
      </div>
      <div class="flex items-center gap-3 rounded-lg">
        <lucide-alert-circle class="w-4 h-4 text-red-500" />
        <p class="text-zinc-300 !m-0 !text-sm">Your opportunity is missed</p>
      </div>
    </div>
  </div>
</div>


---
layout: center
---

<div class="max-w-3xl mx-auto">
  <div class="bg-zinc-900/50 rounded-lg p-8 transform transition duration-500 border border-zinc-800">
    <!-- Ad Structure Components Title -->
    <div class="flex gap-4 mb-4">
      <lucide-lightbulb class="w-8 h-8 text-yellow-500" />
      <h2 class="!text-2xl font-bold text-center mb-6">That's why the Hook determines 80% of your ad's success</h2>
    </div>
    <!-- Ad Components -->
    <div class="flex flex-col md:flex-row justify-center gap-6 mb-6">
      <div class="bg-yellow-950/20 p-4 rounded-lg border border-yellow-900/30 text-center w-full">
        <iconoir-fishing class="w-8 h-8 mx-auto mb-2 text-yellow-500" />
        <h4 class="font-bold text-white">The Hook</h4>
        <p class="text-white text-2xl font-bold">80%</p>
        <p class="text-xs text-yellow-300 mt-1">Grabs attention and stops the scroll</p>
      </div>
      <div class="bg-zinc-800/40 flex flex-col text-center p-4 rounded-lg border border-zinc-700 w-full">
        <lucide-package class="w-6 h-6 mx-auto mb-2 text-blue-500" />
        <h4 class="font-bold text-white">The Value</h4>
        <p class="text-white">15%</p>
        <p class="text-xs text-blue-300 mt-1 !m-0">Explains benefits and builds interest</p>
      </div>
      <div class="bg-zinc-800/40 flex flex-col text-center p-4 rounded-lg border border-zinc-700 w-full">
        <lucide-mouse-pointer-click class="w-6 h-6 mx-auto mb-2 text-green-500" />
        <h4 class="font-bold text-white">The Call to Action</h4>
        <p class="text-white">5%</p>
        <p class="text-xs text-green-300 mt-1 !m-0">Drives conversion and results</p>
      </div>
    </div>
  </div>
</div>

---
layout: center
zoom: 0.6
---

<div class="max-w-6xl mx-auto">
  <div class="flex items-center justify-center gap-4 mb-12">
    <lucide-play class="w-8 h-8 text-yellow-500" />
    <h1 class="text-3xl font-bold !m-0">Hook Variations in Action</h1>
  </div>
  
  <div class="grid grid-cols-3 gap-8">
    <!-- Video 1 -->
    <div class="flex flex-col items-center">
      <div class="aspect-[9/16] w-full bg-zinc-700 rounded-lg overflow-hidden">
        <video 
          class="w-full h-full object-cover"
          controls
          preload="metadata"
        >
          <source src="https://res.cloudinary.com/dw1j7izud/video/upload/v1751985102/qthpluu3htri9oqhdtbf.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <!-- Video 2 -->
    <div class="flex flex-col items-center">
      <div class="aspect-[9/16] w-full bg-zinc-700 rounded-lg overflow-hidden">
        <video 
          class="w-full h-full object-cover"
          controls
          preload="metadata"
        >
          <source src="https://res.cloudinary.com/dw1j7izud/video/upload/v1751985099/auzrduovnbg1ix85dwyo.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <!-- Video 3 -->
    <div class="flex flex-col items-center">
      <div class="aspect-[9/16] w-full bg-zinc-700 rounded-lg overflow-hidden">
        <video 
          class="w-full h-full object-cover"
          controls
          preload="metadata"
        >
          <source src="https://res.cloudinary.com/dw1j7izud/video/upload/v1751985090/qswiaoghsfener3onjd3.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</div>

---
layout: center
class: text-center
---

# Our Complete Process

<div class="process-summary">
  <div class="process-flow">
    <div v-click="1" class="process-step-summary">
      <div class="step-icon content-icon">
        <lucide-video class="w-8 h-8" />
      </div>
      <h3>Content Creation</h3>
    </div>
    <div v-click="2" class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div v-click="2" class="process-step-summary">
      <div class="step-icon crm-icon">
        <lucide-layout-dashboard class="w-8 h-8" />
      </div>
      <h3>CRM Setup</h3>
    </div>
    <div v-click="3" class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div v-click="3" class="process-step-summary">
      <div class="step-icon ads-icon">
        <lucide-megaphone class="w-8 h-8" />
      </div>
      <h3>Ads Campaign</h3>
    </div>
    <div v-click="4" class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div v-click="4" class="process-step-summary">
      <div class="step-icon leads-icon">
        <lucide-gauge class="w-8 h-8" />
      </div>
      <h3>Campaign Management</h3>
    </div>
  </div>
</div>


---
layout: center
class: text-center
---

<div class="process-header content-header">
  <div class="header-icon">
    <lucide-video class="w-10 h-10" />
  </div>
  <h1>Content Creation</h1>
  <p class="header-description">Crafting compelling visuals that convert</p>
</div>


---
layout: center
---

<div class="grid grid-cols-2 gap-8">
  <div
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex gap-4 mb-4">
      <lucide-message-square class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Information Gathering</h3>
    </div>
    <p class="text-zinc-300">We deeply understand your company, target audience, and brand identity</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-video class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Production</h3>
    </div>
    <p class="text-zinc-300">Professional video shoots crafted for maximum impact</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-edit class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Editing & Production</h3>
    </div>
    <p class="text-zinc-300">Polishing and perfecting your video content</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-check-circle class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Feedback Loop</h3>
    </div>
    <p class="text-zinc-300">Iterative refinement until complete satisfaction</p>
  </div>
</div>


---
src: ./VideoType.md
---

---
src: ./CRM.md
---

---
layout: center
class: text-center
---

<div class="process-header ads-header">
  <div class="header-icon">
    <lucide-megaphone class="w-10 h-10" />
  </div>
  <h1>Advertising</h1>
  <p class="header-description">Strategic campaigns that drive results</p>
</div>


---
layout: center
---

<div class="grid grid-cols-2 gap-8">
  <div
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-layout-dashboard class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Campaign Setup</h3>
    </div>
    <p class="text-zinc-300">Creating targeted ad campaigns on Meta platforms</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-target class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Audience Targeting</h3>
    </div>
    <p class="text-zinc-300">Defining and reaching your ideal customer segments</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-bar-chart class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Performance Tracking</h3>
    </div>
    <p class="text-zinc-300">Monitoring and optimizing campaign results</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-refresh-cw class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Continuous Optimization</h3>
    </div>
    <p class="text-zinc-300">Regular adjustments for maximum ROI</p>
  </div>
</div>


---
layout: center
class: text-center
---

<div class="process-header leads-header">
  <div class="header-icon">
    <lucide-gauge class="w-10 h-10" />
  </div>
  <h1>Campaign Management</h1>
  <p class="header-description">Optimizing your advertising performance</p>
</div>


---
layout: center
---

<div class="grid grid-cols-2 gap-8">
  <div
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-message-square class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">WhatsApp Marketing</h3>
    </div>
    <p class="text-zinc-300">Automated messaging campaigns to nurture leads and drive conversions</p>
  </div>
  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-activity class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">Campaign Monitoring</h3>
    </div>
    <p class="text-zinc-300">Real-time tracking and reporting on ad performance across platforms</p>
  </div>
  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-database class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">CRM Subscription</h3>
    </div>
    <p class="text-zinc-300">Ongoing access to powerful CRM tools to organize and utilize your leads</p>
  </div>
  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-refresh-cw class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">Content Refresh</h3>
    </div>
    <p class="text-zinc-300">Regular updates to your ad creative to prevent audience fatigue</p>
  </div>
</div>

---
layout: center
class: text-center
---

# Complete Digital Marketing Solution

<div class="process-summary">
  <div class="process-flow">
    <div class="process-step-summary">
      <div class="step-icon content-icon">
        <lucide-video class="w-8 h-8" />
      </div>
      <h3>Content Creation</h3>
    </div>
    <div class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div class="process-step-summary">
      <div class="step-icon crm-icon">
        <lucide-layout-dashboard class="w-8 h-8" />
      </div>
      <h3>CRM Setup</h3>
    </div>
    <div class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div class="process-step-summary">
      <div class="step-icon ads-icon">
        <lucide-megaphone class="w-8 h-8" />
      </div>
      <h3>Ads Campaign</h3>
    </div>
    <div class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div class="process-step-summary">
      <div class="step-icon leads-icon">
        <lucide-gauge class="w-10 h-10" />
      </div>
      <h3>Campaign Management</h3>
    </div>
  </div>
</div>

---
layout: center
zoom: 0.7
---

<FacebookROICalculator />
---
class: text-center
---

# Trusted By Leading Businesses
<div 
  v-motion
  :initial="{ opacity: 0, y: 100 }"
  :enter="{ opacity: 1, y: 0 }"
  :exit="{ opacity: 1, y: 0 }"
  class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
>
    <dl class="grid grid-cols-1 gap-8 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <div 
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1, transition: { delay: 200 } }"
          class="flex flex-col px-4 py-8 text-center bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-red-600/50"
        >
            <dd class="text-2xl font-extrabold text-red-600 md:text-4xl mb-4">
                <Ticker :value="50" :decimalPlaces="0" />+
            </dd>
            <dt class="text-base font-medium text-zinc-400">Total Clients</dt>
        </div>
        <div 
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1, transition: { delay: 400 } }"
          class="flex flex-col px-4 py-8 text-center bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-red-600/50"
        >
            <dd class="text-2xl font-extrabold text-red-600 md:text-4xl mb-4">
                <Ticker :value="30" decimalPlaces="0" />K+
            </dd>
            <dt class="text-base font-medium text-zinc-400">Leads Generated</dt>
        </div>
        <div 
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1, transition: { delay: 600 } }"
          class="flex flex-col px-4 py-8 text-center bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-red-600/50"
        >
            <dd class="text-2xl font-extrabold text-red-600 md:text-4xl mb-4">
                AED <Ticker :value="3" decimalPlaces="0" />M+
            </dd>
            <dt class="text-base font-medium text-zinc-400">Ad Budget Managed</dt>
        </div>
    </dl>
</div>

<div 
  v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 800 } }"
  class="relative mt-8"
>
    <Marquee
        class="[--duration:20s]"
    >
        <img src="/packman_Logo.png" class="h-12 duration-300 bg-white rounded-xl" />
        <img src="/Casapons.png" class="h-12 rounded-xl duration-300 bg-white rounded-xl" />
        <img src="/DXtreme.svg" class="h-12 rounded-xl duration-300 bg-white rounded-xl p-2" />
        <img src="/4Matic.jpg" class="h-12 rounded-xl duration-300 rounded-xl" />
        <img src="/wyz-logo.png" class="h-12 rounded-xl duration-300 bg-white rounded-xl p-2" />
        <img src="/Tick.webp" class="h-12 bg-white rounded-xl duration-300 p-2" />
        <img src="/ASUS.png" class="h-12 w-full rounded-xl bg-white rounded-xl duration-300" />
        <img src="/TFG.png" class="h-12 w-full rounded-xl bg-white rounded-xl duration-300" />
    </Marquee>
    <div class="pointer-events-none absolute inset-y-0 -left-0.5 w-1/3 bg-gradient-to-r from-[#0f0f0f]" />
    <div class="pointer-events-none absolute inset-y-0 -right-0.5 w-1/3 bg-gradient-to-l from-[#0f0f0f]" />
</div>

---
layout: center
class: text-center
---

<h1 class="gradient-heading">
  A-Z Marketing Solutions
</h1>

<div class="services-grid">
  <div
    v-click="1"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
    class="service-card"
  >
    <div class="service-content">
      <lucide-video class="service-icon"/>
      <h3 class="service-title">Content Creation</h3>
    </div>
  </div>
  
  <div
    v-click="2"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
    class="service-card"
  >
    <div class="service-content">
      <lucide-megaphone class="service-icon"/>
      <h3 class="service-title">Advertising</h3>
    </div>
  </div>
  
  <div
    v-click="3"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0,  }"
    class="service-card"
  >
    <div class="service-content">
      <lucide-layout-dashboard class="service-icon"/>
      <h3 class="service-title">CRM Solutions</h3>
    </div>
  </div>
  
  <div
    v-click="4"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0,  }"
    class="service-card"
  >
    <div class="service-content">
      <lucide-globe class="service-icon"/>
      <h3 class="service-title">Website Development</h3>
    </div>
  </div>
  
  <div
    v-click="5"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0,  }"
    class="service-card"
  >
    <div class="service-content">
      <lucide-bot class="service-icon"/>
      <h3 class="service-title">AI & Automation</h3>
    </div>
  </div>
  
  <div
    v-click="6"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0,  }"
    class="service-card"
  >
    <div class="service-content">
      <lucide-plus-circle class="service-icon"/>
      <h3 class="service-title">And More...</h3>
    </div>
  </div>
</div>

# Content Gallery

<ContentGallery />

---
class: text-center
---

# Who We Are

<div class="relative h-full -mt-10">
  <!-- Section 1: Advertising Agency -->
  <div class="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2" v-click.hide="1">
    <div
      v-motion
      :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
      :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1 }"
      class="text-center text-4xl font-bold bg-gradient-to-r leading-[50px] from-red-600 to-red-500 bg-clip-text text-transparent"
    >
      Advertising Agency
    </div>
  </div>

  <!-- Section 2: In-House Team (Two-Column Layout) -->
  <div class="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
    <div class="flex flex-col md:flex-row gap-12 justify-center items-center">
      <!-- Left Column: Team Label -->
      <div class="flex-1">
        <div
          v-click="1"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1 }"
          class="text-3xl font-bold text-center"
        >
          <span class="text-red-600">15</span> In-House<br/>Professionals
        </div>
      </div>
      <!-- Right Column: Team Members -->
      <div class="flex-1 text-left grid grid-cols-2 gap-4">
        <div
          v-click="2"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-video class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Videographers</span>
        </div>
        <div
          v-click="3"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-clapperboard class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Video Editors</span>
        </div>
        <div
          v-click="4"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-code-2 class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Developers</span>
        </div>
        <div
          v-click="5"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-palette class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Graphic Designers</span>
        </div><div
          v-click="6"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-presentation class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Marketing Managers</span>
        </div><div
          v-click="7"
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, x: 50 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, x: 0 }"
          class="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg backdrop-blur-sm transform hover:scale-105 border border-zinc-800 hover:border-red-600/50"
        >
          <lucide-megaphone class="w-6 h-6 text-red-500"/>
          <span class="text-sm">Advertising Experts</span>
        </div>
      </div>
    </div>
  </div>
</div>

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

# Our Clients 

<ClientDirectory />
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
        <img src="/XMA-White.svg" alt="XMA Agency Logo" class="h-10 w-auto" />
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
        class="text-center flex flex-col items-center"
    >
        <div class="mb-3 flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
            <lucide-video class="w-8 h-8" />
        </div>
        <div class="text-center w-16">Video</div>
    </div>
    <div
        v-motion
        :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
        :enter="{ filter: 'blur(0px)', opacity: 1, y: 0, transition: { delay: 400 } }"
        :duration="500"
        class="text-center flex flex-col items-center"
    >
        <div class="mb-3 flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
            <lucide-bar-chart3 class="w-8 h-8" />
        </div>
        <div class="text-center w-16">Marketing</div>
    </div>
    <div
        v-motion
        :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
        :enter="{ filter: 'blur(0px)', opacity: 1, y: 0, transition: { delay: 600 } }"
        :duration="500"
        class="text-center flex flex-col items-center"
    >
        <div class="mb-3 flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
            <lucide-bot class="w-8 h-8" />
        </div>
        <div class="text-center w-16">CRM</div>
    </div>
    <div
        v-motion
        :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
        :enter="{ filter: 'blur(0px)', opacity: 1, y: 0, transition: { delay: 800 } }"
        :duration="500"
        class="text-center flex flex-col items-center"
    >
        <div class="mb-3 flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
            <lucide-zap class="w-8 h-8" />
        </div>
        <div class="text-center w-16">Performance</div>
    </div>
</div>
</div>
---
layout: none
---

<script setup>
const meetings = [
  {
    week: 'Week 1',
    meeting: 'Kickoff Meeting',
    duration: '90 minutes',
    agenda: [
      'Company & brand deep-dive',
      'Content strategy discussion',
      'Timeline confirmation',
      'Required materials checklist',
      'CRM requirements gathering'
    ],
    deliverables: 'Brand questionnaire, content brief, timeline document'
  },
  {
    week: 'Week 1',
    meeting: 'Content Strategy Session',
    duration: '60 minutes',
    agenda: [
      'Video concepts presentation',
      'Hook variations discussion',
      'Shot list review',
      'Location/talent requirements',
      'Filming schedule confirmation'
    ],
    deliverables: 'Content plan, shoot schedule, requirements list'
  },
  {
    week: 'Week 2-3',
    meeting: 'Production Review',
    duration: '45 minutes',
    agenda: [
      'First draft review',
      'Feedback collection',
      'Hook variations approval',
      'CRM setup walkthrough',
      'Campaign strategy overview'
    ],
    deliverables: 'Revision notes, CRM setup confirmation'
  },
  {
    week: 'Week 4',
    meeting: 'Launch Preparation',
    duration: '60 minutes',
    agenda: [
      'Final video approval',
      'Campaign settings review',
      'CRM/WhatsApp demo',
      'Launch timeline confirmation',
      'Success metrics setup'
    ],
    deliverables: 'Launch checklist, training documents'
  }
]
</script>

<div class="space-y-8 p-8 max-w-3xl mx-auto">
  <h1 class="text-3xl text-center font-bold"> Client Onboarding Journey</h1>
  <!-- Timeline -->
  <div v-for="meeting in meetings" class="bg-zinc-800/40 rounded-lg p-6">
    <div class="flex items-center gap-4 mb-4">
      <div class="bg-blue-500/20 text-blue-500 px-3 py-1 rounded text-sm font-medium">
        {{ meeting.week }}
      </div>
      <h3 class="text-xl font-bold">{{ meeting.meeting }}</h3>
      <div class="text-zinc-400 text-sm">{{ meeting.duration }}</div>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <div>
        <h4 class="text-base font-medium mb-3">Meeting Agenda</h4>
        <ul class="space-y-2">
          <li 
            v-for="item in meeting.agenda" 
            class="flex items-center !text-xs gap-2 text-zinc-300"
          >
            <div class="i-lucide-check-circle w-3 h-4 text-green-500" />
            {{ item }}
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-base font-medium mb-3">Key Deliverables</h4>
        <div class="bg-zinc-900/40 text-xs rounded text-zinc-300">
          {{ meeting.deliverables }}
        </div>
      </div>
    </div>
  </div>
</div>
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
    name: 'Base',
    price: '8,000',
    currency: 'AED',
    usdPrice: '2,300',
    popular: false,
    features: [
      { text: '8 Total Ads', bold: true, included: true },
      { text: '5 Static Ads', included: true },
      { text: '3 Video Ads', included: true },
      { text: 'Ad Campaign(s) Set-up', included: true },
      { text: 'CRM', included: true },
      { text: 'WhatsApp Integration', included: true },
      { text: '+1 Month Free Ad Management', bold: true, extraSpace: true }
    ]
  },
  {
    name: 'Standard',
    price: '15,000',
    currency: 'AED',
    usdPrice: '4,500',
    popular: true,
    features: [
      { text: '18 Total Ads', bold: true, included: true },
      { text: '10 Static Ads', included: true },
      { text: '8 Video Ads', included: true },
      { text: 'Ad Campaign(s) Set-up', included: true },
      { text: 'CRM', included: true },
      { text: 'WhatsApp Integration', included: true },
      { text: '+1 Month Free Ad Management', bold: true, extraSpace: true }
    ]
  },
  {
    name: 'Premium',
    price: '25,000',
    currency: 'AED',
    usdPrice: '6,800',
    popular: false,
    features: [
      { text: '34 Total Ads', bold: true, included: true },
      { text: '20 Static Ads', included: true },
      { text: '14 Video Ads', included: true },
      { text: 'Ad Campaign(s) Set-up', included: true },
      { text: 'CRM', included: true },
      { text: 'WhatsApp Integration', included: true },
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
---
layout: center
class: text-center
---

<div class="flex flex-col items-center justify-center gap-8">
  <div
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: -50 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
  >
    <h1 class="text-6xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent mb-2">
      Let's Work Together
    </h1>
  </div>

  <div
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, transition: { delay: 200 } }"
    class="flex flex-col items-center gap-6"
  >
    <div class="text-2xl text-zinc-400">Transform Your Business with XMA Agency</div>
    <div class="flex items-center gap-8 mt-4">
      <div class="flex items-center gap-2">
        <lucide-phone class="w-6 h-6 text-red-500" />
        <span><a href="tel:+971503636856">+971 50 363 6856</a></span>
      </div>
      <div class="flex items-center gap-2">
        <lucide-mail class="w-6 h-6 text-red-500" />
        <span><a href="mailto:admin@xmaagency.com">admin@xmaagency.com</a></span>
      </div>
    </div>
  </div>

  <div 
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
    class="mt-8 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 backdrop-blur-sm"
  >
    <div class="text-xl">
      Ready to discuss your project? Let's schedule a call!
    </div>
  </div>

  <div 
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1, transition: { delay: 600 } }"
    class="absolute bottom-8 flex items-center gap-2 text-zinc-500"
  >
    <lucide-map-pin class="w-5 h-5" />
    <span>Dubai, UAE</span>
  </div>
</div>
---
layout: center
class: text-center
---

# Understanding Advertising

<div 
  v-motion
  :initial="{ opacity: 0, y: 100 }"
  :enter="{ opacity: 1, y: 0 }"
  class="text-2xl text-zinc-400 mt-4"
>
  The Truth About What Works
</div>

---
layout: center
---

<div class="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
  <div
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500"
  >
    <div class="flex gap-4 mb-4">
      <lucide-target class="w-8 h-8 text-yellow-500" />
      <h2 class="text-2xl font-bold">The Game of Advertising</h2>
    </div>
    <p class="text-zinc-300 !mb-8">Advertising is not about creativity or looking professional—it's about <span class="text-yellow-500 font-bold">results</span>.</p>
    <div class="space-y-3 !mb-8">
      <div 
        v-click
        class="flex items-start gap-3 !my-4"
      >
        <lucide-dollar-sign class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">You pay money to get your message in front of strangers</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3 !my-4"
      >
        <lucide-users class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Some percentage of those strangers become leads</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3 !my-4"
      >
        <lucide-shopping-cart class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Some percentage of those leads become customers</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3 !my-4"
      >
        <lucide-trending-up class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">The money you make must exceed what you spent</p>
      </div>
    </div>
    <div 
      v-click
      class="mt-6 bg-yellow-950/20 p-4 rounded-lg border border-yellow-900/30"
    >
      <p class="text-white font-bold !m-0">Success = Put $1 in, get $2+ back.</p>
    </div>
  </div>
</div>

---
layout: center
---

<div class="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
  <div
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500"
  >
    <div class="flex gap-4 mb-4">
      <lucide-lightbulb class="w-8 h-8 text-yellow-500" />
      <h2 class="text-2xl font-bold">The Truth About Ad Performance</h2>
    </div>
    <div 
      v-click
      class="bg-yellow-950/20 p-4 rounded-lg border border-yellow-900/30 mb-6"
    >
      <p class="text-white font-bold !m-0">REALITY: The question isn't whether ads work—it's how well you can make them work.</p>
    </div>
    <div class="space-y-4 !mb-8">
      <div 
        v-click
        class="flex items-start gap-3"
      >
        <lucide-eye class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Reach is guaranteed (you will get views)</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3"
      >
        <lucide-zap class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Response is earned (you must get attention)</p>
      </div>
      <div 
        v-click
        class="flex items-start gap-3"
      >
        <lucide-bar-chart-2 class="w-5 h-5 text-yellow-500 mt-0.5" />
        <p class="text-zinc-300 !m-0">Results are a numbers game (test, optimize, scale)</p>
      </div>
    </div>
    <div 
      v-click
      class="mt-6 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
    >
      <p class="text-zinc-300 !m-0 italic">You're not buying customers, you're renting attention.</p>
    </div>
  </div>
</div>

--- 
layout: center 
zoom: 1.2
---

<div class="max-w-3xl mx-auto">
  <div class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 border border-zinc-800">
    <div class="flex gap-3 mb-4 items-center">
      <lucide-lightbulb class="w-8 h-8 text-yellow-500" />
      <h2 class="!text-2xl font-bold ">What Makes an Ad Successful?</h2>
    </div>
    <div class="bg-yellow-950/20 p-4 rounded-lg border border-yellow-900/30 mb-5">
      <p class="text-white font-bold !m-0">Getting attention is everything.</p>
    </div>
    <h3 class="!text-sm mb-3 font-semibold">
      If you don't capture it in the first 5 seconds:
    </h3>
    <div class="space-y-3">
      <div class="flex items-center gap-3 rounded-lg">
        <lucide-message-square-off class="w-4 h-4 text-red-500" />
        <p class="text-zinc-300 !m-0 !text-sm">Your message never gets delivered</p>
      </div>
      <div class="flex items-center gap-3 rounded-lg">
        <lucide-x-circle class="w-4 h-4 text-red-500" />
        <p class="text-zinc-300 !m-0 !text-sm">Your creative efforts go unseen</p>
      </div>
      <div class="flex items-center gap-3 rounded-lg">
        <lucide-alert-circle class="w-4 h-4 text-red-500" />
        <p class="text-zinc-300 !m-0 !text-sm">Your opportunity is missed</p>
      </div>
    </div>
  </div>
</div>


---
layout: center
---

<div class="max-w-3xl mx-auto">
  <div class="bg-zinc-900/50 rounded-lg p-8 transform transition duration-500 border border-zinc-800">
    <!-- Ad Structure Components Title -->
    <div class="flex gap-4 mb-4">
      <lucide-lightbulb class="w-8 h-8 text-yellow-500" />
      <h2 class="!text-2xl font-bold text-center mb-6">That's why the Hook determines 80% of your ad's success</h2>
    </div>
    <!-- Ad Components -->
    <div class="flex flex-col md:flex-row justify-center gap-6 mb-6">
      <div class="bg-yellow-950/20 p-4 rounded-lg border border-yellow-900/30 text-center w-full">
        <iconoir-fishing class="w-8 h-8 mx-auto mb-2 text-yellow-500" />
        <h4 class="font-bold text-white">The Hook</h4>
        <p class="text-white text-2xl font-bold">80%</p>
        <p class="text-xs text-yellow-300 mt-1">Grabs attention and stops the scroll</p>
      </div>
      <div class="bg-zinc-800/40 flex flex-col text-center p-4 rounded-lg border border-zinc-700 w-full">
        <lucide-package class="w-6 h-6 mx-auto mb-2 text-blue-500" />
        <h4 class="font-bold text-white">The Value</h4>
        <p class="text-white">15%</p>
        <p class="text-xs text-blue-300 mt-1 !m-0">Explains benefits and builds interest</p>
      </div>
      <div class="bg-zinc-800/40 flex flex-col text-center p-4 rounded-lg border border-zinc-700 w-full">
        <lucide-mouse-pointer-click class="w-6 h-6 mx-auto mb-2 text-green-500" />
        <h4 class="font-bold text-white">The Call to Action</h4>
        <p class="text-white">5%</p>
        <p class="text-xs text-green-300 mt-1 !m-0">Drives conversion and results</p>
      </div>
    </div>
  </div>
</div>

---
layout: center
class: text-center
---

# Our Complete Process

<div class="process-summary">
  <div class="process-flow">
    <div v-click="1" class="process-step-summary">
      <div class="step-icon content-icon">
        <lucide-video class="w-8 h-8" />
      </div>
      <h3>Content Creation</h3>
    </div>
    <div v-click="2" class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div v-click="2" class="process-step-summary">
      <div class="step-icon crm-icon">
        <lucide-layout-dashboard class="w-8 h-8" />
      </div>
      <h3>CRM Setup</h3>
    </div>
    <div v-click="3" class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div v-click="3" class="process-step-summary">
      <div class="step-icon ads-icon">
        <lucide-megaphone class="w-8 h-8" />
      </div>
      <h3>Ads Campaign</h3>
    </div>
    <div v-click="4" class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div v-click="4" class="process-step-summary">
      <div class="step-icon leads-icon">
        <lucide-gauge class="w-8 h-8" />
      </div>
      <h3>Campaign Management</h3>
    </div>
  </div>
</div>


---
layout: center
class: text-center
---

<div class="process-header content-header">
  <div class="header-icon">
    <lucide-video class="w-10 h-10" />
  </div>
  <h1>Content Creation</h1>
  <p class="header-description">Crafting compelling visuals that convert</p>
</div>


---
layout: center
---

<div class="grid grid-cols-2 gap-8">
  <div
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex gap-4 mb-4">
      <lucide-message-square class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Information Gathering</h3>
    </div>
    <p class="text-zinc-300">We deeply understand your company, target audience, and brand identity</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-video class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Production</h3>
    </div>
    <p class="text-zinc-300">Professional video shoots crafted for maximum impact</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-edit class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Editing & Production</h3>
    </div>
    <p class="text-zinc-300">Polishing and perfecting your video content</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-check-circle class="w-6 h-6 text-blue-500" />
      <h3 class="text-xl font-bold">Feedback Loop</h3>
    </div>
    <p class="text-zinc-300">Iterative refinement until complete satisfaction</p>
  </div>
</div>


---
src: ./VideoType.md
---

---
src: ./CRM.md
---

---
layout: center
class: text-center
---

<div class="process-header ads-header">
  <div class="header-icon">
    <lucide-megaphone class="w-10 h-10" />
  </div>
  <h1>Advertising</h1>
  <p class="header-description">Strategic campaigns that drive results</p>
</div>


---
layout: center
---

<div class="grid grid-cols-2 gap-8">
  <div
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-layout-dashboard class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Campaign Setup</h3>
    </div>
    <p class="text-zinc-300">Creating targeted ad campaigns on Meta platforms</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-target class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Audience Targeting</h3>
    </div>
    <p class="text-zinc-300">Defining and reaching your ideal customer segments</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-bar-chart class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Performance Tracking</h3>
    </div>
    <p class="text-zinc-300">Monitoring and optimizing campaign results</p>
  </div>

  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-refresh-cw class="w-6 h-6 text-yellow-500" />
      <h3 class="text-xl font-bold">Continuous Optimization</h3>
    </div>
    <p class="text-zinc-300">Regular adjustments for maximum ROI</p>
  </div>
</div>


---
layout: center
class: text-center
---

<div class="process-header leads-header">
  <div class="header-icon">
    <lucide-gauge class="w-10 h-10" />
  </div>
  <h1>Campaign Management</h1>
  <p class="header-description">Optimizing your advertising performance</p>
</div>


---
layout: center
---

<div class="grid grid-cols-2 gap-8">
  <div
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-message-square class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">WhatsApp Marketing</h3>
    </div>
    <p class="text-zinc-300">Automated messaging campaigns to nurture leads and drive conversions</p>
  </div>
  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-activity class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">Campaign Monitoring</h3>
    </div>
    <p class="text-zinc-300">Real-time tracking and reporting on ad performance across platforms</p>
  </div>
  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-database class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">CRM Subscription</h3>
    </div>
    <p class="text-zinc-300">Ongoing access to powerful CRM tools to organize and utilize your leads</p>
  </div>
  <div
    v-click
    class="bg-zinc-900/50 rounded-lg p-6 transform transition duration-500 hover:scale-105"
  >
    <div class="flex items-center gap-4 mb-4">
      <lucide-refresh-cw class="w-6 h-6 text-red-500" />
      <h3 class="text-xl font-bold">Content Refresh</h3>
    </div>
    <p class="text-zinc-300">Regular updates to your ad creative to prevent audience fatigue</p>
  </div>
</div>

---
layout: center
class: text-center
---

# Complete Digital Marketing Solution

<div class="process-summary">
  <div class="process-flow">
    <div class="process-step-summary">
      <div class="step-icon content-icon">
        <lucide-video class="w-8 h-8" />
      </div>
      <h3>Content Creation</h3>
    </div>
    <div class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div class="process-step-summary">
      <div class="step-icon crm-icon">
        <lucide-layout-dashboard class="w-8 h-8" />
      </div>
      <h3>CRM Setup</h3>
    </div>
    <div class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div class="process-step-summary">
      <div class="step-icon ads-icon">
        <lucide-megaphone class="w-8 h-8" />
      </div>
      <h3>Ads Campaign</h3>
    </div>
    <div class="process-arrow">
      <lucide-arrow-right class="w-8 h-8 text-white/50" />
    </div>
    <div class="process-step-summary">
      <div class="step-icon leads-icon">
        <lucide-gauge class="w-10 h-10" />
      </div>
      <h3>Campaign Management</h3>
    </div>
  </div>
</div>

---
layout: center
zoom: 0.7
---

<FacebookROICalculator />
---
class: text-center
---

# Trusted By Leading Businesses
<div 
  v-motion
  :initial="{ opacity: 0, y: 100 }"
  :enter="{ opacity: 1, y: 0 }"
  :exit="{ opacity: 1, y: 0 }"
  class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
>
    <dl class="grid grid-cols-1 gap-8 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <div 
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1, transition: { delay: 200 } }"
          class="flex flex-col px-4 py-8 text-center bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-red-600/50"
        >
            <dd class="text-2xl font-extrabold text-red-600 md:text-4xl mb-4">
                <Ticker :value="50" :decimalPlaces="0" />+
            </dd>
            <dt class="text-base font-medium text-zinc-400">Total Clients</dt>
        </div>
        <div 
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1, transition: { delay: 400 } }"
          class="flex flex-col px-4 py-8 text-center bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-red-600/50"
        >
            <dd class="text-2xl font-extrabold text-red-600 md:text-4xl mb-4">
                <Ticker :value="30" decimalPlaces="0" />K+
            </dd>
            <dt class="text-base font-medium text-zinc-400">Leads Generated</dt>
        </div>
        <div 
          v-motion
          :initial="{ filter: 'blur(12px)', opacity: 0, scale: 0.8 }"
          :enter="{ filter: 'blur(0px)', opacity: 1, scale: 1, transition: { delay: 600 } }"
          class="flex flex-col px-4 py-8 text-center bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-red-600/50"
        >
            <dd class="text-2xl font-extrabold text-red-600 md:text-4xl mb-4">
                AED <Ticker :value="3" decimalPlaces="0" />M+
            </dd>
            <dt class="text-base font-medium text-zinc-400">Ad Budget Managed</dt>
        </div>
    </dl>
</div>

<div 
  v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 800 } }"
  class="relative mt-8"
>
    <Marquee
        class="[--duration:20s]"
    >
        <img src="/packman_Logo.png" class="h-12 duration-300 bg-white rounded-xl" />
        <img src="/Casapons.png" class="h-12 rounded-xl duration-300 bg-white rounded-xl" />
        <img src="/DXtreme.svg" class="h-12 rounded-xl duration-300 bg-white rounded-xl p-2" />
        <img src="/4Matic.jpg" class="h-12 rounded-xl duration-300 rounded-xl" />
        <img src="/wyz-logo.png" class="h-12 rounded-xl duration-300 bg-white rounded-xl p-2" />
        <img src="/Tick.webp" class="h-12 bg-white rounded-xl duration-300 p-2" />
        <img src="/ASUS.png" class="h-12 w-full rounded-xl bg-white rounded-xl duration-300" />
        <img src="/TFG.png" class="h-12 w-full rounded-xl bg-white rounded-xl duration-300" />
    </Marquee>
    <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0f0f0f] dark:from-background" />
    <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0f0f0f] dark:from-background" />
</div>

---
layout: center
class: text-center
---

<h1 class="gradient-heading">
  A-Z Marketing Solutions
</h1>

<div class="services-grid">
  <div
    v-click="1"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
    class="service-card"
  >
    <div class="service-content">
      <lucide-video class="service-icon"/>
      <h3 class="service-title">Content Creation</h3>
    </div>
  </div>
  
  <div
    v-click="2"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
    class="service-card"
  >
    <div class="service-content">
      <lucide-megaphone class="service-icon"/>
      <h3 class="service-title">Advertising</h3>
    </div>
  </div>
  
  <div
    v-click="3"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0,  }"
    class="service-card"
  >
    <div class="service-content">
      <lucide-layout-dashboard class="service-icon"/>
      <h3 class="service-title">CRM Solutions</h3>
    </div>
  </div>
  
  <div
    v-click="4"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0,  }"
    class="service-card"
  >
    <div class="service-content">
      <lucide-globe class="service-icon"/>
      <h3 class="service-title">Website Development</h3>
    </div>
  </div>
  
  <div
    v-click="5"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0,  }"
    class="service-card"
  >
    <div class="service-content">
      <lucide-bot class="service-icon"/>
      <h3 class="service-title">AI & Automation</h3>
    </div>
  </div>
  
  <div
    v-click="6"
    v-motion
    :initial="{ filter: 'blur(12px)', opacity: 0, y: 20 }"
    :enter="{ filter: 'blur(0px)', opacity: 1, y: 0,  }"
    class="service-card"
  >
    <div class="service-content">
      <lucide-plus-circle class="service-icon"/>
      <h3 class="service-title">And More...</h3>
    </div>
  </div>
</div>

# Content Gallery

<ContentGallery />

