<template>
    <ul class="dropdown-menu" :class="{ 'show': showCatalogsMenu }" @mouseleave="showCatalogsMenu = false">
        <li v-for="{ catalogName, catalogDescription } in catalogs">
            <a href="#" class="dropdown-item text-black" @click="redirectTo({ catalogName, catalogDescription })">{{ catalogDescription }}</a>
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useNavbarStore } from '../stores/navbar';
    import { useNavbar } from '../composables/useNavbar';
    
    const { catalogs, redirectTo } = useNavbar();

    const navbarStore = useNavbarStore();
    const { showCatalogsMenu } = storeToRefs(navbarStore);
</script>

<style scoped>

</style>