import { makeAutoObservable } from 'mobx'
import { http, setToken } from '@/utils'


class LoginStore {
    token = ''
    constructor() {
        makeAutoObservable(this)
    }

    async login({ username, password }) {
        console.log(131313);
        const res = await http.post('/authorizations', {
            mobile: username,
            code: password
        })
        // console.log(res);
        this.token = res.data.token
        setToken(this.token)

    }
}//一刷新就会失效

export default LoginStore