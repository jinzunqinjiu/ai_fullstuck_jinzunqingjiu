<template>
    <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" />
        <van-action-bar-icon icon="cart-o" text="购物车" :badge="badeeNum" v-if="badeeNum" />
        <van-action-bar-icon icon="cart-o" text="购物车" v-else="badeeNum" />
        <van-action-bar-button type="warning" text="加入购物车" @click="handleAddCart" />
        <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>
</template>

<script setup>
import { onMounted } from 'vue';
import { computed } from 'vue';
import { addCart } from '@/api/cart.js'
import { useStore } from 'vuex'
import { showSuccessToast } from 'vant';
// import { defineProps } from '../views/ProductDetail.vue'
const props = defineProps({
    id: String
})
const store = useStore()
// console.log(store)
const badeeNum = computed(() => {
    if (store.state.cartCount >= 1)
        return store.state.cartCount
})

onMounted(() => {
    store.dispatch('setCartCountAction')//store 中  actions里面的函数都要用dispatch触发
})
const handleAddCart = async () => {
    const res = await addCart({ goodsCount: 1, goodsId: props.id })
    if (res.resultCode === 200) {
        showSuccessToast('加入购物车成功')
        store.dispatch('setCartCountAction')
    }
}
console.log(badeeNum)
</script>

<style lang="less" scoped></style>
<style>
.van-button--warning {
    background: linear-gradient(to right, #6bd8d8, #1baeae);
}

.van-button--danger {
    background: linear-gradient(to right, #0dc3c3, #098888);
}
</style>