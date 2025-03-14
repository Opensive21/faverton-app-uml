<script setup lang="ts">
defineProps<{
  items: { title: string, link: string }[]
}>();
</script>

<template>
  <div class="flex flex-col w-[75%] 2xl:w-[70%]">
    <NuxtLink
      v-for="item in items"
      :key="item.link"
      :to="item.link"
      class="text-l font-bold text-white p-2 sm:text-xs"
    >
      {{ item.title }}
    </NuxtLink>
  </div>
</template>
