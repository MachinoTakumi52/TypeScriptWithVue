<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { getData, insertData, type resultModel } from "@/services/sampleService";

const items = ref<resultModel[]>();

const isRegist = ref<boolean>();

onMounted(async () => {
  /**データ取得 */
  items.value = await getData(null);

  /**データ登録 */
  isRegist.value = await insertData(1);
});
</script>
<template>
  <div class="sampleStyle">
    <div>home</div>
    <div v-for="item in items" :key="item.id">{{ item.name }}</div>
    <div>{{ isRegist }}</div>
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
