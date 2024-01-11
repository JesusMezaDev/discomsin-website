import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useMainStore } from '@/stores/main';
import { useNavbarStore } from '../stores/navbar';
import { discomsinApi } from '@/api/cloudinary-api';
import type { CatalogImages } from '@/interfaces/catalogImages';

export const useNavbar = () => {
    const mainStore = useMainStore();
    const { catalogImages, currentCatalogDescription, isLoading } = storeToRefs(mainStore);

    const navbarStore = useNavbarStore();
    const { showCatalogsMenu, showOffCanvasMenu } = storeToRefs(navbarStore);

    const router = useRouter();
    
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

    return {
        /* Variables */
        catalogs,
        whatsappNumberAndSubject,

        /* Functions/Methods */
        redirectTo: async (options: { catalogName: string, catalogDescription: string}) => {
            const { catalogName, catalogDescription } = options;
            showCatalogsMenu.value = false;
            showOffCanvasMenu.value = false;
            currentCatalogDescription.value = catalogDescription;
            await getImagesFromCatalog(catalogName);
            router.push({ name: 'catalogs' });
        }
    }
}