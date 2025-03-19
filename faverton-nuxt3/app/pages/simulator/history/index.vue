<script setup lang="ts">
import CalcSimulationHistory from '~/components/calc/simulation/history/CalcSimulationHistory.vue';

definePageMeta({
  middleware: [`auth`],
});
</script>

<template>
  <div>
    <CalcSimulationHistory />
  </div>
</template>
