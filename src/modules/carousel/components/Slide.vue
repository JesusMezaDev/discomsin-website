<template>
        <img :src="url" class="d-block w-100" fetchpriority="high">
</template>

<script setup lang="ts">
    defineProps<{ url: string }>();
</script>

<style scoped>
    img {
        height: 350px;
        width: 1300px;
    }

    @media screen and (max-width: 912px) {
        img {
            height: 220px;
        }
    }
    
    @media screen and (max-width: 768px) {
        img {
            height: 200px;
        }
    }
    
    @media screen and (max-width: 540px) {
        img {
            height: 175px;
        }
    }

    @media screen and (max-width: 414px) {
        img {
            height: 150px;
        }
    }

    @media screen and (max-width: 375px) {
        img {
            height: 120px;
        }
    }

    @media screen and (max-width: 280px) {
        img {
            height: 100px;
        }
    }
</style>