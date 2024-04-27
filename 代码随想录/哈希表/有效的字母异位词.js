let s = "anagram"
let t = "nagaram"
//第一种方法
// var isAnagram = function (s, t) {//首先判断长度是否相等
//     if (s.length !== t.length || s === t) return false
//     const resSet = new Array(26).fill(0)
//     const base = "a".charCodeAt()//获取“a”的ascall码，作为一个偏移量
//     for (let i of s) {
//         resSet[i.charCodeAt() - base]++
//     }
//     for (let i of t) {
//         if (!resSet[i.charCodeAt() - base]) return false
//         resSet[i.charCodeAt() - base]--
//     }
//     return true
// };
// // 这实际上就是hash的一种
// console.log(isAnagram(s, t));




//第二种用map的方法
var isAnagram = function (s, t) {
    if (s.length !== t.length || s === t) return false;
    let char_count = new Map();
    for (let item of s) {
        char_count.set(item, (char_count.get(item) || 0) + 1);
    }
    for (let item of t) {
        if (!char_count.get(item)) return false;
        char_count.set(item, char_count.get(item) - 1);
    }
    return true;
};//用map很好理解，就是要多用map上面的方法