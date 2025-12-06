<template>
  <section class="pt-32 pb-16 container mx-auto px-4 sm:px-6 md:px-6 lg:px-6 max-w-3xl">
    <div v-if="project">
      <img
        :src="'https://picsum.photos/800/600'"
        class="w-full rounded-2xl mb-6 object-cover sm:h-64 md:h-80 lg:h-96"
      />

      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
        {{ project.title }}
      </h1>
      <p class="text-gray-700 dark:text-gray-400 sm:text-base text-sm">{{ project.type }}</p>
      <p class="mt-6 text-gray-800 dark:text-gray-300 sm:text-base text-sm">
        {{ project.description }}
      </p>

      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="(s,i) in project.stack || []"
          :key="i"
          class="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-900 dark:text-white text-xs sm:text-sm"
        >
          {{ s }}
        </span>
      </div>

      <router-link
        to="/projects"
        class="mt-6 block text-gray-900 dark:text-indigo-400 font-semibold sm:text-base text-sm"
      >
        ← Retour
      </router-link>
    </div>

    <div v-else>
      <p class="text-gray-900 dark:text-white sm:text-base text-sm">Projet introuvable.</p>
      <router-link
        to="/projects"
        class="text-gray-900 dark:text-indigo-400 font-semibold sm:text-base text-sm"
      >
        Retour
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useProjects } from "@/composables/useProjects";

const route = useRoute();
const { getById } = useProjects();
const project = ref(null);

onMounted(() => {
  const id = route.params.id;
  project.value = getById(id);
});
</script>
