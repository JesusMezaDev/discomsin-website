<template>
    <div class="container text-center">
        <h2>{{ currentCatalogDescription }}</h2>
        <div class="row my-3">
            <div class="col my-3" v-for="image in catalogImages">
                <img :src="image.secure_url" alt="" @click="loadPicture({ url: image.secure_url, title: image.info?.title, description: image.info?.description })">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onBeforeUnmount, onMounted } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useRouter } from 'vue-router';

    import { useMainStore } from '@/stores/main';
    import { usePictureViewerStore } from '@/shared/picture-viewer/stores/pictureviewer';

    const router = useRouter();

    const mainStore = useMainStore();
    const { catalogImages, currentCatalogDescription } = storeToRefs(mainStore);

    const pictureViewerStore = usePictureViewerStore();
    const { pictureInfo, showPictureInfo } = storeToRefs(pictureViewerStore);

    const loadPicture = (img: { url: string, title?: string, description?: string }) => {
        const { url, title, description } = img;
        pictureInfo.value = { url, title, description };
        showPictureInfo.value = true;
    }

    onMounted(() => {
        if (currentCatalogDescription.value === '') router.push({ name: 'home' })
    });

    onBeforeUnmount(() => {
        currentCatalogDescription.value = '';
        catalogImages.value = [];
    });
</script>

<style scoped>
    img {
        cursor: pointer;
        height: 205px;
        width: 300px;
    }

    @media screen and (max-width: 540px) {
        img {
            height: 180px;
            width: 295px;
        }
    }
    
    @media screen and (max-width: 480px) {
        img {
            height: 160px;
            width: 290px;
        }
    }
    
    @media screen and (max-width: 280px) {
        img {
            height: 110px;
            width: 210px;
        }
    }
</style>