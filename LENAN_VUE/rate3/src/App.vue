<template>
  <div>
    <Rate :value="score" theme="red" @update-rate="updated" />
    <!-- <Rate :value="score" /> -->
  </div>
</template>

<script setup>
import Rate from './components/Rate.vue'
import { ref } from 'vue';
const score = ref(1);
//  vue 开发思想是  数据与页面状态同步
const updated = (num) => {
  score.value = num;
}

</script>

<style></style>
