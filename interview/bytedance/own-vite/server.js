//后端框架    commonjs
//服务器端    vite  是用服务器端写的
const Koa = require('koa');
const fs = require('fs');//node 文件系统   内置的模块
//实例化koa  就是一个后端应用  OOP
const app = new Koa();
//ctx对象，ctx.body  响应体
app.use(async ctx => {
    //上下文对象
    //Http 是基于请求响应的简单响应
    //字符串二进制流
    //冯诺依曼
    //代码在内存中运行
    //读取文件系统里面的index.html fs
    //js是异步的
    //I/O  花时间
    let content = fs.readFileSync('./index.html', 'utf-8');//同步
    ctx.body = content;

}
)
//后端启动web服务  监听5174端口
app.listen(5174, () => {
    console.log('服务器启动成功')
}
)