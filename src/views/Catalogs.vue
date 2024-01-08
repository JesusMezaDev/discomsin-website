<template>
    <div class="container">
        <h3>{{ currentCatalogDescription }}</h3>
        <div class="row my-3">
            <div class="col my-3" v-for="image in catalogImages">
                <img :src="image.secure_url" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onBeforeUnmount, onMounted } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useRouter } from 'vue-router';

    import { useMainStore } from '@/stores/main';

    const router = useRouter();

    const mainStore = useMainStore();
    const { catalogImages, currentCatalogDescription } = storeToRefs(mainStore);

    onMounted(() => {
        if (currentCatalogDescription.value === '') router.push({ name: 'home' })
    });

    onBeforeUnmount(() => {
        currentCatalogDescription.value = '';
        catalogImages.value = [];
    });
</script>

<style scoped>

</style>