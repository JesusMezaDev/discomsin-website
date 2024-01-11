<template>
    <nav class="navbar show-offcanvas-menu">
        <div class="container-fluid">
            <a href="/">
                <img src="/img/logo.png" alt="logo" class="off-canvas-logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" @click="showOffCanvasMenu = !showOffCanvasMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="off-canvas-container" @click.self="showOffCanvasMenu = false" :class="{ 'show': showOffCanvasMenu }">
                <div class="offcanvas offcanvas-end w-75" style="z-index: 5;" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" :class="{ 'show': showOffCanvasMenu, 'hiding': !showOffCanvasMenu }">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" @click="showOffCanvasMenu = false"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 fs-3">
                            <li class="nav-item">
                                <a class="nav-link text-black bi-twitter-x" target="_blank" href="https://twitter.com">Twitter</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-blue bi-facebook" target="_blank" href="https://facebook.com">Facebook</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-secondary bi-instagram" target="_blank" href="https://instagram.com">Instagram</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-success bi-whatsapp" target="_blank" :href="whatsappNumberAndSubject">Whatstapp</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-secondary bi-map" target="_blank" href="https://www.google.com.mx/maps/place/Carl's+Jr.+Punto/@25.7872633,-109.0118502,15z/data=!3m1!5s0x86ba28b93e0f7bf5:0x1642631c419eeaf9!4m6!3m5!1s0x86ba25f833b2385d:0x8b124324710bb07!8m2!3d25.7838!4d-109.0035199!16s%2Fg%2F11f4_xdx7r?entry=ttu">Sucursales</a>
                            </li>
                            <li class="nav-item fs-4">
                                <RouterLink class="nav-link text-black" :to="{ name: 'about' }">Quiénes somos</RouterLink>
                            </li>
                            <li class="nav-item dropdown fs-4">
                                <a class="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" @click="showCatalogsMenu = !showCatalogsMenu">
                                    Catálogos
                                </a>
                                <NavbarCatalogListItem />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useNavbarStore } from '../stores/navbar';
    import NavbarCatalogListItem from './NavbarCatalogListItem.vue';
    import { useNavbar } from '../composables/useNavbar';
    
    const { whatsappNumberAndSubject } = useNavbar();

    const navbarStore = useNavbarStore();
    const { showCatalogsMenu, showOffCanvasMenu } = storeToRefs(navbarStore);
</script>

<style scoped>

</style>