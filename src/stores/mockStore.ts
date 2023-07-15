import { defineStore } from "pinia";
import type MockAdapter from "axios-mock-adapter/types";
import mockAdapter from "axios-mock-adapter";
import { ref } from "vue";
import { httpJson } from "@/commons/http";

/**モック切り替えフラグ
 * TODO:定数ファイルに移動とか
 */
export const isMock: boolean = true;

/**モックインスタンス生成
 * TODO:どっか別の場所に移動かな
 */
export const createMockAdapter = (): void => {
  const mockStore = useMockStore();
  //インスタンス生成
  mockStore.mock = new mockAdapter(httpJson, { delayResponse: 200 });
};

/**モックインスタンス状態管理 */
export const useMockStore = defineStore(
  "mock",
  () => {
    /**モックアダプターインスタンス */
    const mock = ref<MockAdapter | null>(null);

    return { mock };
  }
  // { persist: true }
);
