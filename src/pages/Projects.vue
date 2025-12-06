<template>
  <section class="pt-32 pb-16 container mx-auto px-4 sm:px-6 md:px-6 lg:px-6">
    <h2 class="text-center font-bold text-3xl sm:text-4xl md:text-5xl text-black dark:text-white mb-12">
      Mes projets
    </h2>

    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Formulaire côté gauche -->
      <div class="lg:w-1/3 w-full flex-shrink-0 max-w-full">
        <ProjectForm />
      </div>

      <!-- Projets côté droit -->
      <div class="lg:w-2/3 w-full max-w-full">
        <!-- Barre de recherche et filtre -->
        <div class="mb-4 flex flex-col sm:flex-row gap-2">
          <input
            v-model="search"
            placeholder="Rechercher..."
            class="flex-1 p-3 rounded-lg bg-white/10 dark:bg-gray-700 border border-primary/70 dark:border-primary/70 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 shadow-[0_0_8px_rgba(110,82,247,0.7)] focus:outline-none transition"
          />
          <select
            v-model="filter"
            class="p-3 rounded-lg bg-white/10 dark:bg-gray-700 border border-primary/70 dark:border-primary/70 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 shadow-[0_0_8px_rgba(110,82,247,0.7)] focus:outline-none transition mt-2 sm:mt-0"
          >
            <option value="">Tous</option>
            <option value="Site vitrine">Site vitrine</option>
            <option value="Projet école">Projet école</option>
            <option value="Projet perso">Projet perso</option>
            <option value="Projet pro">Projet pro</option>
          </select>
        </div>

        <!-- Liste des projets -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <ProjectCard v-for="p in filtered" :key="p.id" :project="p" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import ProjectForm from "@/components/ProjectForm.vue";
import { useProjects } from "@/composables/useProjects";
import { computed, ref } from "vue";

const { list } = useProjects();
const search = ref("");
const filter = ref("");

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase();
  return list.value.filter((p) => {
    const matchesFilter = !filter.value || p.type.toLowerCase().includes(filter.value.toLowerCase());
    const matchesQ =
      !q ||
      (p.title && p.title.toLowerCase().includes(q)) ||
      (p.type && p.type.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q));
    return matchesFilter && matchesQ;
  });
});
</script>
