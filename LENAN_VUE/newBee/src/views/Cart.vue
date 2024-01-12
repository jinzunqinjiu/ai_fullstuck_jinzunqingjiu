<template>
  <div class="cart-box">
    <SimpleHeader title="购物车" :back="false" />
    <div class="cat-body">
      <van-checkbox-group v-model="result" @change="groupChange">
        <van-swipe-cell v-for="item in list" :key="item.goodsID">
          <van-checkbox :name="item.cartItemId"></van-checkbox>

          <van-card :num="item.goodsCount" :price="item.sellingPrice" :title="item.goodsName
            " class="goods-card" :thumb="item.goodsCoverImg">
            <template #footer>
              <van-stepper v-model="item.goodsCount" min="1" max="5" @change="numChange" :name="item.cartItemId" />
            </template>
          </van-card>

          <template #right>

            <van-button square @click="deleteGoods(item.cartItemId)" text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>
    <!-- sunmit -->
    <van-submit-bar :price="totalPrice * 100" button-text="提交订单" @submit="onSubmit" class="submit">
      <van-checkbox v-model="checkALL" class="checkALL" @click="allchek">全选</van-checkbox>
    </van-submit-bar>
    <NavBar />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import SimpleHeader from '../components/SimpleHeader.vue';
import { ref } from 'vue'
import { getCart, modifyCart, deleteCartItem } from '@/api/cart'
import { onMounted } from 'vue';
import { computed } from 'vue'
import { useStore } from 'vuex';
const store = useStore()
const result = ref([])
const list = ref([])
const checkALL = ref(false)
//触发事件s
const groupChange = () => {//选中商品
  checkALL.value = result.value.length === (list.value.length && result.value.length) > 0 ? true : false
}
const numChange = async (value, detail) => {//修改数量
  console.log(value, detail)
  const params = {
    cartItemId: detail.name,
    goodsCount: value

  }
  await modifyCart(params)
}

const onSubmit = () => {//提交订单
  console.log(result)
}

const allchek = () => {//复选框的点击
  if (!checkALL.value) {
    result.value = []
  } else {
    result.value = list.value.map(item => item.cartItemId)
  }
}

const totalPrice = computed(() => {//计算属性中的依赖变量有变动的时候
  let _list = list.value.filter((item) => result.value.includes(item.cartItemId))
  console.log(_list, '--------')
  const allPrice = _list.reduce((pre, item, index, arr) => {
    return pre += item.sellingPrice * item.goodsCount
  }, 0)
  return allPrice
})

const deleteGoods = async (id) => {
  await deleteCartItem(id)
  init()
  store.dispatch('setCartCountAction')
}

onMounted(async () => {
  init()
})

const init = async () => {
  const { data } = await getCart({ pageNumber: 1 })
  console.log(data)
  list.value = data
  result.value = data.map(item => item.cartItemId)
  checkALL.value = data.length > 0 ? true : false
}

</script>

<style lang="less" scoped>
.cat-body {
  margin: 16px 0 100px 0;
  padding-left: 10px;
}

.checkALL {
  width: 60px;
}
</style>
<style>
.van-swipe-cell__wrapper {
  display: flex;
}

.van-card.goods-card {
  width: 100%;
  background-color: #fff;
}

.van-checkbox {
  width: 23px;
}

.delete-button {
  height: 100%;
}

.van-card__footer {
  position: absolute;
  right: 16px;
  bottom: 8px;
}

.van-card__num {
  position: absolute;
  right: 0px;
  top: 0;
}

.submit {
  bottom: 50px;
}
</style>