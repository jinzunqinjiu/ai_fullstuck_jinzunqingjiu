let nums = [-1, 3, 4, -3, 0, -1, 3, -3]

const threeSum = (nums) => {//首先三层大循环大礼包
    let len = nums.length
    let num = []
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                if ((nums[i] + nums[j] + nums[k]) == 0) {//当然，再判断一下会不会出现0.0.0的情况。
                    num.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    return num
}
console.log(threeSum(nums));



//方法二  双指针法来写这道题  可以先想一下怎么去做。
