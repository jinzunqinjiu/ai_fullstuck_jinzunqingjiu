// class Person {
//   constructor(name) {
//     this.name = name
//   }
//   static getInfo(name) {
//     if (!Person.instance) {
//       Person.instance = new Person(name)
//     }
//     return Person.instance
//   }
// }
// let p1 = Person.getInfo('李总')
// let p2 = Person.getInfo('李总')
// console.log(p1 == p2);  // true


function Storage() {
    this.name = '张三'
}

const Helper = (function () {
    let instance = null
    return function () {
        if (!instance) {
            instance = new Storage()
        }
        return instance
    }
})()

let p1 = new Helper()  // {name: '张三'}
let p2 = new Helper()
console.log(p1 === p2); // true