import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { CatalogImages } from '@/interfaces/catalogImages';

export const useMainStore = defineStore('main', () => {
  const isLoading = ref(false);
  const catalogImages = ref<CatalogImages[]>([])
  const currentCatalogDescription = ref('');

  return {
    /* Variables de estado */
    catalogImages,
    currentCatalogDescription,
    isLoading,
  }
});