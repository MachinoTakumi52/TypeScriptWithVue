import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// エラーハンドル
import { errorHandler } from "@/commons/errorHandler";
import { sampleServiceMock } from "./mocks/sampleServiceMock";
import { useMockStore } from "./stores/mock";
import MockAdapter from "axios-mock-adapter";
import { httpJson } from "./commons/http";

//vuetify関係
// import "vuetify/styles";
// import { createVuetify, type ThemeDefinition } from "vuetify";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";
// import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

//pinia永続化
// import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

//vuetifyカラーテーマ
// const myCustomLightTheme: ThemeDefinition = {
//     dark: false,
//     colors: {
//       // 背景色.黒
//       basicBackgroundColor: "#212121",
//       //背景色.緑
//       anotherBackgroundColor: "#c4d79b",
//       //文字や線の色.白
//       basicCharacterColor: "#ffffff",
//       //文字、線の色.赤
//       basicRedColor: "#e60033",
//     },
//   };

//vuetifyインスタンス
//   const vuetify = createVuetify({
//     components,
//     directives,
//     theme: {
//       defaultTheme: "myCustomLightTheme",
//       themes: {
//         myCustomLightTheme,
//       },
//     },
//     icons: {
//       defaultSet: "mdi",
//       aliases,
//       sets: {
//         mdi,
//       },
//     },
//   });

const app = createApp(App);
//pinia追加
const pinia = createPinia();
//storeの状態管理を永続化(ページリロードしても消えないように)追加
// pinia.use(piniaPluginPersistedstate);
app.use(pinia);
//ルーター追加
app.use(router);
//共通エラーハンドリング追加
app.use(errorHandler);
//vuetify追加
// app.use(vuetify);

//モック
//インスタンス生成
///モックを使用するかどうか
if (import.meta.env.VITE_IS_USED_MOCK === "true") {
  const mockStore = useMockStore();
  mockStore.mock = new MockAdapter(httpJson, { delayResponse: 200 });
  //TODO mockサービスファイルを定義
  sampleServiceMock();
}

app.mount("#app");
