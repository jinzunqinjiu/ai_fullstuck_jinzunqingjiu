// function foo(){}

var obj={
    a:1
}

var foo=()=>{
    console.log(123)
}//箭头函数没有this这个关键字
foo.call(obj)
var bar=function(){
    console.log(this.a)
}//函数表达式
bar.call(obj)