<template>
    <article class="mt-5">
        <h3 class="text-secondary text-center">¡Tenemos nuevos productos!</h3>
        <div class="row text-center">
            <div class="col my-3" v-for="picture in pictures">
                <img :src="picture.secure_url" alt="" @click="loadPicture({ url: picture.secure_url, title: picture.info?.title, description: picture.info?.description })">
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { storeToRefs } from 'pinia';

    import { discomsinApi } from '@/api/cloudinary-api';
    import { useMainStore } from '@/stores/main';
    import { usePictureViewerStore } from '@/shared/picture-viewer/stores/pictureviewer';
    import type { CatalogImages } from '@/interfaces/catalogImages';

    const mainStore = useMainStore();
    const { isLoading } = storeToRefs(mainStore);

    const pictureViewerStore = usePictureViewerStore();
    const { pictureInfo, showPictureInfo } = storeToRefs(pictureViewerStore);

    const pictures = ref<CatalogImages[]>([]);

    const getImagesFromNews = async () => {
        isLoading.value = true;
        try {
            const { data } = await discomsinApi.get<CatalogImages[]>(`catalogs/novedades`);
            pictures.value = [...data];
        } catch (error) {
            
        }
        finally {
            isLoading.value = false;
        }
    }

    const loadPicture = (img: { url: string, title?: string, description?: string }) => {
        const { url, title, description } = img;
        pictureInfo.value = { url, title, description };
        showPictureInfo.value = true;
    }

    onMounted(() => {
        getImagesFromNews();
    });
</script>

<style scoped>
    img {
        cursor: pointer;
        height: 300px;
        width: 610px;
    }

    @media screen and (max-width: 540px) {
        img {
            height: 230px;
            width: 460px;
        }
    }
    
    @media screen and (max-width: 480px) {
        img {
            height: 180px;
            width: 350px;
        }
    }
    
    @media screen and (max-width: 280px) {
        img {
            height: 110px;
            width: 250px;
        }
    }
</style>