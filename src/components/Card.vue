<template>
  <div class="max-w-sm rounded bg-dark-secondary-bg overflow-hidden shadow-lg">
    <img
      class="w-full"
      src="https://picsum.photos/id/1016/384/234"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ props.title }}</div>
      <p class="text-base text-dark-secondary-text">{{ props.desc }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        v-for="(item, index) in props.tags"
        :key="index"
        class="inline-block bg-dark-primary-bg text-dark-secondary-text rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  desc: String,
  tags: Array,
  img: String,
});
</script>
