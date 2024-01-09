<template>
    <div class="row">
      <div class="col">
        <div id="slider" class="carousel slide carousel-fade" @mouseover="stopTimer" @mouseleave="createTimer">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#slider" v-for="(_, index) in slides" :class="{ 'active': index === currentSlide }" @click="goToSlide(index)"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(slide, index) in slides" :class="{ 'active': index === currentSlide }">
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
      </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, onUnmounted, ref } from 'vue';
    import { storeToRefs } from 'pinia';

    import { useMainStore } from '@/stores/main';

    const mainStore = useMainStore();
    const { isLoading } = storeToRefs(mainStore);

    import Slide from './Slide.vue';

    import { discomsinApi } from '@/api/cloudinary-api';

    interface Slides {
        url: string;
    }

    const slides = ref<Slides[]>([]);
    let currentSlide = ref(0);
    let timerId = ref(0);

    const getAllImagesSlider = async () => {
        isLoading.value = true;
        try {
            const { data } = await discomsinApi.get('slider');
            
            for (let img of data) {
                slides.value.push({ url: img.secure_url });
            }
        } catch (error) {
            
        }
        finally {
            isLoading.value = false;
        }
    }

    const previousSlide = () => {
        if (currentSlide.value === 0) {
            currentSlide.value = slides.value.length - 1;
            return;
        }

        currentSlide.value--;
    }

    const nextSlide = () => {
        if (currentSlide.value === slides.value.length - 1) {
            currentSlide.value = 0;
            return;
        }

        currentSlide.value++;
    }

    const goToSlide = (slideNumber: number) => {
        currentSlide.value = slideNumber;
    }

    const beforeGoToSlide = (slideNumber: number) => {
        if (slideNumber > slides.value.length - 1) slideNumber = 0;
        if (slideNumber < 0) slideNumber = 0;

        goToSlide(slideNumber);
    }

    const createTimer = () => {
        let slide = 0;
        const miliSecondsTime = Number(import.meta.env.MY_SLIDER_TIMER || 5000);

        if (isNaN(miliSecondsTime)) return;
        if (miliSecondsTime < 0) return;

        timerId.value = setInterval(() => {
            slide = currentSlide.value + 1;
            beforeGoToSlide(slide)
        }, miliSecondsTime);
    }

    const stopTimer = () => {
        clearInterval(timerId.value);
    }

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