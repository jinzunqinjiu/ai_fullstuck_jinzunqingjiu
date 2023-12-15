<template>
    <div class="home">
    <nav>
       <router-link to="/home/suggest">推荐</router-link>
       <router-link to="/home/newest">最新</router-link>
    </nav>
    </div>
    <router-view> </router-view>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
nav a{
    margin-left:20px;
    text-decoration:none;
 }
</style>