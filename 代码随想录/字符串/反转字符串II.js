let s = 'asdfghjkl'
let k = 3

var reverseStr = function (s, k) {
    const len = s.length;
    let resArr = s.split("");
    for (let i = 0; i < len; i += 2 * k) {  // 每隔 2k 个字符的前 k 个字符进行反转
        let l = i - 1, r = i + k > len ? len : i + k;
        while (++l < --r) [resArr[l], resArr[r]] = [resArr[r], resArr[l]];//不用reverse，而是直接进行结构
    }
    return resArr.join("");
};