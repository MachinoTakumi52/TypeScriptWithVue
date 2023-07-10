<script lang="ts" setup>
import { ref, watch } from "vue";

/**親コンポーネントから受け取った値 */
const props = defineProps<{ modelValue: number | null }>();

/**子コンポーネントで発生したイベントや変更を親コンポーネントに伝える */
const emits = defineEmits<{ (e: "update:modelValue", text: number): void }>();

const numberValue = ref(props.modelValue);
//親コンポーネントに変更を伝える
watch(numberValue, () => {
  emits("update:modelValue", numberValue.value!);
});
</script>
<template>
  <div></div>
  <input
    type="button"
    value="button"
    @click="
      () => {
        if (numberValue === null) {
          return;
        }
        numberValue++;
      }
    "
  />
  <div>{{ numberValue }}</div>
</template>
