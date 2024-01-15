<template>
    <div class="overlay" :class="{ 'active': showPictureInfo }" @click.self="showPictureInfo = false"></div>
    <div class="spinner" :class="{ 'active': showPictureInfo }">
        <div class="bg">
            <div class="card">
                <img class="card-img-top mt-3 px-3" :src="pictureInfo.url" :alt="pictureInfo.title">
                <div class="card-body" v-if="pictureInfo.title && pictureInfo.description">
                    <h5 class="card-title">{{ pictureInfo.title }}</h5>
                    <p>
                        {{ pictureInfo.description }}
                    </p>
                </div>
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
    
</style>