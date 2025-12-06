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
    class="w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center transition duration-300 relative"
  >
    <!-- Curseur = icône -->
    <span
      class="absolute top-1/2 transform -translate-y-1/2 text-lg transition-all duration-300"
      :class="isDark ? 'left-10 text-yellow-400' : 'left-1 text-blue-400'"
    >
      {{ isDark ? '🌙' : '☀️' }}
    </span>
  </button>
</template>
