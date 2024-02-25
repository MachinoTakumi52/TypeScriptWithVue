<script setup lang="ts"></script>

<template>
  <label class="toggle-button-001">
    <input type="checkbox" />
  </label>
</template>

<style scoped>
.toggle-button-001 {
  display: block;
  position: relative;
  width: 100px;
  height: 50px;
  border-radius: 50px;
  background-color: #dddddd;
  cursor: pointer;
  transition: background-color 0.4s;
}

.toggle-button-001:has(:checked) {
  background-color: #4bd865;
}

.toggle-button-001::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 5px rgb(0 0 0 / 20%);
  background-color: #fff;
  content: "";
  transition: left 0.4s;
}

.toggle-button-001:has(:checked)::after {
  left: 50px;
}

.toggle-button-001 input {
  display: none;
}
</style>
