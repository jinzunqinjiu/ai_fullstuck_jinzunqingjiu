function add(a,b){
    if(arguments.length !==2){
        throw  new  Error('传递的参数有误')
    }
    if(typeof a!=='number'||typeof b!=='number')
    {
        throw  new  Error('传递的参数有误')
    }
    return a+b
}
//记忆函数  百搭的
function memorize(f){
    if(typeof f!=='function') return 
    var cache ={}//空间换时间   不会被销毁的自由变量
    return function(){
        var key =arguments.length+
        Array.prototype.join.call(arguments,",")
        if(key in cache){
            return cache(key)
        }else{
            return   cache[key]=f.apply(this,arguments)//函数是从右往左执行
        }
    }

}
const memorizdAdd=memorize(add)
