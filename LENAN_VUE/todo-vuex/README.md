# vue 数据流


- 数据流    
    数据库 todos->mvc 架构  router+controller+model

- HTTP 
    GET  /toods    MVC
    router  /todos
    controller  todosController    业务逻辑  select * from todos
    model   表的结构的抽象
    api接口   返回json数据

- 前后端分离  
    - api  
    - vuex    vue的大型项目，大公司一样。   财务
    state    getters mutations  actions

    - api   ->vuex(管理者页面要用的数据流)->   components

- vue 组件开发难的是设计数据
    - ref/reactive      私有数据
    - props   父组件
    - computed  计算属性