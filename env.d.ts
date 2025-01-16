/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** APIベースURL */
  readonly VITE_BASE_URL_FOR_WEB_API: string;

  /** モック有効化 */
  readonly VITE_IS_USED_MOCK: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
