import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/reset.css'
import 'lib-flexible/flexible.js'
createApp(App).use(router).mount('#app')
