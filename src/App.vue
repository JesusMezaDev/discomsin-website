<template>
  <Spinner />
  <div class="container">
    <Navbar />
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
  import Navbar from '@/modules/navbar/views/NavbarView.vue';
</script>

<style scoped>
  
</style>