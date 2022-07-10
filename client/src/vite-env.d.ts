/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REQUEST_BASE: String;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
