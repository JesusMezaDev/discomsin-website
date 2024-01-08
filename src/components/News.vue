<template>
    <article class="mt-5">
        <h3 class="text-secondary text-center">¡Tenemos nuevos productos!</h3>
        <div class="row text-center">
            <div class="col my-3" v-for="picture in pictures">
                <img :src="picture.secure_url" alt="">
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { storeToRefs } from 'pinia';

    import { discomsinApi } from '@/api/cloudinary-api';
    import { useMainStore } from '@/stores/main';
    import type { CatalogImages } from '@/interfaces/catalogImages';

    const mainStore = useMainStore();
    const { isLoading } = storeToRefs(mainStore);

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

    onMounted(() => {
        getImagesFromNews();
    });
</script>

<style scoped>
    @media screen and (min-width: 1280px) {
        img {
            height: 300px;
        }
    }
    
    @media screen and (max-width: 1024px) {
        img {
            height: 200px;
        }
    }

    @media screen and (max-width: 768px) {
        img {
            height: 180px;
        }
    }
    
    @media screen and (max-width: 480px) {
        img {
            height: 180px;
        }
    }
    
    @media screen and (max-width: 280px) {
        img {
            height: 120px;
        }
    }
</style>