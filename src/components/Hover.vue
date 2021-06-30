<template>
  <div class="bg-white fixed right-5 bottom-5 rounded-full">
    <a class="block p-4" @click="dark = !dark">
      <i-carbon-awake v-if="dark" /> <i-carbon-asleep v-else />
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";
const dark = ref(true);
</script>
