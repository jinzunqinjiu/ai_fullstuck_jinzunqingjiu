# JS 八股文之防抖节流

## 前端"三清"
- window
BOM  浏览器对象  负责  body 之外的浏览器功能

- document 
DOM   js  会跟DOM"交流"

- Object
    JS的顶层对象
    new Object()  {} 简写
    wan.__proto__(私有属性,原型)——>Object->null
- JS  类
- 大写的函数作为构造函数
new  + this    完成由{}空对象到构造完成的过程
对象就有属性了
- 对象的方法呢？
       构造函数的prototype上
    wanwan 和  Person  没有血缘关系，女娲和人？
    构造的过程  new Person   {}  Object  空对象
    Person.prototype {}
- Person.prototype  原型
- Object.prototype  原型

- li.__proto__.__proto__.__proto__原型链
- 原型的哪一栈有的办法，对象都可以用
- JS 面向对象不是血缘，而是面向原型
- 函数，在运行的那一瞬间，this的值就被决定了
this 由函数的运行方式决定了 事件的处理函数，this指向事件发生的元素本身
- this 是什么？
  - 指针  函数的需要
  - 定义的时候和执行的时候
  - 函数运行的时候被决定
     运行时以不同的方式运行，值不一样
  - 有规矩
       - 普通函数运行this  指向window顶级，没必要指的  不要this
       - 事件的处理函数运行，this会指向事件发生的元素
       - 函数作为对象的方法被调用  this指向对象本身
       - 函数以构造函数的方式运行，this指向实例化对象