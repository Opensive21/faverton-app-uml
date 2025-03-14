<script setup lang="ts">
defineProps<{
  items: { title: string, link: string }[]
}>();
</script>

<template>
  <div class="flex flex-col w-[75%]">
    <NuxtLink
      v-for="item in items"
      :key="item.link"
      :to="item.link"
      class="text-l font-bold text-white p-2"
    >
      {{ item.title }}
    </NuxtLink>
  </div>
</template>
