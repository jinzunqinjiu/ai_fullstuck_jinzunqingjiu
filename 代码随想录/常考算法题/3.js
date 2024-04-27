let a = 123 //321  900 9
function reverseNum(num) {
    // let res = ''
    // const stack = []
    // const str = num.toString()
    // for (let i = 0; i < str.length; i++) {
    //     stack.push(str[i])
    //     res = stack.pop() + res
    // }
    // return Number(res)
    return +(num.toString().split('').reverse().join(''))
}
console.log(reverseNum(a));
