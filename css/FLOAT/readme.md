# 浮动
1.脱离文档流
2.文字环绕
3.可以让块级元素同行显示
4.让行内元素可以设置宽高
5.浮动元素可以使用margin，但是不能使用margin：0 auto




# 清除浮动
1.直接给父容器设置高度
2.增加子容器，在子容器身上清除浮动
3.借助伪元素，在伪元素里面清除浮动
4.bfc


# BFC --Block Formatting Context
- 块级格式化上下文

- 如何创建bfc：
1.浮动：float：left|| right 
2.定位：position： abusolute| fixed
3.行内块：display:inline-block  
4.表格单元：display:table-cell| table-xxx
5.overflow:auto|hidden|scroll
6.弹性盒子：display:flex|inline-flex



- bfc容器的特征：
bfc的效果是让处于bfc内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响

1.内部盒子也会按照文档流的顺序排列
2.bfc容器在计算高度时，会将内部浮动的子元素也计算在内
3.解决外边距重叠的问题