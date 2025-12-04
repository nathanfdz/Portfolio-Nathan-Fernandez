<template>
<form  @submit.prevent="submit" class="bg-white/5 p-6 rounded-xl border border-white/10">
  <h3 class="text-xl font-bold mb-4 text-white">Contactez-moi</h3>
  <input v-model="name" placeholder="Prénom + Nom" required class="w-full p-3 rounded-lg bg-black/20 border border-white/10 mb-3 text-white">
  <input v-model="email" placeholder="Email" type="email" required class="w-full p-3 rounded-lg bg-black/20 border border-white/10 mb-3 text-white">
  <textarea v-model="message" placeholder="Message" required class="w-full p-3 rounded-lg bg-black/20 border border-white/10 mb-3 text-white"></textarea>
  <button class="w-full py-2 bg-primary rounded-lg">Envoyer</button>
  <p v-if="msg" class="mt-3 text-green-400">{{ msg }}</p>
</form>
</template>

<script>
export default {
  data() { return { name: '', email: '', message: '', msg: '' }; },
  methods: {
    submit() { this.msg = 'Message envoyé !'; this.name=this.email=this.message=''; }
  }
}
</script>
