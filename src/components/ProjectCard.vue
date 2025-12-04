<template>
  <article class="card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(110,82,247,0.7)]">
    <img :src="'https://picsum.photos/800/600'" class="w-full h-40 object-cover rounded-xl mb-4" />
    <div>
      <h3 class="text-lg font-bold text-white">Nom : {{ project.title }}</h3>
      <p class="text-sm text-gray-300">Type : {{ project.type }}</p>
      <p class="mt-3 text-gray-300 line-clamp-3">Description : {{ project.short || project.description }}</p>

      <div class="mt-4 flex items-center justify-between">
        <router-link :to="`/projects/${project.id}`" class="text-indigo-400 font-semibold hover:text-purple-400 transition">Voir plus →</router-link>
        <div class="text-xs text-gray-400 flex gap-2">
          <span v-for="(s,i) in project.stack || []" :key="i" class="px-2 py-1 bg-gray-800 rounded-full">{{ s }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["project"]
};
</script>
