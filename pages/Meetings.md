# Client Onboarding Journey

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

<div class="space-y-8">
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
        <h4 class="text-lg font-medium mb-3">Meeting Agenda</h4>
        <ul class="space-y-2">
          <li 
            v-for="item in meeting.agenda" 
            class="flex items-center gap-2 text-zinc-300"
          >
            <div class="i-lucide-check-circle w-4 h-4 text-green-500" />
            {{ item }}
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-lg font-medium mb-3">Key Deliverables</h4>
        <div class="bg-zinc-900/40 rounded p-4 text-zinc-300">
          {{ meeting.deliverables }}
        </div>
      </div>
    </div>
  </div>
</div>

---

# Between the Meetings

<div class="grid grid-cols-2 gap-8">
  <div class="space-y-6">
    <div class="bg-purple-500/10 rounded-lg p-6">
      <div class="flex items-center gap-4 mb-4">
        <div class="i-lucide-file-check w-6 h-6 text-purple-500" />
        <h3 class="text-xl font-bold">Client Tasks</h3>
      </div>
      <ul class="space-y-3">
        <li class="flex items-center gap-2 text-zinc-300">
          <div class="i-lucide-arrow-right w-4 h-4" />
          Complete brand questionnaire (24h)
        </li>
        <li class="flex items-center gap-2 text-zinc-300">
          <div class="i-lucide-arrow-right w-4 h-4" />
          Provide brand assets & guidelines (48h)
        </li>
        <li class="flex items-center gap-2 text-zinc-300">
          <div class="i-lucide-arrow-right w-4 h-4" />
          Review & approve concepts (48h)
        </li>
        <li class="flex items-center gap-2 text-zinc-300">
          <div class="i-lucide-arrow-right w-4 h-4" />
          Provide video feedback (48h per round)
        </li>
      </ul>
    </div>
    <div class="bg-blue-500/10 rounded-lg p-6">
      <div class="flex items-center gap-4 mb-4">
        <div class="i-lucide-bell w-6 h-6 text-blue-500" />
        <h3 class="text-xl font-bold">Communication Schedule</h3>
      </div>
      <ul class="space-y-3">
        <li class="flex items-center gap-2 text-zinc-300">
          <div class="i-lucide-check w-4 h-4" />
          Weekly progress updates via email
        </li>
        <li class="flex items-center gap-2 text-zinc-300">
          <div class="i-lucide-check w-4 h-4" />
          48h response time guarantee
        </li>
        <li class="flex items-center gap-2 text-zinc-300">
          <div class="i-lucide-check w-4 h-4" />
          WhatsApp for urgent communications
        </li>
      </ul>
    </div>
  </div>
  <div class="space-y-6">
    <div class="bg-green-500/10 rounded-lg p-6">
      <div class="flex items-center gap-4 mb-4">
        <div class="i-lucide-list-checks w-6 h-6 text-green-500" />
        <h3 class="text-xl font-bold">Our Process</h3>
      </div>
      <ul class="space-y-3">
        <li class="flex items-center gap-2 text-zinc-300">
          <div class="i-lucide-arrow-right w-4 h-4" />
          Content strategy development (3 days)
        </li>
        <li class="flex items-center gap-2 text-zinc-300">
          <div class="i-lucide-arrow-right w-4 h-4" />
          Video production & editing (2-3 weeks)
        </li>
        <li class="flex items-center gap-2 text-zinc-300">
          <div class="i-lucide-arrow-right w-4 h-4" />
          CRM setup & integration (1 day)
        </li>
        <li class="flex items-center gap-2 text-zinc-300">
          <div class="i-lucide-arrow-right w-4 h-4" />
          Campaign setup & optimization (1 day)
        </li>
      </ul>
    </div>
    <div class="bg-yellow-500/10 rounded-lg p-6">
      <div class="flex items-center gap-4 mb-4">
        <div class="i-lucide-shield-check w-6 h-6 text-yellow-500" />
        <h3 class="text-xl font-bold">Quality Assurance</h3>
      </div>
      <ul class="space-y-3">
        <li class="flex items-center gap-2 text-zinc-300">
          <div class="i-lucide-check w-4 h-4" />
          Internal review before client preview
        </li>
        <li class="flex items-center gap-2 text-zinc-300">
          <div class="i-lucide-check w-4 h-4" />
          Maximum 3 revision rounds
        </li>
        <li class="flex items-center gap-2 text-zinc-300">
          <div class="i-lucide-check w-4 h-4" />
          Pre-launch technical validation
        </li>
      </ul>
    </div>
  </div>
</div>
