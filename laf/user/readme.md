# Promise

- es6最让人兴奋的语法特点
- Promise 类，then  控制执行流程
    JS单线程，耗时任务(定时器，事件)，先跳过，再执行后面的
    ，代码的编写顺序和执行顺序不一致

    - 将定时器 请求等耗时任务，封装到函数里面，resolve函数
    - 实例上有个then方法，可以控制执行的流程
    - 调用resolve函数就可以运行   then
    