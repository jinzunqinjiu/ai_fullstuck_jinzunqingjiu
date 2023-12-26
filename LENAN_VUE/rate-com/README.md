# 项目工程化

- 开发vue项目， spa
    - 工程化视角，打地基，搭建脚手架
        vue   create   或者 npm init vite  不用从零开始
    - 项目的开发模板
        - npm init vite    vite就是脚手架   开发流程也是工艺的
    - vite 就是这套工艺流程
    - vue/js  选择你的技术栈
    - 生成了一个开发模板？项目文件包
    - npm i  安装一个依赖
    - npm run dev


- 组件思想  
    - templete 里面写的非html,组件可以复用，同事之间复用，项目之间也可以复用。<Rate/>
    - components/Rate.vue
    - 父子组件通信  父组件负责管理数据  子组件负责渲染(UI 简单)
        <Rate value=''/>props  外部传参
    - 数据是有状态的，响应式，数据改变(状态改变)  页面会自动更新(热更新)
      let score=ref(3)   得到了一个状态数据.   data  自有数据
      score.value=4//状态数据的改变，用到他的地方  进行响应

    - 数据类型  data/props/computed
    - 数据绑定{{value}}
        动态数据绑定：value="crore"
