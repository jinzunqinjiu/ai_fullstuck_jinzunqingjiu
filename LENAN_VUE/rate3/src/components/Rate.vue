<script setup>
import { ref, defineProps, computed, defineEmits } from 'vue';
//自己的分值响应式变量

const themeObj = {
    black: "#000",
    white: "#fa5413",
    orange: "#40a9ff",
    red: "#f5222d"
}
//  父子组件信任通信
// 外界传输的参数对象
// UI 状态  动态的
let props = defineProps({
    value: Number,//   number  数据类型
    theme: {
        type: String,
        // 参数数比较复杂的时候
        default: 'orange'
    }
} //   string  数据类型
);
let emits = defineEmits(['update-rate'])
// 计算属性 ，data/ props s
let width = ref(props.value)
let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value));
let fontStyle = computed(() => `color:${themeObj[props.theme]}`)
let fontWidth = computed(() => `width:${width.value}em`)
const mouseOver = (num) => {
    // 鼠标移入
    width.value = num;
}
const mouseOut = () => {
    width.value = props.value
}
const onRate = (num) => {
    //数据和状态的统一
    emits('update-rate', num)

}
</script>

<template>
    <!-- // 样式文本   -->
    <div :style="fontStyle">
        <div class="rate" @mouseout="mouseOut">
            <span v-for="num in  5" :key="num" @mouseover="mouseOver(num)">☆</span>
            <span class="hollow" :style="fontWidth">
                <span v-for="num in  5" :key="num" @click="onRate(num)">★</span>
            </span>
        </div>
    </div>
</template>

<style scoped>
.rate {
    position: relative;
    display: inline-block;

}

.rate>span.hollow {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
}
</style>
