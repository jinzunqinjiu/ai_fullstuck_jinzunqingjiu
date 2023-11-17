// var a=1
// function foo(){
//     console.log(this.a)
// }

// function bar(){//bar的词法作用域是window
//     var a=2
//     foo()
// }//foo是在bar的作用中调用，但是必须要知道bar的词法作用域中调用。
// bar()




// function foo(){ 
//     function bar(){
//         console.log(this)
//     }
//     bar()
// }
// foo()