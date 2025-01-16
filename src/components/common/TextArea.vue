<script setup lang="ts">
import { ref, watch } from "vue";

/**
 * 親から受け取る値
 * text:inputタグ内に格納される
 * maxLength:入力最大値
 * minLength:入力最小値
 * readonly:読取専用になる
 * placeholder:プレイスホルダー
 * fontSize:フォントサイズ
 * width:幅
 */
interface definePropsModel {
  modelValue: string | null;
  maxLength?: number;
  minLength?: number;
  readonly?: boolean;
  placeholder?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}
const props = defineProps<definePropsModel>();
const text = ref<string>(props.modelValue == null ? "" : props.modelValue);
//子から親へ発火させるイベント
const emit = defineEmits<{ "update:modelValue": [text: string] }>();

//値を監視
//子コンポーネントの値が変更されたら親へ反映させる
watch(text, () => {
  emit("update:modelValue", text.value);
});
</script>
<template>
  <textarea
    v-model="text"
    :readonly="readonly"
    :maxlength="maxLength"
    :minlength="minLength"
    :placeholder="placeholder"
    :style="{ width: width, height: height, fontSize: fontSize }"
    :class="{ 'non-active': readonly }"
  ></textarea>
</template>
<style scoped>
textarea {
  display: block;
  width: 20em;
  font-size: 16px;
  padding: 0.7em;
  border: 1px solid #999;
  border-radius: 0.4rem;
  box-sizing: border-box;
}
/**非活性時　スタイル */
.non-active {
  pointer-events: none;
  background-color: #c8c8c8;
}
</style>
