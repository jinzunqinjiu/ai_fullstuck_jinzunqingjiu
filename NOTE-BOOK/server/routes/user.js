const Router = require('@koa/router')
const router = new Router()
const { userLogin, userFind, userAdd } = require('../controllers/mysqlControl.js')

router.prefix('/user')
//定义接口
router.post('/login', async (ctx) => {

    console.log(ctx.request.body);
    const { username, password } = ctx.request.body
    try {

        const result = await userLogin(username, password)
        console.log(result);
        if (result.length) {
            let data = {
                id: result[0].id,
                nickename: result[0].nickname,
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

//定义注册接口
router.post('/register', async (ctx) => {
    console.log(ctx.request.body);
    const { nickname, username, password } = ctx.request.body
    if (!nickname || !username || !password) {
        ctx.body = {
            code: '8001',
            msg: '账号密码或昵称不能为空'
        }
        return
    }


    try {
        //校验数据库中是否存在该账号
        const findRes = await userFind(username)
        console.log(findRes);
        if (findRes.length) {
            ctx.body = {
                code: '8003',
                data: 'error',
                msg: '该账号已存在'
            }
            retrun
        }



        //数据库写入数据
        let result = await userAdd(username, password, nickname)
        console.log(result)
        if (result.affectedRows !== 0) {
            ctx.body = {
                code: '8000',
                data: 'success',
                msg: '注册成功'
            }
        }
        else {

        }
    }
    catch (err) {
        ctx.body = {
            code: '8005',
            data: 'success',
            msg: '服务端异常',
        }
        console.log(err);
    }
})
module.exports = router