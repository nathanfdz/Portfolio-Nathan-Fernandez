<template>
  <form @submit.prevent="onSubmit" class="card space-y-4 p-4 sm:p-6 bg-gray-900/80 rounded-xl">
    <h3 class="text-lg font-semibold text-white text-center sm:text-left">Ajouter un projet</h3>

    <input
      v-model="title"
      placeholder="Titre"
      class="w-full p-3 rounded-md bg-gray-800/60 border border-gray-700 text-white"
      required
    />
    <input
      v-model="type"
      placeholder="Type (site vitrine, application...)"
      class="w-full p-3 rounded-md bg-gray-800/60 border border-gray-700 text-white"
      required
    />
    <input
      v-model="image"
      placeholder="URL image (optionnel)"
      class="w-full p-3 rounded-md bg-gray-800/60 border border-gray-700 text-white"
    />
    <textarea
      v-model="description"
      placeholder="Description complète"
      class="w-full p-3 rounded-md bg-gray-800/60 border border-gray-700 text-white"
      rows="4"
      required
    ></textarea>

    <!-- Ajout techno responsive -->
    <div class="flex flex-col sm:flex-row gap-2">
      <input
        v-model="stackInput"
        placeholder="Ajouter une techno et appuyer sur Entrée"
        @keyup.enter.prevent="addStack"
        class="flex-1 p-3 rounded-md bg-gray-800/60 border border-gray-700 text-white w-full"
      />
      <button
        type="button"
        @click="addStack"
        class="px-4 py-2 bg-indigo-600 rounded-md w-full sm:w-auto"
      >
        Add
      </button>
    </div>

    <!-- Liste des technos -->
    <div class="flex flex-wrap gap-2">
      <span
        v-for="(s, i) in stack"
        :key="i"
        class="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center gap-1"
      >
        {{ s }}
        <button @click="removeStack(i)" type="button" class="text-xs text-red-400 hover:text-red-600">
          ✕
        </button>
      </span>
    </div>

    <!-- Boutons submit / reset -->
    <div class="flex flex-col sm:flex-row justify-end gap-2">
      <button
        type="button"
        @click="reset"
        class="px-4 py-2 border rounded-md text-white w-full sm:w-auto"
      >
        Réinitialiser
      </button>
      <button
        type="submit"
        class="btn-primary w-full sm:w-auto"
      >
        Ajouter
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useProjects } from "@/composables/useProjects";

const { addProject } = useProjects();

const title = ref("");
const type = ref("");
const description = ref("");
const image = ref("");
const stackInput = ref("");
const stack = ref([]);

function addStack() {
  const val = stackInput.value && stackInput.value.trim();
  if (!val) return;
  stack.value.push(val);
  stackInput.value = "";
}

function removeStack(idx) {
  stack.value.splice(idx, 1);
}

function reset() {
  title.value = type.value = description.value = image.value = stackInput.value = "";
  stack.value = [];
}

function onSubmit() {
  addProject({
    title: title.value,
    type: type.value,
    description: description.value,
    image: image.value,
    stack: stack.value
  });
  reset();
}
</script>

<style scoped>
.card {
  /* fallback minimal style */
}
</style>
