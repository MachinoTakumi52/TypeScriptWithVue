import { defineStore } from "pinia";
import { ref } from "vue";
import MockAdapter from "axios-mock-adapter";

/**モックインスタンス状態管理 */
export const useMockStore = defineStore("mock", () => {
  /**モックアダプターインスタンス */
  const mock = ref<MockAdapter>();
  return { mock };
});
