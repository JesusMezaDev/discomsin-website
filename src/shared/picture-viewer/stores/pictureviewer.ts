import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePictureViewerStore = defineStore('pictureviewer', () => {
  const pictureInfo = ref<{ url: string, title?: string, description?: string }>({ url: '' });
  const showPictureInfo = ref(false);

  return {
    /* Variables de estado */
    pictureInfo,
    showPictureInfo,
  }
});