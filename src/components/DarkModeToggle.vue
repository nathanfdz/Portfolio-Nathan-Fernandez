<script setup>
import { ref, onMounted } from "vue";
const isDark = ref(false);

onMounted(() => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    isDark.value = true;
  } else if (saved === "light") {
    isDark.value = false;
  } else {
    isDark.value = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
});

function setClass(dark) {
  if (dark) document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");
}

function toggle() {
  isDark.value = !isDark.value;
  setClass(isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}
</script>

<template>
  <button
    @click="toggle"
    class="w-12 h-8 rounded-full p-1 bg-gray-200 dark:bg-gray-700 flex items-center transition-shadow shadow-sm"
    :title="isDark ? 'Mode clair' : 'Mode sombre'"
  >
    <span
      class="w-6 h-6 rounded-full bg-yellow-400 dark:bg-yellow-300 transform transition-transform"
      :class="isDark ? 'translate-x-4' : 'translate-x-0'"
    >
      <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 4.22a1 1 0 011.415 0l.708.708a1 1 0 11-1.414 1.414l-.709-.708a1 1 0 010-1.414zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm8 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM15.657 4.222a1 1 0 010 1.414l-.708.709a1 1 0 11-1.414-1.414l.708-.709a1 1 0 011.414 0z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.293 13.293A8 8 0 116.707 2.707 6 6 0 0017.293 13.293z"/>
      </svg>
    </span>
  </button>
</template>

<style scoped>
/* nothing here — Tailwind handles it */
</style>
