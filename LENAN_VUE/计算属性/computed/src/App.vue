<template>
  <div>
    <h2>{{ title }}</h2>
    <h2> {{ totalPrice }} </h2>
    <button @click="addCount">add</button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
const title = ref("物品的价格")
const price = ref("100")
const count = ref(2)
const totalPrice = computed(() => price.value * count.value, console.log("1"))
watch(count, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})
const addCount = () => {
  count.value++
}
</script>
<style lang="scss" scoped></style>