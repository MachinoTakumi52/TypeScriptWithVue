<script lang="ts" setup>
import SampleComponent from "@/components/SampleComponent.vue";
import { ref } from "vue";
const quantityText = ref<number | null>(1);
</script>
<template>
  <div>
    <SampleComponent v-model="quantityText"></SampleComponent>
    <SampleComponent v-model="quantityText"></SampleComponent>
    <SampleComponent v-model="quantityText"></SampleComponent>
    <SampleComponent v-model="quantityText"></SampleComponent>
    <SampleComponent v-model="quantityText"></SampleComponent>
  </div>
</template>
