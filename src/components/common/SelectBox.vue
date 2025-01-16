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
  placeholder?: String;
}
const props = defineProps<definePropsModel>();
//選択されたアイテム
const selectItem = ref<ItemModel | null>(props.modelValue);
const readonlyProp = ref<boolean>(props.readonly == null ? false : props.readonly);
//選択された内部値
const selectedInternalValue = ref<number | null>(selectItem.value == null ? null : selectItem.value!.internalValue);
//選択された表示値
const selectedDisPlayValue = computed(() => {
  return selectItem.value == null ? props.placeholder : selectItem.value!.disPlayValue;
});
//選択値がひらいているかどうか
const isOpenDropDown = ref<boolean>(false);
//選択値表示領域
const dropdownTop = ref<string>();
const dropdownLeft = ref<string>();
const dropdownMinWidth = ref<string>();

//値を監視
//子コンポーネントの値が変更されたら親へ反映させる
watch(selectedInternalValue, () => {
  //セレクトボックスに格納されているリストから選択されたvalue値を元にItemModel型として値を返却
  selectItem.value = props.items.filter((x) => selectedInternalValue.value == x.internalValue)[0];
  emit("update:modelValue", selectItem.value);
});
//子から親へ発火させるイベント
const emit = defineEmits<{ "update:modelValue": [selectItem: ItemModel] }>();

//ドロップダウン表示
const onClickDropDownButton = (event: Event) => {
  //コンボボックスの位置取得
  const rect = (event.target as HTMLInputElement).getBoundingClientRect();
  //ドロップダウン表示位置を指定
  dropdownTop.value = `${rect.top + rect.height - 1}px`;
  dropdownLeft.value = `${rect.left}px`;
  dropdownMinWidth.value = `${rect.width - 10}px`;

  isOpenDropDown.value = !isOpenDropDown.value;
};

const onClickSelectBox = () => {
  isOpenDropDown.value = !isOpenDropDown.value;
};

//クリックされたアイテムをコンボボックスに表示
const onClickDropdownMenuItem = (internalValue: number) => {
  selectedInternalValue.value = internalValue;
};
</script>

<template>
  <!-- <select v-if="readonly == false" v-model="selectValue" :style="{ width: width, fontSize: fontSize }">
    <option v-for="item in items" :key="item.internalValue" :value="item.internalValue">{{ item.disPlayValue }}</option>
  </select>
  <TextFiled v-else v-model="selectItem.disPlayValue" :readonly="true" :width="width" :font-size="fontSize"></TextFiled> -->
  <!-- <select v-model="selectValue" :style="{ width: width, fontSize: fontSize }" :class="{ 'non-active': readonly }">
    <option v-for="item in items" :key="item.internalValue" :value="item.internalValue">{{ item.disPlayValue }}</option>
  </select> -->
  <div class="dropdown">
    <div class="select">
      <input
        style="cursor: default"
        readonly="true"
        type="text"
        @click="onClickDropDownButton"
        :value="selectedDisPlayValue"
        :class="{ 'non-active': readonly }"
        :style="{ width: width, fontSize: fontSize }"
      />
    </div>
    <div class="dropdown__menu-layer" :class="{ 'dropdown__menu-layer--show': isOpenDropDown }" @click="onClickSelectBox">
      <ul class="dropdown__menu dropdown_place">
        <li v-for="item in items" :key="item.internalValue" @click="onClickDropdownMenuItem(item.internalValue)" class="dropdown__item">{{ item.disPlayValue }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* select {
  display: block;
  width: 20em;
  font-size: 16px;
  padding: 0.7em;
  max-width: 100%;
  border: 1px solid #999;
  border-radius: 0.4rem;
  box-sizing: border-box;
} */

/* .select::after {
  content: "";
  margin-left: 0.5em;
  display: inline-block;
  border-style: solid;
  border-width: 0.5em 0 0.5em 0.865em;
  border-color: transparent transparent transparent #000;
  transform: translateY(0.1em) scale(0.8) rotate(90deg);
} */

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
.dropdown__btn {
  border: 1px solid #666;
  border-radius: 4px;
  background-color: #fff;
  padding: 5px 15px 5px 8px;
  text-align: left;
  min-width: 150px;
  position: relative;
  cursor: pointer;
}

.dropdown__btn::after {
  content: "g";
  position: absolute;
  border: 4px solid #333;
  border-bottom: 0;
  border-left-color: transparent;
  border-right-color: transparent;
  top: calc(50% - 3px);
  right: 10px;
  width: 0;
  height: 0;
}

.dropdown__btn:hover {
  background-color: rgba(83, 172, 217, 0.1);
}

.dropdown__menu-layer {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: none;
}

.dropdown__menu-layer--show {
  z-index: 999;
  display: block;
}

.dropdown__menu {
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);

  position: absolute;
  top: 40px;
  padding: 4px;
}
.dropdown_place {
  top: v-bind(dropdownTop);
  left: v-bind(dropdownLeft);
  min-width: v-bind(dropdownMinWidth);
}

.dropdown__item {
  font-size: 13px;
  padding: 4px;
  cursor: pointer;
}

.dropdown__item:hover {
  background-color: rgba(102, 102, 102, 0.1);
}

.dropdown__item--active {
  background-color: rgba(189, 216, 252, 0.3);
}

.non-active {
  pointer-events: none;
  background-color: #c8c8c8;
}
</style>
