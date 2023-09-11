import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// エラーハンドル
import { errorHandler } from "@/commons/errorHandler";
import { createMockAdapter, isMock } from "./stores/mockStore";
import { sampleServiceMock } from "./mocks/sampleServiceMock";

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

//mockを使用するかどうか
if (isMock) {
  //モックインスタンス生成
  createMockAdapter();
  //以下にモックサービスを記載
  sampleServiceMock();
}

app.mount("#app");
