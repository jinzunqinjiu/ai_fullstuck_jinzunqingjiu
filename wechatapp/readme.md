# 路虎4s店小程序开发

- 需求来自于4s店
  看车  一键询问
  非常的接地气，微信小程序生态

- html+css+js
   whtml

- 小程序的基本知识
 -  page  来写
      - index   首页  目录   直接帮我们分成以下几个文件
           - index.whtml   html    view  div
           - index.js      js
           - index.css     css
           - index.json
- swiper组件
   幻灯片
   +swiper-item
   定时器
   chatgpt
   看开发文档的思想  AI英文文档
   
   [小程序开发文档](https://www.w3cschool.cn/weixinapp/)

- 相对单位
    - 解决适配的问题
    pc，手机，平板
    - rpx  少用或不用px
    retina  3倍ritina  1rpx=3px
    - vh view height  视窗的高度
    - vw 视窗的宽度
    %100 满屏  按照比例来划分

- 小程序有时候卡一下，重启(确保代码没有什么问题)
- 给一个元素多个类名，在选择的需求上，让代码更好复用和维护
   - white...给别的元素用
   - hero  主题
   - section
- 从外到内
   盒子 而不是标签   页面的布局
   元素的类型两种  行内和块级
   取类名才是技术活
   - 用最简单的单词
   - 选择器前加限定

- js 
    - data里面的数据可以绑定到页面上
    - 模板不是静态的页面，它是由数据驱动的动态
- 小程序的架构思想
    - 让开发车简单，小程序开了以下预设，关注业务
    - pages的概念
    wxml/wxss/js
    - wxml 模板
       标签是小程序自带的标签 view  swiper html是没有的
       不是页面，  他是活的，动态部分绑定了数据({})和指令wx:for的
       只要数据在这里它会自动更新
     
- js data 可以绑定到模板的数据{()}
     omload 生命周期 wx.request 去取下数据，可以向我们的后台取数据
     this.setData({
        slides:res.data.slides
     })