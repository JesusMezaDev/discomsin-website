<template>
        <img :src="url" class="d-block w-100" fetchpriority="high">
</template>

<script setup lang="ts">
    defineProps<{ url: string }>();
</script>

<style scoped>
    
</style>