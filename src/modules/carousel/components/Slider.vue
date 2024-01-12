<template>
    <div id="slider" class="carousel slide" @mouseover="stopTimer" @mouseleave="createTimer">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#slider" v-for="(_, index) in slides" :class="{ 'active': index === currentSlide }" @click="goToSlide(index)"></button>
        </div>
        <div class="carousel-inner">
            <!-- <div class="carousel-item" v-for="(slide, index) in slides" :data-carousel-item-number="index" :class="{ 'active': index === currentSlide }"> -->
            <div class="carousel-item" v-for="(slide, index) in slides" :data-carousel-item-number="index" :class="{ 'active': index === 0 }">
                <Slide :url="slide.url" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev" @click="previousSlide()">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next" @click="nextSlide()">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, onUnmounted } from 'vue';
    import { storeToRefs } from 'pinia';

    import Slide from './Slide.vue';

    import { useCarouselStore } from '../stores/carousel';
    const carouselStore = useCarouselStore();
    const { currentSlide, slides } = storeToRefs(carouselStore);

    import { useSlider } from '../composables/useSlider';

    const {
        createTimer,
        getAllImagesSlider,
        goToSlide,
        nextSlide,
        previousSlide,
        stopTimer,
    } = useSlider();

    onMounted(() => {
        getAllImagesSlider();
        createTimer();
    });

    onUnmounted(() => {
        stopTimer();
    });
</script>

<style scoped>
    
</style>