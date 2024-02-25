<script setup lang="ts">
import { computed, ref, watch } from "vue";

///propsモデル
interface definePropsModel {
  modelValue: boolean | null;
  ///width:幅
  width?: string;
  ///fontSize:フォントサイズ
  fontSize?: string;
  ///チェックボックスサイズ
  checkBoxSize?: number;
  ///ラベルテキスト
  labelText?: string | null;
  ///readonly:読み取り専用
  readonly?: boolean;
}
const props = defineProps<definePropsModel>();

const isChecked = ref<boolean | null>(props.modelValue);

const checkBoxScale = computed(() => {
  return typeof props.checkBoxSize === "undefined" ? 1.5 : props.checkBoxSize;
});

//値を監視
//子コンポーネントの値が変更されたら親へ反映させる
watch(isChecked, () => {
  emit("update:modelValue", isChecked.value);
});

//子から親へ発火させるイベント
const emit = defineEmits<{ "update:modelValue": [isChecked: boolean | null] }>();
</script>

<template>
  <div>
    <input id="checkBox" type="checkbox" v-model="isChecked" @click="() => (isChecked = !isChecked)" :disabled="readonly" style="margin-right: 0.8em" />
    <label :style="{ fontSize: fontSize }" for="checkBox" :class="{ 'non-active': readonly }">{{ labelText }}</label>
  </div>
</template>

<style scoped>
/* チェックボックス全体 */

.non-active {
  color: darkgray;
}

input[type="checkbox"] {
  transform: scale(v-bind(checkBoxScale));
}

label {
  font-size: 1em;
  user-select: none;
}
</style>
