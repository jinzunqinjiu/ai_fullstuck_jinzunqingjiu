let arr1 = [1, 2, 3, 8, 12]
let arr2 = [6, 7, 9, 11]


// const merge = (arr, arr2) => {
//     let arr3 = arr.concat(arr2)
//     arr3.sort((a, b) => a - b)
//     return arr3
// }
// console.log(merge(arr, arr2));
//这样就可以合并两个数组，但是题目是合并两个有序数组。

const merge = (arr1, arr2) => {
    let arr3 = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            arr3.push(arr1[i])
            i++
        } else {
            arr3.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        arr3.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        arr3.push(arr2[j])
        j++
    }
    return arr3
}
//这个循环嵌套出了问题
console.log(merge(arr1, arr2));



