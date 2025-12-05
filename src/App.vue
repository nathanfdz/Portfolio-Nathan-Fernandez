<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-black">
    <Header />

    <main class="container mx-auto px-6">
      <!-- Transition entre routes -->
      <transition name="fade-slide" mode="out-in">
        <RouterView />
      </transition>
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

<style>
/* Transition fade + slide */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
