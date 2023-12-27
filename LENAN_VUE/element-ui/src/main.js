import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './config/rem.js'
import './assets/style/common.less'

createApp(App).use(ElementPlus).use(router).mount('#app')
