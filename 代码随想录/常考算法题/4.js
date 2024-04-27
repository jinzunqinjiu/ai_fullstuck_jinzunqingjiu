let a = 'abas'

// const helper = (arr) => {
//     return arr.join('') === arr.reverse().join('')
// }
// const validPaliond = (s) => {
//     const arr = s.split('')

//     if (helper(arr)) {
//         return true
//     }
//     else

//         for (let i = 0; i < s.length; i++) {
//             const newArr = [...arr]
//             for (let i = 0; i < arr.length; i++) {
//                 newArr.splice(i, 1)
//                 if (helper(newArr)) {
//                     return true
//                 }
//             }
//             return false
//         }
// }
// console.log(validPaliond(a));

const validPaliond = (s) => {
    let l = 0, r = s.length - 1
    helper(s, l, r)
}
const helper = (str) => {
    let i = 0, j = str.length - 1
    while (i < j) {
        if (str[i] !== str[j]) {
            return false
        }
        i++
        j--
    }
    return true
}
console.log(validPaliond(a));