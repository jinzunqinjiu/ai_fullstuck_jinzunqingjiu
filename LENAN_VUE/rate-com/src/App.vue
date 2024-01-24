<script setup>
//响应式思想
//vue3的语法    ref响应式
//vue 主要工作是开发一个组件
import Rate from './components/Rate.vue'//分数变了会自动更新
//组件化思想
import { ref } from 'vue'
let score = ref(3)
setTimeout(() => {
  //状态的改变
  //组件=ui+数据状态
  score.value = 4//页面会自动更新
}, 2000)
</script>

<template>
  <!-- 评分，5颗星星，点亮 组件思维-->
  <Rate :value="score" />
  <Rate :value="score" theme="red" />
</template>

<style scoped></style>
