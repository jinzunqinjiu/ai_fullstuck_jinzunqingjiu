// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function (nums, target) {

//     let mid, left = 0
//     let right = nums.length - 1
//     while (left <= right) {
//         mid = left + ((right - left) >> 1)
//         if (target > nums[mid]) {
//             left = mid + 1
//         } else
//             if (target < nums[mid]) {
//                 right = mid - 1
//             }
//             else {
//                 return mid
//             }
//     }
//     return -1
// };


// //二分查找的使用场景  有序，无重复来找到一个目标值的下标
// let nums = [-1, 0, 3, 5, 9, 12]
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// console.log(search(nums, 9));


// 这个就是二分查找了,
//被js害死了，这个数据类型的问题。


// // right是数组最后一个数的下标，num[right]在查找范围内，是左闭右闭区间
// let mid, left = 0, right = nums.length - 1;
// // 当left=right时，由于nums[right]在查找范围内，所以要包括此情况
// while (left <= right) {
//     // 位运算 + 防止大数溢出
//     mid = left + ((right - left) >> 1);
//     // 如果中间数大于目标值，要把中间数排除查找范围，所以右边界更新为mid-1；如果右边界更新为mid，那中间数还在下次查找范围内
//     if (nums[mid] > target) {
//         right = mid - 1;  // 去左面闭区间寻找
//     } else if (nums[mid] < target) {
//         left = mid + 1;   // 去右面闭区间寻找
//     } else {
//         return mid;
//     }
// }
// return -1;
//手写一个二分查找




// var intersect = function (nums1, nums2) {
//     let arr = []
//     nums1.sort((a, b) => a - b)
//     nums2.sort((a, b) => a - b)
//     if (nums1.length >= nums2.length) {
//         for (let i = 0; i < nums2.length; i++) {
//             if (erfen(nums1, nums2[i]) !== -1) {
//                 let index = erfen(nums1, nums2[i])
//                 arr.push(nums1[index])
//                 nums1.splice(index, 1)
//             }
//         }
//         return arr
//     } else
//         if (nums1.length < nums2.length) {
//             for (let i = 0; i < nums1.length; i++) {
//                 if (erfen(nums2, nums1[i]) !== -1) {
//                     let index = erfen(nums2, nums1[i])
//                     arr.push(nums2[index])
//                     nums2.splice(index, 1)
//                 }
//             }
//             return arr
//         }

// };
// function erfen(arr1, target) {
//     let mid, left = 0
//     let right = arr1.length - 1
//     while (left <= right) {
//         mid = left + ((right - left) >> 1)
//         if (arr1[mid] > target) {
//             right = mid - 1
//         } else if (arr1[mid] < target) {
//             left = mid + 1
//         }
//         else if (arr1[mid] == target) {
//             return mid
//         }
//     }
//     return -1
// }

// let nums1 = [4, 9, 5]
// let nums2 = [9, 4, 9, 8, 4]
// console.log(intersect(nums1, nums2));


// var intersect = function (nums1, nums2) {
//     nums1.sort((a, b) => a - b)
//     nums2.sort((a, b) => a - b)
//     let sum = []
//     let left = 0

//     for (let i = 0; i < nums1.length; i++) {
//         let number = nums1[i]
//         let right = nums2.length - 1
//         while (left <= right) {
//             let midle = Math.ceil((left + right) / 2)
//             if (nums2[midle] > number) {
//                 right = midle - 1
//             } else if (nums2[midle] < number) {
//                 left = midle + 1

//             } else if (nums2[midle] === number) {
//                 let index = nums2[midle]
//                 nums2.splice(index, 1)
//                 sum.push(number)
//                 break
//             }

//         }
//     }

//     return sum
// }

// let nums1 = [4, 9, 5]
// let nums2 = [9, 4, 9, 8, 4]
// console.log(intersect(nums1, nums2));
