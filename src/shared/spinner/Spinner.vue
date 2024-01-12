<template>
    <div class="overlay" :class="(isLoading) ? 'active' : ''"></div>
    <div class="spinner" :class="(isLoading) ? 'active' : ''">
        <div class="bg">
            <div class="container">
                <div class="cube"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';

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

    .container {
        --uib-size: 150px;
        --uib-color: #FFF;
        --uib-speed: 1.25s;
        --uib-cube-size: calc(var(--uib-size) * 0.2);
        --uib-arc-1: -90deg;
        --uib-arc-2: 90deg;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: var(--uib-size);
        height: calc(100% - var(--uib-cube-size) / 2);
        padding-bottom: calc(var(--uib-cube-size) / 2);
    }

    .cube {
        --cube-container-height: calc(var(--uib-size) * 0.8);
        display: flex;
        align-items: center;
        width: var(--uib-cube-size);
        height: var(--cube-container-height);
        transform-origin: center bottom;
        transform: rotate(var(var(--uib-arc-1)));
        animation: metronome var(--uib-speed) linear infinite;

        &::after {
        content: '';
        display: block;
        width: var(--uib-cube-size);
        height: var(--uib-cube-size);
        background-color: var(--uib-color);
        border-radius: 25%;
        animation: morph var(--uib-speed) linear infinite;
        transform-origin: center left;
        transition: background-color 0.3s ease;
        }
    }

    @keyframes metronome {
        0% {
        transform: rotate(var(--uib-arc-1));
        }

        50% {
        transform: rotate(var(--uib-arc-2));
        }

        50.001% {
        transform: translateX(var(--cube-container-height)) rotate(var(--uib-arc-1));
        }

        100% {
        transform: rotate(var(--uib-arc-1));
        }
    }

    @keyframes morph {
        0% {
        transform: scaleX(0.65) scaleY(1.3);
        }

        15% {
        transform: scaleX(1.5);
        }

        30%,
        50.001% {
        transform: scaleX(1);
        }

        55% {
        transform: scaleX(0.8) scaleY(1.2);
        animation-timing-function: ease-in;
        }

        65%,
        80% {
        transform: scaleX(1);
        }

        90%,
        100% {
        transform: scaleX(0.65) scaleY(1.3);
        }
    }
</style>