// function foo(str){
//     eval(str)
//     var a=1
//     console.log(a,b)
// }
// foo('var b=2')



var obj={
    a:1,
    b:2,
    c:3,

}
with(obj){
    a=2,
    b=3,
    c=4
}
console.log(obj)

