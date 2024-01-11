import { createStore } from 'vuex'
import { getCart } from '@/api/cart.js'
const store = createStore({
    state() {//全局公共的数据源===data
        return {
            cartCount: '',//购物车数量
        }
    },
    mutations: {  //专职修改state
        setCartCount(state, count) {
            state.cartCount = count
        }

    },
    actions: {//===async methods 可以放异步代码  调用mutations
        async setCartCountAction(context) {
            const { data } = await getCart()
            console.log(data)
            context.commit('setCartCount', data.length)
        }
    },
    getters: {

    }
})
export default store 