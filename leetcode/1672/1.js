/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let len = accounts.length
    let max = 0;
    for (let i = 0; i < len; i++) {
        let len1 = accounts[i].length
        let num = 0
        for (let j = 0; j < len1; j++) {
            num = accounts[i][j] + num;
        }
        if (max < num) {
            max = num
        }
    }
    return max

};
let accounts = [[1, 2, 3], [3, 2, 1]];
console.log(maximumWealth(accounts))