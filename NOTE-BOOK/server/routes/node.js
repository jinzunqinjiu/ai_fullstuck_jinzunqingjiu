const Router = require('@koa/router')
const router = new Router()
const { findNoteListByType, findNoteDetailById, notePublish, noteDelet } = require('../controllers/mysqlControl.js')
const { formateDate } = require('../utils/index.js')
router.post('/findNoteListByType', async (ctx) => {
    const { note_type } = ctx.request.body
    try {
        const res = await findNoteListByType(note_type)
        ctx.body = {
            code: '8000',
            data: res,
            msg: 'success'
        }
    } catch (err) {
        ctx.body = {
            code: '8001',
            data: [],
            msg: 'error'
        }
        console.log(err);
    }

})


router.get('/findNoteDetailById', async (ctx) => {
    console.log(ctx.query);
    const { id } = ctx.query
    try {
        const res = await findNoteDetailById(id)
        if (res.length) {
            ctx.body = {
                code: '8000',
                data: res[0],
                msg: 'success'
            }
        }
    } catch (err) {
        console.log(err);
        ctx.body = {
            code: '500',
            data: err,
            msg: 'error'
        }
    }
})


//发布笔记接口
router.post('/notePublish', async (ctx) => {
    const {
        title,
        note_type,
        head_img,
        note_content,
        userId,
        nickname,
        id
    } = ctx.request.body
    const c_time = formateDate(new Date())
    const m_time = formateDate(new Date())

    try {
        const res = await notePublish([userId, title, note_type, note_content, c_time, m_time, head_img, nickname, id], id)
        if (res.affectedRows !== 0) {
            ctx.body = {
                code: '8000',
                data: 'success',
                msg: '发布成功'
            }
        } else {
            ctx.body = {
                code: '8004',
                data: 'fail',
                msg: '发布失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务端异常'
        }
    }

})

router.post('/deleteNoteById', async (ctx) => {
    const { id } = ctx.request.body//拿到前端给的id

    try {
        const res = await noteDelet(id)
        console.log(res.affectedRows);
        if (res.affectedRows !== 0) {
            ctx.body = {
                code: '8000',
                data: 'success',
                msg: '发布成功'
            }
        } else {
            ctx.body = {
                code: '8004',
                data: 'fail',
                msg: '发布失败'
            }
        }

    } catch (err) {
        ctx.body = {
            code: '8005',
            data: err,
            msg: '服务端异常'
        }
    }
})
module.exports = router