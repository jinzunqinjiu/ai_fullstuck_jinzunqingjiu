//153=1^3+5^3+3^3
// let num = 153
const isTrue = (num) => {
    total = 0
    const len = num.toString().length
    const str = num.toString()
    for (let i = 0; i < len; i++) {
        total += Math.pow(str[i], len)
    }
    return num === total
}
    ;

const getAll = (n) => {
    let arr = []
    for (let num = 10 ** (n - 1); num < 10 ** n; num++) {
        if (isTrue(num)) {
            arr.push(num)
        }
    }
    return arr
}
console.log(getAll(3));
