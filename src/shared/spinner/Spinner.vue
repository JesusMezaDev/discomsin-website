<template>
    <div class="overlay" :class="(isLoading) ? 'active' : ''"></div>
    <div class="spinner" :class="(isLoading) ? 'active' : ''">
        <div class="bg">
            <l-treadmill size="100" speed="1.5" color="#FFF"></l-treadmill>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import 'ldrs/treadmill';

    import { useMainStore } from '@/stores/main';
    const mainStore = useMainStore();
    const { isLoading } = storeToRefs(mainStore);
</script>

<style scoped>
    .spinner,
    .overlay {
        --base-color: #212529;
    }

    .spinner {
        position: fixed;
        top: 50%;
        left: 50%;
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: 200ms cubic-bezier(0, 0, 1, 1);
        transition-property: opacity, visibility;
        visibility: hidden;
        z-index: 10;
    }

    .spinner.active {
        opacity: 1;
        visibility: visible;
    }

    .bg {
        padding: 20px;
        border-radius: 10px;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        height: 100dvh;
        background-color: var(--base-color);
        z-index: 5;
        opacity: 0;
        transition: 200ms cubic-bezier(0, 0, 1, 1);
        transition-property: opacity, visibility;
        visibility: hidden;
    }

    .overlay.active {
        opacity: 0.7;
        visibility: visible;
    }
</style>