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
    
    let timerId = ref(0);

    const goToSlide = (slideNumber: number) => {
        currentSlide.value = slideNumber;
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
            if (currentSlide.value === 0) {
                currentSlide.value = slides.value.length - 1;
                return;
            }
    
            currentSlide.value--;
        },
        nextSlide: () => {
            if (currentSlide.value === slides.value.length - 1) {
                currentSlide.value = 0;
                return;
            }
    
            currentSlide.value++;
        },
        stopTimer: () => {
            clearInterval(timerId.value);
        },
    }
}