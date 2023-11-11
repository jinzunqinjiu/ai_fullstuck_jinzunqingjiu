//es6的class类
// 类跟对象有什么区别?
// 类是抽象的，定制，
// 对象是具体的
class SingleDog{
    constructor(){

    }
    static instance = null //静态属性
    //属于类上的方法
    static   getInstance(){

        // console.log('类的方法')
        if(!SingleDog.instance)
        {
            SingleDog.instance = new SingleDog()
        }
        return SingleDog.instance
    }
    //公有方法 属于实例上的
    show(){
        console.log('单身贵族')
    }
}
// 设计模式 一个类只实例化
// 第一次new,不实例化，直接返回实例
// new角度搞不定？ & { }
// 总领导   弹窗
const s1 = SingleDog.getInstance()//生成对象->拿到对象
const s2 = SingleDog.getInstance()
// //如何让它们相等
console.log(s1==s2)//False内存不一样
// console.log( SingleDog.getInstance())