<template>
  <div>
    <p ref="refP">消息：{{ massage }}</p>
    <button @click="uodataMsg">点击按钮</button>
  </div>
</template>

<script  setup>
import { ref, nextTick } from 'vue'

const massage = ref('初始消息')

const refP = ref(null)

const uodataMsg = (() => {
  massage.value = '点击按钮后更新的消息'
  console.log(refP.value)
})
nextTick(() => {
  console.log(refP.value)
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
