//node 的文件模块
const fs = require('fs');
//路径模块 路径字符串变路径对象
const path = require('path');
//MVC的开发框架,后端的脚手架
const Koa = require('koa');
const app = new Koa();

//中间件
app.use(async ctx => {
    const { request: { url, query } } = ctx;
    // console.log(url)
    if (url === '/') {
        //设置响应头  Header   type  字段   
        ctx.type = 'text/html';
        let content = fs.readFileSync('./index.html', 'utf-8')
        //设置响应体
        ctx.body = content;
    }
    else if (url.endsWith('.js')) {
        console.log(url)
        //项目的根目录
        const p = path.resolve(__dirname, url.slice(1))
        console.log(__dirname, url.slice(1))
        ctx.type = 'application/javascript'
        const content = fs.readFileSync(p, 'utf-8')
        ctx.body = content
    } else if (url.startsWith(/@module/)) {
        //path  node_modules vue引入进来

    }
})
//async 同步变成异步，然后访问数据库和文件操作更加的方便

app.listen(1234, () => {
    console.log('server is running...')
})
//用户请求，浏览器代理，服务器响应