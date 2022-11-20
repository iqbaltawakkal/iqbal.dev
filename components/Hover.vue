<template>
  <div class="bg-white fixed right-5 bottom-5 rounded-full">
    <a class="flex w-10 h-10 items-center justify-center" @click="dark = !dark">
      <Icon v-if="dark" name="carbon-awake" class="text-xl" />
      <Icon v-else name="carbon-asleep" class="text-xl" />
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";
const dark = ref(true);
</script>
