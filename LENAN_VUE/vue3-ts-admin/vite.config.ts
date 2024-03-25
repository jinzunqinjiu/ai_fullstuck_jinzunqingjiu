import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//自动引入elementplus
//ts->js->es5  ts-loader-> babel->es5

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      views: path.resolve(__dirname, 'src/views'),//短链接
      interface: path.resolve(__dirname, 'src/interface')
    }
  }
})
