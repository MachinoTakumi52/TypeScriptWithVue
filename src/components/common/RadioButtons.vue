<script setup lang="ts">
import { computed, ref, useSlots, watch } from "vue";

///ラジオボタン選択値モデル
export interface ItemModel {
  ///表示値
  disPlayValue: string;
  ///内部値
  internalValue: number;
}

///propsモデル
interface definePropsModel {
  modelValue: number;
  ///display:選択値
  displayItems: ItemModel[];
  ///fontSize:フォントサイズ
  fontSize?: string;
  ///group
  group?: string;
  //sort
  sort?: number;
  //ラジオボタンサイズ
  radioButtonScale?: number;
  //r
}
const props = defineProps<definePropsModel>();

const selectItem = ref<number>(props.modelValue);

const sortNumber = ref<number>(typeof props.sort === undefined ? 1 : props.sort!);

const radioButtonScaleRef = computed(() => {
  return typeof props.radioButtonScale === "undefined" ? 1.5 : props.radioButtonScale;
});

//子から親へ発火させるイベント
const emit = defineEmits<{ "update:modelValue": [selectItem: number] }>();

const changed = () => {
  emit("update:modelValue", selectItem.value);
};
</script>
<template>
  <div :class="{ row: sortNumber === 2 }">
    <div v-for="displayItem in displayItems">
      <input style="margin-right: 0.8em" type="radio" :name="props.group" :id="'' + displayItem.internalValue" :value="displayItem.internalValue" v-model="selectItem" @changed="changed" />
      <label :style="{ fontSize: fontSize }" :for="'' + displayItem.internalValue">{{ displayItem.disPlayValue }}</label>
    </div>
  </div>
</template>
<style scoped>
input[type="radio"] {
  transform: scale(v-bind(radioButtonScaleRef));
}
label {
  font-size: 1em;
  user-select: none;
}

.row {
  display: flex !important;
}
</style>
