<p align="center" style="background-color: #FFF;">
    <img src="https://discomsin.netlify.app/img/logo.png" alt="Logo" />
</p>

# Mueblería Discomsin

Este sitio fue hecho con [Vue](https://vuejs.org/), [Typescript](https://www.typescriptlang.org/) y [CSS](https://www.w3.org/Style/CSS/).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Personalizar configuración

Para más información ver el sitio de [Referencia de Configuración de Vite](https://vitejs.dev/config/).

## Instalación del Proyecto

```sh
npm install -E
```

### Compilar y Hot-Reload para Desarrollo

```sh
npm run dev
```

### Type-Check, Compilación y Minify para Producción

```sh
npm run build
```
## Tamaño de las imágenes

A continuación se describen los tamaños de las imágenes para cada sección o componente, primeramente el ancho y luego el alto (en pixeles):

1. Slider o Carrusel: 1300x350
2. Novedades: 610x300
3. Catálogos (todos): 300x205

## Configuración del Slider o Carrusel

Se puede configurar los tiempos de transición entre imágenes del Slider o Carrusel, para ello se necesita modificar el valor de la variable de entorno `MY_SLIDER_TIMER`. Por ejemplo, si su valor es de `8000` entonces el cambio entre imágenes será cada 8 segundos. En caso de `no existir` la variable, o que su valor sea `vacío` el valor por defecto será de 5 segundos entre cambio de imágenes. En caso de ser menor a `0`, entonces se "desactiva" la reproducción automática de imágenes.

## Llamando a la API para obtener los Catálogos

Para poder obtener las imágenes de los catálogos, se debe utilizar el nombre de la carpeta tal y como se hizo en [Clodinary](https://cloudinary.com/). Por ejemplo, si se creó la carpeta `televisiones` entonces se debe llamar al catálogo con el siguiente código:

```sh
await discomsinApi.get<CatalogImages[]>(`catalogs/${ catalogName }`);
```

En donde `catalogName` es la variable que contendrá el valor `televisiones` para obtener todas las imágenes de ese catálogo.