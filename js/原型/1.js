Person.prototype.say=function(){
    console.log('jxb 真好吃')
}
function Person(){
    this.name='冷少'
    this.age=18
}
let p =new Person()
let p2=new Person()
console.log(p)
p.say()
