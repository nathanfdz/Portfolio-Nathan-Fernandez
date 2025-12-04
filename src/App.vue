<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-black">
    <Header />

    <main class="container mx-auto px-6">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Header, Footer }
};
</script>