function add(a, b) {
    console.log(Array.prototype.join.call(arguments,'-'))
    // console.log([...arguments])
//    const  arr=Array.from(arguments)
//    console.log(Object.prototype.toString.call(arr))
        // 参数数量？ this  arguments 
         console.log(a, b, arguments[0], arguments[1])//arguments函数参数对象
         // console.log(arguments.join('--'))   不能打印
         console.log(typeof arguments,Object.prototype.toString.call(arguments),'111')
        // var c 
         if (arguments.length != 2) {
         throw new Error('必须传递两个参数')
     }
     return a + b
    }
    try {
     console.log(add(1, 2));
    } catch (e) {
         console.log(e)
    }ssss
    console.log('continue....')
    // console.log(add(1, 2, 3))
