const Router = require('@koa/router')
const router = new Router()
const { findNoteListByType, findNoteDetailById } = require('../controllers/mysqlControl.js')

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
module.exports = router