<script setup>
import { RouterLink } from "vue-router";
import DarkModeToggle from "./DarkModeToggle.vue";
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full bg-gray-900/40 dark:bg-gray-950/40 backdrop-blur-xl border-b border-gray-700 z-50"
  >
    <nav class="container mx-auto flex items-center justify-between p-4">
      <div class="flex items-center gap-4">
        <router-link to="/" class="text-xl font-bold text-indigo-400">Nathan Fernandez Puente</router-link>
      </div>

      <div class="flex items-center gap-4">
        <ul class="hidden md:flex gap-6 text-gray-200">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/projects">Projets</router-link></li>
        </ul>

        <DarkModeToggle />
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Barre violette sous le lien actif */
ul li a {
  position: relative;
  padding-bottom: 4px;
  transition: color 0.2s;
}

ul li a.router-link-active::after,
ul li a.router-link-exact-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 3px;
  background-color: #8b5cf6; /* Violet Tailwind */
  border-radius: 9999px;
  transition: all 0.3s ease;
}

/* Optionnel : effet hover */
ul li a:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 3px;
  background-color: #a78bfa; /* violet plus clair au hover */
  opacity: 0.5;
  border-radius: 9999px;
}
</style>
