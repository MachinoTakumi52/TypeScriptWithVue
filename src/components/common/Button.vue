<script setup lang="ts">
import { computed, ref } from "vue";

///propsモデル
interface definePropsModel {
  ///背景カラー
  backgroundColor?: string;
  ///テキストカラー
  textcolor?: string;
  ///幅
  width?: string;
  ///フォントサイズ
  fontSize?: string;
  ///無効
  disabled?: boolean;
}
const props = defineProps<definePropsModel>();
//ホバー色
const isHover = ref<boolean | null>(props.disabled ? null : false);
//背景色とボーダー色とホバー時の文字色
//デフォルト色は水色
const backGroudColor = computed(() => {
  if (props.backgroundColor == undefined) {
    return "deepskyblue";
  } else {
    return props.backgroundColor;
  }
});
//テキスト色
//デフォルト色は白
const textColor = computed(() => {
  if (props.textcolor == undefined) {
    return "white";
  } else {
    return props.textcolor;
  }
});
</script>
<template>
  <button :disabled="disabled" :style="{ width: width, fontSize: fontSize }" :class="{ hover: isHover, disabled: disabled }" @mouseover="isHover = true" @mouseleave="isHover = false">
    <slot></slot>
  </button>
</template>
<style scoped>
/**テキストフィールド　スタイル */
button {
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 0.5em;
  font-weight: bold;
  transition: all 0.3s ease;
  position: relative;
  outline: none;
  border-radius: 5px;
  background: v-bind(backGroudColor);
  border: v-bind("2px solid " + backGroudColor);
  color: v-bind(textColor);
}
.hover {
  background: white !important;
  color: v-bind(backGroudColor) !important;
}

.disabled {
  pointer-events: none;
  background: darkgray !important;
  color: dimgray !important;
  border: 2px solid darkgray !important;
  opacity: 0.6;
}
</style>
