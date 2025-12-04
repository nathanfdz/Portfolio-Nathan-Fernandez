<template>
  <section class="flex flex-col items-center justify-center min-h-screen text-center pt-28">
    <h1 class="text-5xl font-bold text-white">Etudiant.Dev</h1>
    <h2 class="text-xl text-gray-400 mt-2">Développeur Web & Application</h2>
    <p class="mt-4 max-w-xl text-gray-300">
      Je conçois des applications web et mobile
    </p>

    <div class="mt-6 flex flex-wrap gap-4 justify-center">
      <router-link
        to="/projects"
        class="px-6 py-3 font-bold bg-primary rounded-lg hover:bg-purple-700 transition hover:text-white"
      >
        Voir mes projets
      </router-link>

      <button
        @click="scrollToSection('skills')"
        class="px-6 py-3 font-bold bg-primary rounded-lg hover:bg-purple-700 transition hover:text-white"
      >
        Compétences
      </button>

      <button
        @click="scrollToSection('services')"
        class="px-6 py-3 font-bold bg-primary rounded-lg hover:bg-purple-700 transition hover:text-white"
      >
        Services
      </button>

      <button
        @click="scrollToSection('about')"
        class="px-6 py-3 font-bold bg-primary rounded-lg hover:bg-purple-700 transition hover:text-white"
      >
        À propos
      </button>
            <button
        @click="scrollToSection('contact')"
        class="px-6 py-3 font-bold bg-primary rounded-lg hover:bg-purple-700 transition hover:text-white"
      >
        Me contacter
      </button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -80; // marge pour header fixe
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }
};
</script>
