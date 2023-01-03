<template>
  <div class="bg-white fixed right-5 bottom-5 rounded-full">
    <label class="swap swap-rotate text-xl w-10 h-10 text-dark-secondary-text">
      <!-- this hidden checkbox controls the state -->
      <input v-model="dark" type="checkbox" />
      <Icon name="carbon-awake" class="swap-on" />
      <Icon name="carbon-asleep" class="swap-off" />
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";
const dark = ref(true);
</script>
