---
layout: none
---

<script setup>
const meetings = [
  {
    week: 'Week 1',
    meeting: 'Kickoff Call',
    duration: '60 minutes',
    agenda: [
      'Property focus & target audience',
      'Current marketing review',
      'Goals & success metrics',
      'CRM setup & training'
    ],
    deliverables: 'Strategy document, CRM access, pipeline configured'
  },
  {
    week: 'Week 2',
    meeting: 'Campaign Build',
    duration: '45 minutes',
    agenda: [
      'Ad creative review',
      'Audience targeting confirmation',
      'Campaign structure walkthrough',
      'Budget allocation strategy'
    ],
    deliverables: 'Ad creatives approved, audiences built'
  },
  {
    week: 'Week 3',
    meeting: 'Launch & Review',
    duration: '45 minutes',
    agenda: [
      'Campaign launch confirmation',
      'CRM demo & best practices',
      'Lead response workflow',
      'Reporting dashboard setup'
    ],
    deliverables: 'Live campaigns, reporting access, response templates'
  }
]
</script>

<div class="space-y-8 p-8 max-w-3xl mx-auto">
  <h1 class="text-3xl text-center font-bold">What Happens After You Say Yes</h1>
  <div v-for="meeting in meetings" class="bg-zinc-800/40 rounded-lg p-6">
    <div class="flex items-center gap-4 mb-4">
      <div class="bg-red-500/20 text-red-500 px-3 py-1 rounded text-sm font-medium">
        {{ meeting.week }}
      </div>
      <h3 class="text-xl font-bold">{{ meeting.meeting }}</h3>
      <div class="text-zinc-400 text-sm">{{ meeting.duration }}</div>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <div>
        <h4 class="text-base font-medium mb-3">What We Cover</h4>
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
        <h4 class="text-base font-medium mb-3">What You Get</h4>
        <div class="bg-zinc-900/40 text-xs rounded text-zinc-300">
          {{ meeting.deliverables }}
        </div>
      </div>
    </div>
  </div>
</div>
