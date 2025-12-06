<template>
  <section class="pt-32 pb-16 container mx-auto px-6 max-w-3xl">
    <div v-if="project">
      <img :src="'https://picsum.photos/800/600'" class="w-full rounded-2xl mb-6" />
      
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">{{ project.title }}</h1>
      <p class="text-gray-700 dark:text-gray-400">{{ project.type }}</p>
      <p class="mt-6 text-gray-800 dark:text-gray-300">{{ project.description }}</p>

      <div class="mt-6 flex gap-2">
        <span
          v-for="(s,i) in project.stack || []"
          :key="i"
          class="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-900 dark:text-white"
        >
          {{ s }}
        </span>
      </div>

      <router-link to="/projects" class="mt-6 block text-gray-900 dark:text-indigo-400">← Retour</router-link>
    </div>

    <div v-else>
      <p class="text-gray-900 dark:text-white">Projet introuvable.</p>
      <router-link to="/projects" class="text-gray-900 dark:text-indigo-400">Retour</router-link>
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
