<template>
  <div class="row">
    <div class="col">
      <header>
        <Carousel/>
      </header>
      <article>
        <News />
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
  import News from '@/modules/news/views/NewsView.vue';
  import Carousel from '@/modules/carousel/views/CarouselView.vue';
</script>

<style scoped>

</style>