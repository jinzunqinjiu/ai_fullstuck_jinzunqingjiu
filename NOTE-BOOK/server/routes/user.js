const Router = require('@koa/router')
const router = new Router()


router.post('/user/login', (ctx) => {
    console.log(ctx.request.body);
})


module.exports = router