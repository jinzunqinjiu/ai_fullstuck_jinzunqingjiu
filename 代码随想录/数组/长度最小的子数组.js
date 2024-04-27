let nums = [4, 6, 2, 4, 9, 8, 7]

let mimsubArrayLen = (arr, s) => {//此函数的功能就是找到加起来值为s的最小子数组的长度，用滑动窗口，双指针的方法来写
    let result = Number.MAX_VALUE;//给result初始值赋值为无穷大
    let sum = 0;//滑动窗口的数值之和
    let i = 0;//滑动窗口的起始位置
    let subLen = 0;//滑动窗口的长度
    for (let j = 0; j < arr.length; j++) {

        sum += arr[j]
        while (sum >= s) {
            subLen = (j - i + 1)//获取子数组的长度
            result = result < subLen ? result : subLen;
            sum -= arr[i++]//这个就是滑动窗口的精髓，调整初始指针的位置
        }
    }
    //如果result没有被赋值则说明没有符合条件的子数组，也就是没有被赋值，返回0
    //如何判断result没有被赋值过呢？？？
    return result == Number.MAX_VALUE ? 0 : result;

}//这个是匿名箭头函数
console.log(mimsubArrayLen(nums, 12));//
//滑动窗口不过如此。
