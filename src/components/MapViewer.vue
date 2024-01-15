<template>
    <div class="container">
        <p class="fs-4">
            Llámanos al (667) 266-1951 o si lo prefieres, búscanos en nuestra sucursal en Avenida Licenciado Benito Juárez #1234, entre Francisco Javier Mina y Vicente Guerrero, Colonia Centro.
        </p>
        <div id="map" class="my-2" style="height: 75vh; height: 75dvh;"></div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import mapboxgl from 'mapbox-gl';

    const { Map, /*Marker,*/ Popup } = mapboxgl;

    onMounted(() => {
        const map = new Map({
            accessToken: import.meta.env.MY_MAPBOX_TOKEN,
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-108.9963244, 25.7926782],
            zoom: 14.5,
            attributionControl: false,
        });

        // new Marker({
        //     // color: '#000000',
        //     draggable: false,
        // })
        // .setLngLat([-108.9963244, 25.7926782])
        // .addTo(map);

        new Popup({
            closeOnClick: false,
            closeButton: false,
        })
        .setLngLat([-108.9963244, 25.7926782])
        .setHTML(`<img src="/img/logo.png" alt="logo" style="width: 220px;"><br /><p style="text-align: center;">¡Aquí podrás encontrarnos!</p>`)
        .addTo(map);
    });
</script>

<style scoped>
    
</style>