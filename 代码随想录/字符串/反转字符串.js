let arr = ['a', 's', 'd', 'f', 'g']
Array.prototype.myReverse = function () {
    let len = this.length
    let i = 0
    let j = len - 1
    let temp;
    while (i < j) {
        temp = this[i]
        this[i] = this[j]
        this[j] = temp
        i++
        j--
    }
    return this
}
//这样就往数组原型上挂载了一个reverse()方法。

// const myReverse = (str) => {

// }
console.log(arr.myReverse());

//reverse() 反转数组
//split() 变成数组
//join() 变成字符串