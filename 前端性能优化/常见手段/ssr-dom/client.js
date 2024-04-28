// client.js
import { createApp } from './app.js'
server.use(express.static('.'))
createApp().mount('#app')