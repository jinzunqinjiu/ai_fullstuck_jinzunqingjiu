// 函数  JS里函数是一等对象
// 大写，+new 运行==构造函数
function  Person(name,age) {
    this.name = name
    this.age  = age
    // console.log(this)
}
// new 和  typeof  都一样  运算符
//new 在函数前面,这个函数就是以构造函数执行
//函数是可以执行的对象
// li是以porson为原型构造的，new  Person   new  Object
// person原型Object



// 类的方法
// Person.sayHello =function () {
//     console.log('hello')
// }
Person.prototype.sayHello=function (){
    console.log('hello')
}
let li=new Person('xiaomin',18)
console.log(li.age,li.name)
// let dai = new  Person('daijunhui',18)
li.sayHello()
console.log(Object.prototype.toString.call(li))
console.log(li.toString())
// console.log(li.__proto__.__proto__.__proto__)