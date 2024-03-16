# vite之前的前端工程化脚手架


- 把项目跑起来
 vue 项目 .vue组件   css文件(stylus)   image...
 静态资源  打包一下，可执行的  


- 打包
    - 将src目录下的资源  打包到index.html里面运行
    npm init -y
    - vite/webpack MVVM  开发工艺   基于命令行的后端实现。
    webpack  node
    vite node+go+rust



- vite webpack 比较
   - webpack   学习成本高  配置比较复杂  entry  out plugin
      vite 相对简单 
   - vite script  type="module" 引入main.js入口文件，利用了es6 Module的模块化机制  vite更快
     webpack  早期的没有ES6  Module可以用  所以需要webpack来打理文件的依赖关系  打包。

    - dist目录就是我们要上线的目录
    -  babel  js语法转换器 js 得到新生，最新的语法可以放心的使用，babel会帮我们转译。
    @babel/core  核心功能
    @babel/preset-env  预处理   按环境的要求编译成相应的代码 默认es6+ -> es5

    - webpack是厂长，babel就是车间主任
    - 将相应后缀的文件拉到babel  车间转译 babel-loader
       module   test  /\.js$/
       编译的工作时间。
