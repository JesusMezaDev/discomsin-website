/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly MY_API_URL: string,
    readonly MY_SLIDER_TIMER: string,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}