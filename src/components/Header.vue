<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import DarkModeToggle from "./DarkModeToggle.vue";

const mobileMenuOpen = ref(false);

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full bg-gray-100/50 dark:bg-gray-950/40 backdrop-blur-xl border-b border-gray-300 dark:border-gray-700 z-50"
  >
    <nav class="container mx-auto flex items-center justify-between p-4 relative">
      <!-- Logo / Nom -->
      <div class="flex items-center gap-4">
        <router-link 
          to="/" 
          class="text-black dark:text-purple-500 text-xl font-bold"
        >
          Nathan Fernandez Puente
        </router-link>
      </div>

      <!-- Menu desktop -->
      <div class="hidden md:flex items-center gap-4">
        <ul class="flex gap-6 relative">
          <li>
            <router-link
              to="/"
              class="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 relative"
            >
              <strong>Accueil</strong>
            </router-link>
          </li>
          <li>
            <router-link
              to="/projects"
              class="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 relative"
            >
              <strong>Projets</strong>
            </router-link>
          </li>
        </ul>
        <DarkModeToggle />
      </div>

      <!-- Burger menu mobile -->
      <div class="md:hidden flex items-center gap-2">
        <button @click="toggleMenu" class="focus:outline-none z-50">
          <!-- burger reste blanc sur fond sombre, noir sur fond clair -->
          <span class="block w-6 h-0.5 mb-1 transition-transform"
                :class="mobileMenuOpen ? 'rotate-45 translate-y-1.5 bg-black' : 'bg-black'"></span>
          <span class="block w-6 h-0.5 mb-1 transition-opacity"
                :class="mobileMenuOpen ? 'opacity-0' : 'opacity-100 bg-black'"></span>
          <span class="block w-6 h-0.5 transition-transform"
                :class="mobileMenuOpen ? '-rotate-45 -translate-y-1.5 bg-black' : 'bg-black'"></span>
        </button>
        <DarkModeToggle />
      </div>
    </nav>

    <!-- Barre violette tout le bas du header -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-purple-500"></div>

    <!-- Menu mobile -->
    <transition name="fade">
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden bg-gray-950/90 backdrop-blur-xl border-t border-gray-700 p-6 absolute w-full top-full left-0 z-40 flex flex-col gap-4 items-center"
      >
        <router-link
          to="/"
          @click="mobileMenuOpen = false"
          class="text-white text-lg hover:text-gray-300"
        >
          Accueil
        </router-link>
        <router-link
          to="/projects"
          @click="mobileMenuOpen = false"
          class="text-white text-lg hover:text-gray-300"
        >
          Projets
        </router-link>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* Barre violette sous le lien actif */
ul li a.router-link-active::after,
ul li a.router-link-exact-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 3px;
  background-color: #8b5cf6;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

/* Effet hover barre violette */
ul li a:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 3px;
  background-color: #a78bfa;
  opacity: 0.5;
  border-radius: 9999px;
}

/* Animation fade pour menu mobile */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
