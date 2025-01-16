<script lang="ts" setup>
import sampleComponent from "@/components/sampleComponent.vue";
import { ref } from "vue";
const quantityText = ref<number | null>(1);
</script>
<template>
  <div>
    <sampleComponent v-model="quantityText"></sampleComponent>
    <sampleComponent v-model="quantityText"></sampleComponent>
    <sampleComponent v-model="quantityText"></sampleComponent>
    <sampleComponent v-model="quantityText"></sampleComponent>
    <sampleComponent v-model="quantityText"></sampleComponent>
  </div>
</template>
