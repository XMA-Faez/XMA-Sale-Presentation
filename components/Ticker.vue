<template>
  <span ref="spanRef" :class="cn('inline-block tabular-nums text-red-600 tracking-wider', props.class)">
    {{ output }}
  </span>
</template>

<script setup lang="ts">
import { TransitionPresets, useTransition, useElementVisibility } from "@vueuse/core";
import { cn } from "../lib/utils";
import { ref, computed, watch } from 'vue'

type TransitionsPresetsKeys = keyof typeof TransitionPresets;

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  duration?: number;
  delay?: number;
  decimalPlaces?: number;
  class?: string;
  transition?: TransitionsPresetsKeys;
}

const spanRef = ref<HTMLSpanElement>();

const props = withDefaults(defineProps<NumberTickerProps>(), {
  value: 0,
  direction: "up",
  delay: 0,
  duration: 1000,
  decimalPlaces: 2,
  transition: "easeOutCubic",
});

const transitionValue = ref(props.direction === "down" ? props.value : 0);

const transitionOutput = useTransition(transitionValue, {
  delay: props.delay,
  duration: props.duration,
  transition: TransitionPresets[props.transition],
});

const output = computed(() => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: props.decimalPlaces,
    maximumFractionDigits: props.decimalPlaces,
  }).format(Number(transitionOutput.value.toFixed(props.decimalPlaces)));
});

const isInView = useElementVisibility(spanRef, {
  threshold: 0,
});

watch(
  isInView,
  (isVisible) => {
    if (isVisible) {
      transitionValue.value = props.direction === "down" ? 0 : props.value;
    }
  },
  { immediate: true },
);
</script>
