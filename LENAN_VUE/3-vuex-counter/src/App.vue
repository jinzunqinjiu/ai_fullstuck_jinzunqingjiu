<template>
  <!-- 挂载counter组件 复用  管理 -->
  <!-- < /> -->
  <h1>推荐</h1>
  <!-- 动态绑定数据 -->
  <Banner :per-page="3" />
</template>

<script setup>
//模块化？
// import Counter from './components/Counter.vue'

import Banner from './components/Banner.vue'
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;

}
</style>
