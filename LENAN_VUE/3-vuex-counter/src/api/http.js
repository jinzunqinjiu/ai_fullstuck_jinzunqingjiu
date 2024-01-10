// 封装项目需要的http对象

//配置
// dev ->product
//后端开发接口需要时间，自己用localhost 先测试一下
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 10 * 1000//超时时间
axios.defaults.maxBodyLength = 5 * 1024 * 1024//最大请求内容长度  post 上传文件，照片大小
//封装需要的http对象
import axios from 'axios'
const http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, { params })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    post() {

    }
}


export default http