let nums = [2, 7, 11, 15], target = 9


// const twoSum = (arr, target) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// }
// console.log(twoSum(nums, target));//这种写法的时间复杂度过于的高了



var twoSum = function (nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {  // 遍历当前元素，并在map中寻找是否有匹配的key
        if (hash[target - nums[i]] !== undefined) {
            return [hash[target - nums[i]], i];
        }
        hash[nums[i]] = i;   // 如果没找到匹配对，就把访问过的元素和下标加入到map中
    }
    return [];
};
console.log(twoSum(nums, target));

//仔细这么一想好像也没有多大的压力嘛
//第一步map中是否存在目标元素，不存在就存入map中
//存在就返回这个value值和下标