<script setup lang="ts">
import { computed, ref, watch } from "vue";

///セレクトボックス選択値モデル
export interface ItemModel {
  ///表示値
  disPlayValue: string;
  ///内部値
  internalValue: number;
}
///propsモデル
interface definePropsModel {
  ///items:アイテムリスト
  items: ItemModel[];
  ///selectItem:選択された値
  modelValue: ItemModel | null;
  ///width:幅
  width?: string;
  ///fontSize:フォントサイズ
  fontSize?: string;
  ///readonly:読み取り専用
  readonly?: boolean;
  placeholder?: string;
}
const props = defineProps<definePropsModel>();
//選択されたアイテム
const selectItem = ref<ItemModel | null>(props.modelValue);

//入力値
const inputValue = ref<string | null>(selectItem.value == null ? null : selectItem.value!.disPlayValue);

//コンボボックスリスト
// const comboList = computed(() => {
//   if (comInputValue.value == "" || comInputValue.value == null) {
//     return props.items;
//   }

//   var pattern = RegExp(comInputValue.value + "$");
//   console.log(props.items.filter((x) => pattern.test(x.disPlayValue)));
//   return props.items.filter((x) => pattern.test(x.disPlayValue));
// });
const comboList = ref<ItemModel[]>(props.items);

const onChange = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    inputValue.value = event.target.value;
  } else {
    throw new Error("");
  }
};

//値を監視
//子コンポーネントの値が変更されたら親へ反映させる
watch(inputValue, () => {
  console.log(inputValue.value);
  //セレクトボックスに格納されているリストから選択されたvalue値を元にItemModel型として値を返却
  selectItem.value = comboList.value.filter((x) => inputValue.value == x.disPlayValue)[0];
  emit("update:modelValue", selectItem.value);
});

//子から親へ発火させるイベント
const emit = defineEmits<{ "update:modelValue": [selectItem: ItemModel | null] }>();
</script>

<template>
  <!-- <div class="dropdown">
    <div class="select">
      <input style="cursor: default" type="text" @click="onClickDropDownButton" :v-model="inputValue" :class="{ 'non-active': readonly }" :style="{ width: width, fontSize: fontSize }" />
    </div>
    <div class="dropdown__menu-layer" :class="{ 'dropdown__menu-layer--show': isOpenDropDown }" @click="onClickSelectBox">
      <ul class="dropdown__menu dropdown_place">
        <li v-for="item in comboList" :key="item.internalValue" @click="onClickDropdownMenuItem(item.internalValue)" class="dropdown__item">{{ item.disPlayValue }}</li>
      </ul>
    </div>
  </div> -->
  <div class="dropdown">
    <div class="select">
      <input
        :placeholder="placeholder"
        style="cursor: default"
        type="text"
        :value="inputValue"
        @change="onChange($event)"
        :class="{ 'non-active': readonly }"
        :style="{ width: width, fontSize: fontSize }"
        list="list"
      />
    </div>
    <datalist id="list">
      <option v-for="item in comboList" :key="item.internalValue" :value="item.disPlayValue"></option>
    </datalist>
  </div>
</template>

<style scoped>
.dropdown {
  display: block;
  font-size: 14px;
}

input {
  width: 20em;
  font-size: 16px;
  padding: 0.7em;
  max-width: 100%;
  border: 1px solid #999;
  border-radius: 0.4rem;
  box-sizing: border-box;
}

.non-active {
  pointer-events: none;
  background-color: #c8c8c8;
}
</style>
