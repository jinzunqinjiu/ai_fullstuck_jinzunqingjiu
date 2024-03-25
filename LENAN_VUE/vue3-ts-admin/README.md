# 后台管理系统

- 开发的产品类型
      - 用户前台 vue单页页面
      - 后台api服务  接口
      前后端分离
      - 后台管理系统  
         - 开个权限吧
         - 公司内部的系统
           VUE3+TS
      VUE3(proxy)+TS(类型/严谨/质量)+VITE+elementplus(UI组件)+类库(echarts(数据可视化图标)/axios/js-cookie/moment(格式化时间)/sortable.js......)

   - vite的配置
   工程化套件  可以将ts->js->es5
   - 短段路径 alias
   @->src  
   views->src/views
   interfaces->src/interface
   components->src/components

   - 自动加载elenment-plus
   - @types/node 
       - ts有类型系统
       - node path 没有类型系统
       - string number +interface/type
       - 再安装一个node的类型补丁
       - vuex/vue-router ？@types/vuex? 用ts写出来的，自带类型系统
       vue3 99%也是  ts写出来的。


   - vue2和vue3的区别
     - 选项式API和composition API
         this不需要,拥抱函数式编程
      代码量大的话（200行+） data+methods+getters 相关的逻辑旋转跳跃
      composition API   可以让 reactive/ref+methods+onMounted 以业务为单位在一起

   -  响应式原理
   vue2 definedProperty （一次性代理完） 数组
   vue3  reactive    用的proxy，有13种拦截的方法，性能更好(懒代理)  ref用的是面向对象的get和set，核心 拦截+track+trigger+effect
     - v-if  v-for的优先级
     vue修正了bug  v-if  false 没必要渲染的

   - weakmap理解 
      依赖关系收集是靠全局的唯一的weakmap以响应式对象为key，再是他的一些属性，proxy可以一次性代理属性值用track收集的函数数组(effects),全部执行

      组件有很多，响应式对象有很多，路由组件很多，当组件下线，路由切换了，有些响应式不用维护，weakmap会在响应式对象被垃圾回收后自动删除。

   - mock.js
      - 本地假接口