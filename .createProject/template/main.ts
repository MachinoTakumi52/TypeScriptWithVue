import { createApp } from "vue";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
import vuetify from "@/vuetify/index";

// エラーハンドル
import { errorHandler } from "@/utils/errorHandler";
import { sampleServiceMock } from "./mocks/sampleServiceMock";
import { useMockStore } from "./stores/mock";
import MockAdapter from "axios-mock-adapter";
import { httpJson } from "./utils/http";

const app = createApp(App);
//pinia追加
const pinia = createPinia();
//storeの状態管理を永続化(ページリロードしても消えないように)追加
pinia.use(createPersistedState());
app.use(pinia);
//ルーター追加
app.use(router);
//共通エラーハンドリング追加
app.use(errorHandler);
//vuetify追加
app.use(vuetify);

//モック
//インスタンス生成
//モックを使用するかどうか
// if (import.meta.env.VITE_IS_USED_MOCK === true) {
//   const mockStore = useMockStore();
//   mockStore.mock = new MockAdapter(httpJson, { delayResponse: 200 });
     // mockサービスファイルを定義
//   sampleServiceMock();
// }

app.mount("#app");
