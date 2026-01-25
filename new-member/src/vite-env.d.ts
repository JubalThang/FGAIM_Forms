interface ImportMetaEnv {
    readonly VITE_GOOGLE_SHEETS_API_URL: string;
    readonly VITE_GOOGLE_SHEETS_API_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}   