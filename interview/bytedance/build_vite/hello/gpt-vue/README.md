## 项目亮点和难点

- 可以安排和设计的
   - gpt AGI的时代已经到了
   AIGC   生成式人工智能  OPENAI  chatgpt  应用形式  chatbot
   文本生成   文本生成图片(stablediffusion)   文本生成视频(sora)


   AGI  通用人工智能  机器人

   智能驾驶
   终局思维  技术变革已来  llm 加速了学习速度的能力 什么都能做，团队里想通过未来3年的团力，能成为一名优秀的的开发工程师，陪团队一起拥抱AI红利。


   - 技术栈
   打好文稿，练了几次  1000次
      - vue/vue-router/pinia 全家桶
      陈述的过程，必需(没有亮点就是亮点)，
      - typescript
      - 学习一下，dependiences  有点深度的依赖包
         - markdown-it 解析markdown成html
         - crypto-js 安全性  加密
         - tailwindcss
            - 原子化  css 开发 省力高效
            - css 工程化  开发依赖，配置文件 ，生成css文件
            - 适配rem
            - 自定义过tailwind.css  组件类 @apply 一下解决复用
         
   ## 亮点
   - 路由懒加载
      - 首页加载速度，性能关键     ()=>inport()
      - Suspense 优化异步加载组件体验 ，比如显示loading
      - slot
      默认  具名...
      - 路由守卫
      - 路由动画transition 页面动画
      - 骨架屏

      - 代码的封装写的挺好
         - 干净漂亮的分离一些函数，一个函数只做一个功能。
         举例
         - getAPIKey()  开源项目可以免费使用apikey
         - clearMessageContent()
         - tchConfigStatus();


   - 难点
      - 使用了cryptoJS 加密用户openai  api-key
         - 引入 crypto-js
         - .AES.encrypt(原字符串，签名)
         - .AES.decrypt(加密字符串，签名)

   - 功能点介绍
      - chatbot 模块
         - 与OpenAI LLM 进行 生成式问答功能
         - 使用了crypto-js对用户的apikey 进行加密
         - 根据功能点，函数封装的很细，便于我们的复用和维护
            getAPIKey  saveApikey  getSecretkey clearMessageContent  switchConfigStatus  sendOrSave

