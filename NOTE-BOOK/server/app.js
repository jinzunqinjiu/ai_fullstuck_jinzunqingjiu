const Koa = require('koa')//commonJS的规范
const bodyParser = require('koa-bodyparser')//解析post请求的参数
const app = new Koa()
const cors = require('koa2-cors')//跨域


const user = require('./routes/user.js')
const node = require('./routes/node.js')


app.use(cors())
app.use(bodyParser())





app.use(user.routes(), user.allowedMethods())
app.use(node.routes(), user.allowedMethods())

// const main = (ctx) => {
//     console.log(ctx.request.body);
// }
// app.use(main)

app.listen(3000, () => {
    console.log('服务器已启动在3000端口')
})
