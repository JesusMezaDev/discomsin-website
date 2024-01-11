import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavbarStore = defineStore('navbar', () => {
    const showCatalogsMenu = ref(false);
    const showOffCanvasMenu = ref(false);

    return {
        showCatalogsMenu,
        showOffCanvasMenu,
    }
});