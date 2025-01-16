<script setup lang="ts">
import { computed, ref, watch } from "vue";

/**
 * 親から受け取る値
 * modelValue:デイトピッカーに入った値格納される
 * readonly:読取専用になる
 * fontSize:フォントサイズ
 * maxDate:最大表示日付
 * mindate:最小表示日付
 * width:幅
 */
interface definePropsModel {
  modelValue: Date | null;
  readonly?: boolean;
  width?: string;
  fontSize?: string;
  maxDate?: Date | null;
  minDate?: Date | null;
}
const props = defineProps<definePropsModel>();
const date = ref<Date | null>(props.modelValue);
//日付フォーマット関数
const formmatDate = (date: Date): string => {
  return date.getFullYear() + "-" + ("00" + (date.getMonth() + 1)).slice(-2) + "-" + ("00" + date.getDate()).slice(-2);
};
//入力値表示用
const disPlaydate = computed(() => {
  if (date.value == null) {
    return null;
  }
  return formmatDate(date.value);
});
//最大値表示用
const disPlayMaxdate = computed(() => {
  if (props.maxDate == null) {
    return undefined;
  }
  return formmatDate(props.maxDate);
});
//最小値表示用
const disPlayMindate = computed(() => {
  if (props.minDate == null) {
    return undefined;
  }
  return formmatDate(props.minDate);
});

//値変更時処理
const changeDate = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    date.value = new Date(event.target.value);
  } else {
    throw new Error("");
  }
};

//子から親へ発火させるイベント
const emit = defineEmits<{ "update:modelValue": [date: Date | null] }>();

//値を監視
//子コンポーネントの値が変更されたら親へ反映させる
watch(date, () => {
  emit("update:modelValue", date.value);
});
</script>
<template>
  <input
    id="aaa"
    type="date"
    :readonly="readonly"
    @change="changeDate($event)"
    :max="disPlayMaxdate"
    :min="disPlayMindate"
    :value="disPlaydate"
    :class="{
      'non-active': readonly,
    }"
    :style="{ width: width, fontSize: fontSize }"
  />
</template>
<style scoped>
/**テキストフィールド　スタイル */
input {
  display: block;
  width: 14em;
  font-size: 16px;
  padding: 0.7em;
  max-width: 100%;
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
