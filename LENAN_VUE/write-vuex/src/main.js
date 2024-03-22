import { createApp } from 'vue'
//vue只负责响应式和组件  VDOM
//其他的交给生态
//use
//store.install
import './style.css'
import App from './App.vue'
import store from './store'
createApp(App).use(store).mount('#app')
