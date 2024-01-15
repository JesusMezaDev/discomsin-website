<template>
  <Spinner />
  <PictureViewer />
  <div class="container">
    <header>
      <Navbar />
    </header>
    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Footer from './components/Footer.vue';
  import Spinner from '@/shared/spinner/Spinner.vue';
  import Navbar from '@/modules/navbar/views/NavbarView.vue';
  import PictureViewer from './shared/picture-viewer/views/PictureViewerView.vue';
</script>

<style scoped>
  .text-10 {
    font-size: 10px;
  }
</style>