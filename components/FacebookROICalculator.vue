<!-- FacebookROICalculator.vue -->
<template>
  <div class="bg-zinc-900 rounded-lg border border-zinc-800 text-white absolute inset-24">
    <h2 class="text-2xl font-bold text-center py-4 bg-gradient-to-r border-b border-zinc-800">Ads ROI Calculator</h2>
    
    <div class="flex flex-row h-[500px]">
      <!-- Left Column (Inputs) - Fixed -->
      <div class="w-1/3 p-6 border-r border-zinc-800 h-full">
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-zinc-400 mb-1">Monthly Ad Budget (AED)</label>
            <input
              type="number"
              v-model="adBudget"
              class="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-white"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-zinc-400 mb-1">Initial Investment with XMA (AED)</label>
            <input
              type="number"
              v-model="initialInvestment"
              class="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-white"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-zinc-400 mb-1">Cost Per Lead (AED)</label>
            <input
              type="number"
              v-model="costPerLead"
              class="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-white"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-zinc-400 mb-1">Average Customer Value (AED)</label>
            <input
              type="number"
              v-model="ticketSize"
              class="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-white"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-zinc-400 mb-1">Conversion Rate: {{ conversionRate }}%</label>
            <input
              type="range"
              min="1"
              max="30"
              v-model="conversionRate"
              class="w-full accent-red-600"
            />
            <div class="flex justify-between text-xs text-zinc-500">
              <span>1%</span>
              <span>30%</span>
            </div>
          </div>

        </div>
      </div>
      
      <!-- Right Column (Results) - Scrollable -->
      <div class="w-2/3 p-6 overflow-y-auto h-full">

        <div class="space-y-8">
          <!-- Monthly Performance Details -->
          <div class="bg-zinc-800/50 rounded-lg p-4 space-y-4">
            <h3 class="text-lg font-semibold ">First Month Performance</h3>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                <div class="text-sm text-zinc-400">Leads Generated</div>
                <div class="text-2xl font-bold">{{ leadsGenerated }}</div>
              </div>
              
              <div class="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                <div class="text-sm text-zinc-400">Customers Acquired</div>
                <div class="text-2xl font-bold">{{ customersAcquired }}</div>
              </div>
              
              <div class="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                <div class="text-sm text-zinc-400">Revenue</div>
                <div class="text-2xl font-bold">AED {{ formatNumber(revenue) }}</div>
              </div>
              
              <div class="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                <div class="text-sm text-zinc-400">Total Investment</div>
                <div class="text-2xl font-bold">AED {{ formatNumber(totalInvestment) }}</div>
              </div>
              
              <div class="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                <div class="text-sm text-zinc-400">Net Profit</div>
                <div class="text-2xl font-bold" :class="netProfit >= 0 ? 'text-green-500' : 'text-red-500'">
                  AED {{ formatNumber(netProfit) }}
                </div>
              </div>
              
              <div class="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                <div class="text-sm text-zinc-400">ROI</div>
                <div class="text-2xl font-bold" :class="roi >= 0 ? 'text-green-500' : 'text-red-500'">
                  {{ roi.toFixed(1) }}%
                </div>
              </div>
            </div>
          </div>

          <!-- Revenue Growth vs Investment (Visual Comparison) -->
          <!-- <div> -->
          <!--   <h3 class="text-lg font-semibold mb-4">Revenue vs. Investment</h3> -->
          <!--   <div class="space-y-4"> -->
          <!--     <div class="space-y-2"> -->
          <!--       <div class="flex items-center justify-between"> -->
          <!--         <div> -->
          <!--           <span class="text-sm font-semibold inline-block text-white"> -->
          <!--             Revenue (AED {{ formatNumber(graphData[graphData.length - 1].cumulativeRevenue) }}) -->
          <!--           </span> -->
          <!--         </div> -->
          <!--       </div> -->
          <!--       <div class="overflow-hidden h-6 text-xs flex rounded bg-zinc-800"> -->
          <!--         <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500 rounded"></div> -->
          <!--       </div> -->
          <!--     </div> -->
          <!--      -->
          <!--     <div class="space-y-2"> -->
          <!--       <div class="flex items-center justify-between"> -->
          <!--         <div> -->
          <!--           <span class="text-sm font-semibold inline-block text-white"> -->
          <!--             Investment (AED {{ formatNumber(graphData[graphData.length - 1].cumulativeInvestment) }}) -->
          <!--           </span> -->
          <!--         </div> -->
          <!--       </div> -->
          <!--       <div class="overflow-hidden h-6 text-xs flex rounded bg-zinc-800"> -->
          <!--         <div :style="{ width: investmentPercentage + '%' }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-zinc-600 rounded"></div> -->
          <!--       </div> -->
          <!--     </div> -->
          <!--   </div> -->
          <!-- </div> -->

          <!-- Month by Month Performance -->
          <!-- <div> -->
          <!--   <h3 class="text-lg font-semibold mb-4">Month by Month Performance</h3> -->
          <!--   <div class="mb-4"> -->
          <!--     <bar-chart :chart-data="revenueVsInvestmentData" /> -->
          <!--   </div> -->
          <!--   <div class="space-y-4"> -->
          <!--     <div v-for="(item, index) in graphData" :key="index"  -->
          <!--         class="bg-zinc-800 p-4 rounded-lg border border-zinc-700"> -->
          <!--       <h4 class="text-md font-semibold mb-2">{{ item.name }}</h4> -->
          <!--       <div class="grid grid-cols-2 gap-4"> -->
          <!--         <div> -->
          <!--           <div class="text-sm text-zinc-400">Revenue</div> -->
          <!--           <div class="font-bold">AED {{ formatNumber(item.cumulativeRevenue) }}</div> -->
          <!--         </div> -->
          <!--         <div> -->
          <!--           <div class="text-sm text-zinc-400">Investment</div> -->
          <!--           <div class="font-bold">AED {{ formatNumber(item.cumulativeInvestment) }}</div> -->
          <!--         </div> -->
          <!--         <div> -->
          <!--           <div class="text-sm text-zinc-400">Profit</div> -->
          <!--           <div class="font-bold" :class="item.cumulativeProfit >= 0 ? 'text-green-500' : 'text-red-500'"> -->
          <!--             AED {{ formatNumber(item.cumulativeProfit) }} -->
          <!--           </div> -->
          <!--         </div> -->
          <!--         <div> -->
          <!--           <div class="text-sm text-zinc-400">ROI</div> -->
          <!--           <div class="font-bold" :class="item.cumulativeROI >= 0 ? 'text-green-500' : 'text-red-500'"> -->
          <!--             {{ item.cumulativeROI.toFixed(1) }}% -->
          <!--           </div> -->
          <!--         </div> -->
          <!--       </div> -->
          <!--       Progress bar showing ROI -->
          <!--       <div class="mt-3 space-y-1"> -->
          <!--         <div class="text-xs text-zinc-400">ROI Progress</div> -->
          <!--         <div class="overflow-hidden h-2 text-xs flex rounded bg-zinc-900"> -->
          <!--           <div  -->
          <!--             :style="{ width: `${Math.min(Math.max(item.cumulativeROI, 0), 100)}%` }"  -->
          <!--             class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500" -->
          <!--           ></div> -->
          <!--         </div> -->
          <!--       </div> -->
          <!--     </div> -->
          <!--   </div> -->
          <!-- </div> -->
          
          <!-- Projected Performance Table -->
          <!-- <div> -->
          <!--   <h3 class="text-lg font-semibold mb-4">Projected Performance (6 Months)</h3> -->
          <!--   <div class="overflow-x-auto"> -->
          <!--     <table class="min-w-full bg-zinc-800 rounded-lg"> -->
          <!--       <thead> -->
          <!--         <tr> -->
          <!--           <th class="py-2 px-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider border-b border-zinc-700">Month</th> -->
          <!--           <th class="py-2 px-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider border-b border-zinc-700">Revenue</th> -->
          <!--           <th class="py-2 px-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider border-b border-zinc-700">Investment</th> -->
          <!--           <th class="py-2 px-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider border-b border-zinc-700">Profit</th> -->
          <!--           <th class="py-2 px-4 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider border-b border-zinc-700">ROI</th> -->
          <!--         </tr> -->
          <!--       </thead> -->
          <!--       <tbody> -->
          <!--         <tr v-for="(item, index) in graphData" :key="index" :class="index % 2 === 0 ? 'bg-zinc-800' : 'bg-zinc-800/50'"> -->
          <!--           <td class="py-2 px-4 text-sm">{{ item.name }}</td> -->
          <!--           <td class="py-2 px-4 text-sm">AED {{ formatNumber(item.cumulativeRevenue) }}</td> -->
          <!--           <td class="py-2 px-4 text-sm">AED {{ formatNumber(item.cumulativeInvestment) }}</td> -->
          <!--           <td class="py-2 px-4 text-sm" :class="item.cumulativeProfit >= 0 ? 'text-green-500' : 'text-red-500'"> -->
          <!--             AED {{ formatNumber(item.cumulativeProfit) }} -->
          <!--           </td> -->
          <!--           <td class="py-2 px-4 text-sm" :class="item.cumulativeROI >= 0 ? 'text-green-500' : 'text-red-500'"> -->
          <!--             {{ item.cumulativeROI.toFixed(1) }}% -->
          <!--           </td> -->
          <!--         </tr> -->
          <!--       </tbody> -->
          <!--     </table> -->
          <!--   </div> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import BarChart from './BarChart.vue';

