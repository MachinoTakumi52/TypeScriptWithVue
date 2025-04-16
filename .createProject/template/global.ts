import { defineStore } from "pinia";
import { ref } from "vue";

/** ストア */
export const useGlobalStore = defineStore("global", () => {
  const counter = ref<number>(0);
  return { counter };
});
