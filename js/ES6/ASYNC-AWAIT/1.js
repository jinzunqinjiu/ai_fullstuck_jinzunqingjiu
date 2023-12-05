function a(cb){
    setTimeout(()=>{
console.log('A');
    },1000)
    cb()
}
function b(){
    setTimeout(()=>{
console.log('B');
    },500)
}
a(b)
