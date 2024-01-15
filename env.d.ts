/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly MY_API_URL: string,
    readonly MY_SLIDER_TIMER: string,
    readonly MY_WHATSAPP_NUMBER: string,
    readonly MY_WHATSAPP_SUBJECT: string,
    readonly MY_MAPBOX_TOKEN: string,
    readonly MY_FACEBOOK_URL: string,
    readonly MY_X_URL: string,
    readonly MY_INSTAGRAM_URL: string,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}