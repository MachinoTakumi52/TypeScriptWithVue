<script lang="ts" setup>
import { ref } from "vue";

const items = ref<number[]>([1, 2, 3, 4, 5]);
</script>
<template>
  <div class="sampleStyle">
    <div>home</div>
    <div v-for="item in items" :key="item">{{ item }}</div>
  </div>
</template>

<style scoped>
.sampleStyle {
  display: flex;
}

div {
  margin-right: 10px;
}
</style>
