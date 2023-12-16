<template>
    <div class="login">
        <h2>旅梦后台管理系统</h2>
        <div class="login-container">
            <el-input v-model="username" placeholder="请输入账号" size="large" />
            <el-input v-model="password" placeholder="请输入密码" size="large" />
            <el-button type="登录" class="login-btn" @click="login">登录</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            if (this.username && this.password) {
                //向后端发请求
                //跳转页面
                this.$router.push({ path: '/home', query: { user: this.username } })
            }
        }
    }

}
</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background: #1c1b1bc8;
    color: #fff;
    overflow: auto;

    h2 {
        text-align: center;
        margin: 100px 0 30px 0;
    }

    &-container {
        width: 400px;
        margin: 0 auto;
    }

    .login-btn {
        width: 100%;
    }
    
}</style>