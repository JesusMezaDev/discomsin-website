<template>
    <div class="overlay" :class="{ 'active': showPictureInfo }" @click.self="showPictureInfo = false"></div>
    <div class="spinner" :class="{ 'active': showPictureInfo }">
        <div class="card">
            <img class="card-img-top mt-3 px-3" :src="pictureInfo.url" :alt="pictureInfo.title">
            <div class="card-body" v-if="pictureInfo.title && pictureInfo.description">
                <h5 class="card-title">{{ pictureInfo.title }}</h5>
                <p class="card-text">
                    {{ pictureInfo.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { usePictureViewerStore } from '../stores/pictureviewer';
    const pictureViewerStore = usePictureViewerStore();
    const { pictureInfo, showPictureInfo } = storeToRefs(pictureViewerStore);
</script>

<style scoped>
    @media screen and (max-width: 1280px) {
        img {
            height: 420px;
            width: 880px;
        }
    }
    
    @media screen and (max-width: 1024px) {
        img {
            height: 360px;
            width: 720px;
        }
    }

    @media screen and (max-width: 768px) {
        img {
            height: 300px;
            width: 620px;
        }
    }
    
    @media screen and (max-width: 768px) {
        img {
            height: 240px;
            width: 520px;
        }
    }
    
    @media screen and (max-width: 480px) {
        img {
            height: 130px;
            width: 280px;
        }
    }
    
    @media screen and (max-width: 280px) {
        img {
            height: 120px;
        }
    }
</style>