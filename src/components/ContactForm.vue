<template>
  <form
    @submit.prevent="submit"
    class="bg-white/5 dark:bg-gray-800/50 p-6 rounded-xl transition-colors duration-300"
  >
    <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Contactez-moi</h3>

    <input
      v-model="name"
      placeholder="Prénom + Nom"
      required
      class="w-full p-3 rounded-lg bg-white/10 dark:bg-gray-700 border border-primary/70 dark:border-primary/70 mb-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none transition shadow-[0_0_8px_rgba(110,82,247,0.7)]"
    />

    <input
      v-model="email"
      type="email"
      placeholder="Email"
      required
      class="w-full p-3 rounded-lg bg-white/10 dark:bg-gray-700 border border-primary/70 dark:border-primary/70 mb-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none transition shadow-[0_0_8px_rgba(110,82,247,0.7)]"
    />

    <textarea
      v-model="message"
      placeholder="Message"
      required
      class="w-full p-3 rounded-lg bg-white/10 dark:bg-gray-700 border border-primary/70 dark:border-primary/70 mb-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none transition shadow-[0_0_8px_rgba(110,82,247,0.7)] resize-none"
      rows="5"
    ></textarea>

    <button
      type="submit"
      class="w-full py-2 bg-primary text-white font-semibold rounded-lg hover:bg-purple-700 transition"
    >
      Envoyer
    </button>

    <p v-if="msg" class="mt-3 text-green-400">{{ msg }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      msg: ""
    };
  },
  methods: {
    submit() {
      this.msg = "Message envoyé !";
      this.name = "";
      this.email = "";
      this.message = "";
    }
  }
};
</script>

<style scoped>
/* Tout est géré par Tailwind */
</style>
