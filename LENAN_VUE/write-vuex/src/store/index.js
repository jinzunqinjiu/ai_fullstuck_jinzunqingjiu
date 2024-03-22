import { createStore } from './gvuex'

const store = createStore({
    // 不会污染组件对象   this.data.count  this.count   
    state() {
        return {
            count: 1,
            todos: []
        }
    },
    getters: {
        double(state) {
            return state.count * 2
        },

    },
    // 修改 状态的改变可以由mutation来记录
    mutations: {
        add(state) {
            state.count++
        },
        addTodos(state, payload = []) {
            state.todos = [
                ...state.todos,
                ...payload
            ]
        }
    },
    actions: {
        fetchTodos: async ({ commit }) => {
            const todos = await getTodos(); // server api 
            commit('addTodos', todos)
        },
        // UI组件 + 数据管理  API请求都在这
        asyncAdd({ commit, state }) {
            setTimeout(() => {
                // commit('add')
                commit('add')
            }, 1000)
        },
        add({ commit }) {
            commit('add')
        }
    }
})

export default store 