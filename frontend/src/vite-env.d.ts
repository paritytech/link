/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEFAULT_CHAIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
