import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
//全家桶，启用一下
import { createPinia } from 'pinia'


createApp(App)
    .use(createPinia())
    .mount('#app')