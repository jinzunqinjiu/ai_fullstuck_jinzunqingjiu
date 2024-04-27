let lines = ['192.168.1.1', '192.168.1.2', '192.168.1.1']
//用一个对象来计数=
// const findMost = (arr) => {
//     let max = 1
//     let ip = ''
//     const obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i]
//         if (item in obj) {
//             obj[item] = obj[item] + 1
//             if (obj[item] > max) {
//                 max = obj[item]
//                 ip = item
//             }
//         }
//         else obj[item] = 1
//     }
//     return ip
// }
// console.log(findMost(lines));
//如何判断对象上是否有key
//不一定要hashmap


const findMost = (arr) => {
    let max = 1
    ip = ''

    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        if (item in obj) {
            obj[item] = obj[item] + 1
            if (obj[item] > max) {
                ip = item
                max = obj[item]
            }
        }
        else obj[item] = 1
    }
    return ip
}
console.log(findMost(lines));//确实是完成了计数。
//这也是一个很简单的题目了。