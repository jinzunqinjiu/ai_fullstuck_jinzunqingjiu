let obj={
    name:'li',
    age:18,
    a:{
        n:1
    },
    b:null,
    d:function(){},
    e:Symbol('hello')

}
let obj2=JSON.parse(JSON.stringify(obj))