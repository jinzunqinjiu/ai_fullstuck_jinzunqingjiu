//怎么解决递归带来的内存问题
//递归的优点是什么？   简单  但是性能不好
// 如果不往执行栈里去push函数，是不是？
//入栈过的函数是没有必要再入栈的，记忆法
//两种做法
const f=[];//全局
const climbStairs=function(n){
    //退出条件
    if(n===1) return 1
    if(n===2) return 2
    if(f[n]===undefined){
        //函数嵌套函数，这就是递归
        f[n]=climbStairs(n-1)+climbStairs(n-2)
    }
    return f[n];
} 
