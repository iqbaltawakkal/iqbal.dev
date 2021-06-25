<template>
  <h1 class="text-center">{{ msg }}</h1>

  <p class="text-green-500 text-center">
    <a href="https://vitejs.dev/guide/features.html" target="_blank"
      >Vite Documentation</a
    >
    | <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a> |
    <a href="https://tailwindcss.com/" target="_blank"
      >Tailwind Documentation</a
    >
  </p>

  <button
    class="bg-red-500 hover:bg-green-700 text-white p-2 rounded mx-auto block"
    @click="state.count++"
  >
    <i-mdi-account />count is: {{ state.count }}
  </button>
  <p class="text-center">
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>
