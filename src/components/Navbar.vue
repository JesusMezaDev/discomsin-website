<template>
    <div class="row my-2 show-normal-menu">
        <div class="col d-flex justify-content-center">
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
                        <ul class="dropdown-menu" :class="{ 'show': showCatalogsMenu }" @mouseleave="showCatalogsMenu = false">
                            <li v-for="{ catalogName, catalogDescription } in catalogs">
                                <a href="#" class="dropdown-item text-black" @click="redirectTo({ catalogName, catalogDescription })">{{ catalogDescription }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
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
                                <ul class="dropdown-menu" :class="{ 'show': showCatalogsMenu }">
                                    <li v-for="{ catalogName, catalogDescription } in catalogs">
                                        <a href="#" class="dropdown-item text-black" @click="redirectTo({ catalogName, catalogDescription })">{{ catalogDescription }}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { storeToRefs } from 'pinia';

    import { useMainStore } from '@/stores/main';
    import { discomsinApi } from '@/api/cloudinary-api';
    import type { CatalogImages } from '@/interfaces/catalogImages';

    const mainStore = useMainStore();
    const { catalogImages, currentCatalogDescription, isLoading } = storeToRefs(mainStore);

    const router = useRouter();

    const showCatalogsMenu = ref(false);
    const showOffCanvasMenu = ref(false);
    
    const whatsappNumberAndSubject = ref(`https://wa.me/${ import.meta.env.MY_WHATSAPP_NUMBER || '52XXXXXXXXXX' }?text=${ encodeURIComponent(import.meta.env.MY_WHATSAPP_SUBJECT || '') }`);

    const catalogs = ref<{ catalogName: string, catalogDescription: string }[]>([
        {
            catalogName: 'lineablanca',
            catalogDescription: 'Línea Blanca',
        },
        {
            catalogName: 'muebles',
            catalogDescription: 'Muebles',
        },
        {
            catalogName: 'electronica',
            catalogDescription: 'Electrónica',
        },
        {
            catalogName: 'cocinayelectrodomesticos',
            catalogDescription: 'Cocina y Electrodomésticos',
        },
        {
            catalogName: 'decoracion',
            catalogDescription: 'Decoración',
        },
    ]);

    const getImagesFromCatalog = async (catalogName: string) => {
        isLoading.value = true;
        try {
            const { data } = await discomsinApi.get<CatalogImages[]>(`catalogs/${ catalogName }`);
            catalogImages.value = data;
        } catch (error) {
            
        }
        finally {
            isLoading.value = false;
        }
    }

    const redirectTo = async (options: { catalogName: string, catalogDescription: string}) => {
        const { catalogName, catalogDescription } = options;
        showCatalogsMenu.value = false;
        showOffCanvasMenu.value = false;
        currentCatalogDescription.value = catalogDescription;
        await getImagesFromCatalog(catalogName);
        router.push({ name: 'catalogs' });
    }
</script>

<style scoped>
    .normal-logo {
        height: 100%;
    }

    @media screen and (max-width: 1600px) {
        .normal-logo {
            height: 90px;
        }
    }
    
    @media screen and (max-width: 1280px) {
        .normal-logo {
            height: 80px;
        }
    }

    @media screen and (max-width: 1024px) {
        .normal-logo {
            height: 60px;
        }
    }

    .off-canvas-container {
        background: rgba(0, 0, 0, 0.3);
        z-index: 3;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        position: fixed;
        visibility: hidden;
    }

    .off-canvas-container.show {
        visibility: visible;
    }

    .show-offcanvas-menu {
        display: none;
    }

    .show-normal-menu {
        display: block;
    }

    .off-canvas-logo {
        height: 80px;
    }

    @media screen and (max-width: 912px) {
        .show-offcanvas-menu {
            display: block;
        }

        .show-normal-menu {
            display: none;
        }
    }

    @media screen and (max-width: 414px) {
        .off-canvas-logo {
            height: 70px;
        }
    }
    
    @media screen and (max-width: 375px) {
        .off-canvas-logo {
            height: 60px;
        }
    }

    @media screen and (max-width: 280px) {
        .off-canvas-logo {
            height: 40px;
        }
    }

    .highlight-link:hover {
        color: #7c7c7c!important;
    }
</style>