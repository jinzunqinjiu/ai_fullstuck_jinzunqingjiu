# vue 的生命周期
vue自带的都能用


# 页面的生命周期
 unipp 提供了 页面生命周期
 
 
# 应用的生命周期
整个app应用状态变化，只能在app.vue里面使用

#全局变量
Vue.prototype.name="测试名称"

2.在app.vue里面调用
getApp().globalData.name



# 如何新加icon图标
1.在线    在app.vue全局引入的时候直接引入地址。
2.下载
	- 下载在本地  
	- 解压放到uniapp里面
	- 引入css,全局生效
	- 用unicode编码在view里面引入   fontstyle的方法在iconfont类名里面再把复制的类名写上去