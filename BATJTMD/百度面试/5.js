// 1 1 2 3 5 13 21

// function fb(n) {
//     if (n === 1 || n === 2) return 1
//     return fb(n - 1) + fb(n - 2)
// }
// fb(10)
//


function fb(n) {
    let list = [1, 1]
    for (let i = 2; i < n; i++) {
        list.push(list[i - 1] + list[i - 2])
    }
    return list[n - 1]
}
console.log(fb(10))

//动态规划，斐波那契值。
//移到dp题   72