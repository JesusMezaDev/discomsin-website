<template>
    <div class="row my-2 show-normal-menu">
        <div class="col d-flex justify-content-center">
            <nav id="navbar" class="navbar">
                <a href="/" class="me-3">
                    <img src="/img/logo.png" alt="logo" class="normal-logo">
                </a>
                <ul class="nav nav-pills fs-3">
                    <li class="nav-item align-self-center" v-if="x_Url">
                        <a class="nav-link text-black bi-twitter-x" target="_blank" :href="x_Url"></a>
                    </li>
                    <li class="nav-item align-self-center" v-if="facebook_Url">
                        <a class="nav-link text-blue bi-facebook" target="_blank" :href="facebook_Url"></a>
                    </li>
                    <li class="nav-item align-self-center" v-if="instagram_Url">
                        <a class="nav-link text-secondary bi-instagram" target="_blank" :href="instagram_Url"></a>
                    </li>
                    <li class="nav-item align-self-center">
                        <a class="nav-link text-success bi-whatsapp" target="_blank" :href="whatsappNumberAndSubject"></a>
                    </li>
                    <li class="nav-item align-self-center">
                        <RouterLink class="nav-link text-secondary bi-map" :to="{ name: 'map' }"></RouterLink>
                    </li>
                    <li class="nav-item fs-4 align-self-center">
                        <RouterLink class="nav-link text-black highlight-link" :to="{ name: 'about' }">Quiénes somos</RouterLink>
                    </li>
                    <li class="nav-item dropdown fs-4 align-self-center">
                        <a class="nav-link dropdown-toggle text-black highlight-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" @click="showCatalogsMenu = !showCatalogsMenu">
                            Catálogos
                        </a>
                        <NavbarCatalogListItem />
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useNavbarStore } from '../stores/navbar';
    import NavbarCatalogListItem from './NavbarCatalogListItem.vue';
    import { useNavbar } from '../composables/useNavbar';

    const {
        facebook_Url,
        instagram_Url,
        whatsappNumberAndSubject,
        x_Url,
    } = useNavbar();

    const navbarStore = useNavbarStore();
    const { showCatalogsMenu } = storeToRefs(navbarStore);
</script>

<style scoped>
    
</style>