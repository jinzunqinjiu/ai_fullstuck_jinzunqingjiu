// //删除数组中的某一项元素
// let arr = [1, 2, 3, 2, 3]

// var removeElement = (nums, val) => {
//     let k = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == val) {
//             nums[k++] = nums[i]
//         }
//     }
//     return k;
// };
// console.log(removeElement(arr, 3));
// //双指针去删除元素，快慢指针
// console.log(arr);


// //删除数组中的重复元素、
// var removeDuplicates = function (nums) {//第一项是不用操作的
//     const n = nums.length;
//     if (n === 0) {
//         return 0;
//     }
//     let fast = 1, slow = 1;
//     while (fast < n) {
//         if (nums[fast] !== nums[fast - 1]) {
//             nums[slow] = nums[fast];
//             slow++;
//         }
//         fast++;
//     }
//     return slow;
// }

// let arr = [1, 2, 3, 4, 5, 6]
// let obj = {
//     a: 1,
//     b: 1
// }
// function a() {
//     for (let key in obj) {
//         console.log(key);
//     }
// }
// a()
//key in 遍历对象，其实也可以遍历下标，但是没有什么用。
//key of 遍历数组。





let arr = [1, 2, 3, 2, 5, 3, 4, 3]

var removeElement = (arr, val) => {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != val) {
            arr[k++] = arr[i]
        }
    }
    return k
}
console.log(removeElement(arr, 3));
//实际上也就完成了删除的功能
//然后多余的内存空间的话要手动释放内存空间，不然会导致内存泄漏的问题。

