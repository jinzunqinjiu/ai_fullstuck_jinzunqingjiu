// let  obj ={
//     name:'陈总',
//     say:function(){
//         console.log(this.name)
//     }
// }

// obj.say()


// function foo(){
//     var a=1
//     console.log(this.a)
// }
// foo()

// function identify(){
//     return obj.name.toUpperCase()
// }
// function speek(){
//     var greeting ="Hello ,I'am" +identify.call(this)
//     console.log(greeting)
// }
// var me = {
//     name:'Tom'
// }
// speek.call(me)



let obj={
    this:this
}
