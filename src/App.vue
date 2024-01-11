<template>
  <Spinner />
  <div class="container">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Footer from './components/Footer.vue';
  import Spinner from '@/shared/spinner/Spinner.vue';
  import Navbar from '@/modules/navbar/views/NavbarView.vue';
</script>

<style scoped>
  .text-10 {
    font-size: 10px;
  }
</style>