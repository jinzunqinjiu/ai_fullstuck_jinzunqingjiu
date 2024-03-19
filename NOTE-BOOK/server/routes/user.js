const Router = require('@koa/router')
const router = new Router()
const { userLogin } = require('../controllers/mysqlControl.js')


router.post('/user/login', async (ctx) => {

    console.log(ctx.request.body);
    const { username, password } = ctx.request.body
    try {

        const result = await userLogin(username, password)
        console.log(result);
        if (result.length) {
            let data = {
                id: result[0].id,
                nickename: result[0].nickename,
                username: result[0].username
            }
            ctx.body = {
                code: '8000',
                data: data,
                mag: '登录成功'
            }
        }
        else {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '账号或密码错误'
            }
        }
    }
    catch (err) {
        ctx.body = {
            code: '8005',
            data: err,
            msg: '服务器异常'
        }
    }


})


module.exports = router