<template>
    <nav id="navbar" class="navbar">
        <a href="/" class="me-3">
            <img src="/img/logo.png" alt="logo" class="normal-logo">
        </a>
        <ul class="nav nav-pills fs-3">
            <li class="nav-item align-self-center">
                <a class="nav-link text-black bi-twitter-x" target="_blank" href="https://twitter.com"></a>
            </li>
            <li class="nav-item align-self-center">
                <a class="nav-link text-blue bi-facebook" target="_blank" href="https://facebook.com"></a>
            </li>
            <li class="nav-item align-self-center">
                <a class="nav-link text-secondary bi-instagram" target="_blank" href="https://instagram.com"></a>
            </li>
            <li class="nav-item align-self-center">
                <a class="nav-link text-success bi-whatsapp" target="_blank" :href="whatsappNumberAndSubject"></a>
            </li>
            <li class="nav-item align-self-center">
                <a class="nav-link text-secondary bi-map" target="_blank" href="https://www.google.com.mx/maps/place/Carl's+Jr.+Punto/@25.7872633,-109.0118502,15z/data=!3m1!5s0x86ba28b93e0f7bf5:0x1642631c419eeaf9!4m6!3m5!1s0x86ba25f833b2385d:0x8b124324710bb07!8m2!3d25.7838!4d-109.0035199!16s%2Fg%2F11f4_xdx7r?entry=ttu"></a>
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
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useNavbarStore } from '../stores/navbar';
    import NavbarCatalogListItem from './NavbarCatalogListItem.vue';
    import { useNavbar } from '../composables/useNavbar';

    const { whatsappNumberAndSubject } = useNavbar();

    const navbarStore = useNavbarStore();
    const { showCatalogsMenu } = storeToRefs(navbarStore);
</script>

<style scoped>

</style>