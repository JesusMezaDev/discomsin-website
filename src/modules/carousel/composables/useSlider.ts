import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useMainStore } from '@/stores/main';
import { useCarouselStore } from '../stores/carousel';
import { discomsinApi } from '@/api/cloudinary-api';

export const useSlider = () => {
    const mainStore = useMainStore();
    const { isLoading } = storeToRefs(mainStore);
    
    const carouselStore = useCarouselStore();
    const { currentSlide, slides } = storeToRefs(carouselStore);
    
    const timerId = ref(0);
    const timerTimeout1 = ref(0);
    const timerTimeout2 = ref(0);

    const clearTimersTimeout = () => {
        clearTimeout(timerTimeout1.value);
        clearTimeout(timerTimeout2.value);
    }

    const goToSlide = (slideNumber: number) => {
        currentSlide.value = slideNumber;
        
        const activeDiv = document.querySelector(`div.carousel-item.active`);
        const nextDiv = document.querySelector(`div.carousel-item[data-carousel-item-number="${ currentSlide.value }"]`);
        
        if (!(activeDiv instanceof HTMLDivElement)) return;
        if (!(nextDiv instanceof HTMLDivElement)) return;
        
        nextDiv.classList.add('carousel-item-next');
        nextDiv.classList.add('carousel-item-start');
        activeDiv.classList.add('carousel-item-end');
        nextDiv.classList.add('active');

        clearTimersTimeout();
        
        timerTimeout1.value = setTimeout(() => {
            nextDiv.classList.remove('carousel-item-next');
            nextDiv.classList.remove('carousel-item-start');
        }, 1);

        timerTimeout2.value = setTimeout(() => {
            activeDiv.classList.remove('carousel-item-end');
            activeDiv.classList.remove('active');
        }, 600);
    }

    const beforeGoToSlide = (slideNumber: number) => {
        if (slideNumber > slides.value.length - 1) slideNumber = 0;
        if (slideNumber < 0) slideNumber = 0;

        goToSlide(slideNumber);
    }

    return {
        /* Variables */
        
        /* Functiones/Métodos */
        createTimer: () => {
            let slide = 0;
            const miliSecondsTime = Number(import.meta.env.MY_SLIDER_TIMER || 5000);
    
            if (isNaN(miliSecondsTime)) return;
            if (miliSecondsTime < 0) return;
    
            timerId.value = setInterval(() => {
                slide = currentSlide.value + 1;
                beforeGoToSlide(slide)
            }, miliSecondsTime);
        },
        getAllImagesSlider: async () => {
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
        },
        goToSlide,
        previousSlide: () => {
            currentSlide.value--;
            if (currentSlide.value < 0) currentSlide.value = slides.value.length - 1;
            
            const activeDiv = document.querySelector(`div.carousel-item.active`);
            const prevDiv = document.querySelector(`div.carousel-item[data-carousel-item-number="${ currentSlide.value }"]`);

            if (!(activeDiv instanceof HTMLDivElement)) return;
            if (!(prevDiv instanceof HTMLDivElement)) return;

            prevDiv.classList.add('carousel-item-prev');
            prevDiv.classList.add('carousel-item-end');
            activeDiv.classList.add('carousel-item-start');
            prevDiv.classList.add('active');

            clearTimersTimeout();
            
            timerTimeout1.value = setTimeout(() => {
                prevDiv.classList.remove('carousel-item-prev');
                prevDiv.classList.remove('carousel-item-end');
            }, 1);

            timerTimeout2.value = setTimeout(() => {
                activeDiv.classList.remove('carousel-item-start');
                activeDiv.classList.remove('active');
            }, 600);
        },
        nextSlide: () => {
            currentSlide.value++;
            if (currentSlide.value > slides.value.length - 1) currentSlide.value = 0;

            goToSlide(currentSlide.value);
        },
        stopTimer: () => {
            clearInterval(timerId.value);
        },
    }
}