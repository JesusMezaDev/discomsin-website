import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Slides {
    url: string;
}

export const useCarouselStore = defineStore('carousel', () => {
    const slides = ref<Slides[]>([]);
    const currentSlide = ref(0);

  return {
    currentSlide,
    slides,
  }
});