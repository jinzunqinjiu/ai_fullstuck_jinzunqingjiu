//到底做了什么？函数放到event loop中

// setTimeout(function () {
//     console.log('1000ms以后')
// }, 1000)
// console.log('hello')
const p = new Promise((resolve, reject) => {
    console.log('实例化promise')
    //异步任务
    setTimeout(()=>{
        console.log('定时器运行')
        resolve()//确认执行成功
    },1000)
})
// console.log(p.__proto__)
// console.log('hello')
p.then(function(){
    console.log('1000ms后运行,helloword')
})