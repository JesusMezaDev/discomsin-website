<template>
    <div class="row my-2">
      <div class="col">
        <nav id="navbar" class="navbar bg-body-tertiary px-3">
            <a href="/">
                <img src="/img/logo.png" alt="logo">
            </a>
            <ul class="nav nav-pills fs-4">
                <li class="nav-item">
                    <a class="nav-link text-blue bi-twitter" href="https://twitter.com"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-blue bi-facebook" href="https://facebook.com"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-secondary bi-instagram" href="https://instagram.com"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-success bi-whatsapp" href="https://www.whatsapp.com"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-secondary bi-map" href="https://www.google.com.mx/maps/place/Carl's+Jr.+Punto/@25.7872633,-109.0118502,15z/data=!3m1!5s0x86ba28b93e0f7bf5:0x1642631c419eeaf9!4m6!3m5!1s0x86ba25f833b2385d:0x8b124324710bb07!8m2!3d25.7838!4d-109.0035199!16s%2Fg%2F11f4_xdx7r?entry=ttu"></a>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link text-black" :to="{ name: 'about' }">Quiénes somos</RouterLink>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" @click="showCatalogsMenu = !showCatalogsMenu">
                        Catálogos
                    </a>
                    <ul class="dropdown-menu" :class="{ 'show': showCatalogsMenu }">
                        <li>
                            <a href="#" class="nav-link text-black" role="button" @click="redirectTo({ catalogName: 'salas', catalogDescription: 'Salas' })">Salas</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-black" role="button" @click="redirectTo({ catalogName: 'electronicos', catalogDescription: 'Electrónicos' })">Electrónicos</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</div>
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

    interface Pictures {
        url: string;
    }

    const pictures = ref<Pictures[]>([]);

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
        currentCatalogDescription.value = catalogDescription;
        await getImagesFromCatalog(catalogName);
        router.push({ name: 'catalogs' });
    }
</script>

<style scoped>
    @media screen and (min-width: 1200px) {
        img {
            height: 100%;
        }
    }
    
    @media screen and (max-width: 480px) {
        img {
            height: 80px;
        }
    }
    
    @media screen and (max-width: 260px) {
        img {
            height: 50px;
        }
    }
</style>