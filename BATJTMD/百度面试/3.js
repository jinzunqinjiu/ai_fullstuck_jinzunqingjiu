const obj1 = { a: 1 }
const obj2 = { a: 2 }


判断对象相不相等, 得判断两个对象得指针是否相等
console.log(obj1 == obj2)//值相等但是指针不相等  false
console.log(obj1 === obj2)//false

//1.引用类型的值怎么看
