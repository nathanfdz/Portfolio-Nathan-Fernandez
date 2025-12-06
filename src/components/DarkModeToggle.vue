<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);

onMounted(() => {
  isDark.value = document.documentElement.classList.contains("dark");
});

function toggleTheme() {
  isDark.value = !isDark.value;

  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}
</script>

<template>
  <button
    @click="toggleTheme"
    class="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center transition duration-300"
  >
    <span
      class="w-4 h-4 bg-white rounded-full shadow transform transition duration-300"
      :class="isDark ? 'translate-x-6' : ''"
    ></span>
  </button>
</template>
