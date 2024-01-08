<template>
  <Spinner />
  <div class="container">
    <header>
      <Navbar />
      <Slider />
    </header>
    <RouterView />
    <!-- <RouterView v-slot="{ Component, route }">
      <KeepAlive>
        <component :is="Component" :key="route.path" />
      </KeepAlive>
    </RouterView> -->
  </div>
</template>

<script setup lang="ts">
  import Spinner from '@/shared/spinner/Spinner.vue';
  import Navbar from '@/components/Navbar.vue';
  import Slider from '@/components/Slider.vue';
</script>

<style scoped>
  
</style>