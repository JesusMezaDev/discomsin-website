<template>
  <header>
    <Carousel/>
  </header>
  <main>
    <News />
  </main>
</template>

<script setup lang="ts">
  import News from '@/components/News.vue';
  import Carousel from '@/modules/carousel/views/CarouselView.vue';
</script>

<style scoped>

</style>