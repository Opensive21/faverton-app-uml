<script setup lang="ts">
import type { AmountEurosPerYear } from "~~/shared/types/amount-euros-per-year";

const props = defineProps<{
  amountPerYear?: AmountEurosPerYear | null
}>();

const amountEurosPerYear = computed<AmountEurosPerYear | null>(() => props.amountPerYear ? props.amountPerYear as AmountEurosPerYear : null);
</script>

<template>
  <div class="bg-blue-50 p-6 rounded-lg shadow-md">
    <div

      class="grid grid-cols-3 gap-4"
    >
      <div class="text-center">
        <h3 class="font-bold flex flex-col text-xl text-blue-600">
          <UIcon
            name="i-solar-pie-chart-bold"
            class="h-8 w-8 mx-auto text-blue-600 mb-2"
          />
          Production Annuelle
        </h3>
        <p class="text-2xl font-semibold">
          {{ amountEurosPerYear?.yearlyEnergy?.toFixed(2) }} kWh
        </p>
      </div>
      <div class="text-center">
        <h3 class="font-bold flex flex-col text-xl text-green-600">
          <UIcon
            name="i-solar-ruler-pen-outline"
            class="h-8 w-8 mx-auto text-green-600 mb-2"
          />
          Surface Toiture
        </h3>
        <p class="text-2xl font-semibold">
          {{ amountEurosPerYear?.surfaceArea }} m²
        </p>
      </div>
      <div class="text-center">
        <h3 class="font-bold flex flex-col text-xl text-emerald-600">
          <UIcon
            name="i-solar-wallet-money-linear"
            class="h-8 w-8 mx-auto text-green-600 mb-2"
          />
          Revenus annuels estimés
        </h3>
        <p class="text-2xl font-semibold">
          {{ amountEurosPerYear?.amountEurosPerYear?.toFixed(2) }} €/an
        </p>
      </div>
    </div>
  </div>
</template>
