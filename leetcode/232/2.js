//手写bind  args收集所有的参数   rest运算符
// [...args]
Function.prototype.myBind=function(context,...args){
if(typeof this!=='function'){//校验
    throw new TypeError('error')
}
context=context||window//前面的那个优先级更高
const that=this;//func fn 提供了一个上下文  原函数对象是谁？
return function fn(...innerArgs){
    //this被context盖
    return that.apply(context,[...args,...innerArgs])
}
}
let obj={
    name:'陈总'
}
const bindedFn=func.mybind(obj,1,2,3,4)
bindedFn(4,5)