// Input states
const adBudget = ref(10000);
const initialInvestment = ref(15000);
const costPerLead = ref(50);
const ticketSize = ref(10000);
const conversionRate = ref(10);

// Calculated states
const leadsGenerated = computed(() => {
  return Math.round(adBudget.value / costPerLead.value);
});

const customersAcquired = computed(() => {
  return Math.round(leadsGenerated.value * (conversionRate.value / 100));
});

const revenue = computed(() => {
  return customersAcquired.value * ticketSize.value;
});

const totalInvestment = computed(() => {
  return Number(adBudget.value) + Number(initialInvestment.value);
});

const netProfit = computed(() => {
  return revenue.value - totalInvestment.value;
});

const roi = computed(() => {
  return totalInvestment.value > 0 ? (netProfit.value / totalInvestment.value) * 100 : 0;
});

// Investment percentage for progress bar
const investmentPercentage = computed(() => {
  const lastMonth = graphData.value[graphData.value.length - 1];
  return Math.min((lastMonth.cumulativeInvestment / lastMonth.cumulativeRevenue) * 100, 100);
});

// Graph data
const graphData = computed(() => {
  const months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'];
  return months.map((month, index) => {
    const monthlyLeads = leadsGenerated.value;
    const monthlyCustomers = customersAcquired.value;
    const monthlyRevenue = revenue.value;
    const monthlyInvestment = index === 0 ? totalInvestment.value : adBudget.value;
    const cumulativeRevenue = revenue.value;
    const cumulativeInvestment = Number(initialInvestment.value);
    const cumulativeProfit = cumulativeRevenue - cumulativeInvestment;
    const cumulativeROI = (cumulativeProfit / cumulativeInvestment) * 100;
    
    return {
      name: month,
      revenue: monthlyRevenue,
      investment: monthlyInvestment,
      cumulativeRevenue,
      cumulativeInvestment,
      cumulativeProfit,
      cumulativeROI,
      leads: monthlyLeads,
      customers: monthlyCustomers
    };
  });
});

// Helper function
const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(Math.round(num));
};


// Chart data
const revenueVsInvestmentData = computed(() => {
  return {
    labels: graphData.value.map(item => item.name),
    datasets: [
      {
        label: 'Cumulative Revenue',
        backgroundColor: 'rgba(239, 68, 68, 0.7)',
        data: graphData.value.map(item => item.cumulativeRevenue)
      },
      {
        label: 'Cumulative Investment',
        backgroundColor: 'rgba(107, 114, 128, 0.7)',
        data: graphData.value.map(item => item.cumulativeInvestment)
      }
    ]
  };
});

const roiOverTimeData = computed(() => {
  return {
    labels: graphData.value.map(item => item.name),
    datasets: [
      {
        label: 'Cumulative ROI %',
        borderColor: 'rgba(239, 68, 68, 0.7)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        data: graphData.value.map(item => item.cumulativeROI)
      }
    ]
  };
});
</script>
