function foo(){
var myName='啊美'
let test1=1
const test2 =2
var innerBar ={
getName:function(){
    console.log(test1)
},
setName:function(newNamw){
myName=newNamw
}
}
return innerBar
}
var bar=foo()
bar.setName('洋洋')
console.log(bar.getName())