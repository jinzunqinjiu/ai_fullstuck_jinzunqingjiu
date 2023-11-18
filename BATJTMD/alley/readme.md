# 前端界面开发之专业性


- 先结构后样式
BEM使用起来
page+hd/bd/td

- npm i -g stylus
node 是全栈 js的命令行，后端开发
npm是node的包管理器
stylus 包是用来提升css 的开发速度
i  install 的简称
- g 全局安装
stylus--version//版本号

- common.styl  .styl
- stylus 是css 的超集 省去；：{}提高效率
- tab 缩进
- 失败，重新运行 stylus -w common.styl -o common.css
watch 监听styl 文件的改变，自动编译css
- stylus 嵌套
    BE里写样式的时候，自动补全css前缀

- stylus 的功能
   - 支持变量
     晃点老板的利器
- 阿里的适配神器  flexible.js
   - 移动端不要用px绝对单位，rem vw/vh相对单位
   - 1rem=html font-size
   - 不同的手机 html-size 会去设置，不一样
   iphone 是是设计稿的标准尺寸   375pt 750px   414pt
   100vw=10rem  都这样，设置不一样的html font-size

- 移动端试配手写
    - 立即执行函数，不影响外界把功能实现了
    - 1rem =vw/10 兼容所有手机宽度
    设计稿上 750px=2*350pt  photoshop px单位的
    120/75=？rem
    - onresize
    - dry 设计模式原则  封装，复用
    - DOM性能不太好 缓存dom元素
    - script标签 src属性加载一个资源，同步，会阻塞html下载进程 一定要放在头部，放在css之前


