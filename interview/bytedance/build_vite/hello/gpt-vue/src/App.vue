<script setup lang="ts">
</script>

<template>
  <!-- 
    异步组件  没有加载之前，Suspense显示占位符
    懒加载，页面级组件加载出来，显示点loading... -->
  <Suspense>
    <template #default>
      <router-view />
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<style scoped></style>
