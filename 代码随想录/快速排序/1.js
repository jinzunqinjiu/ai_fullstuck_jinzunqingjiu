// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr
//     }
//     let midIndex = Math.floor(arr.length / 2)
//     let left = []
//     let right = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i == midIndex) {
//             continue
//         }
//         if (arr[i] < arr[midIndex]) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), arr[midIndex], ...quickSort(right)]
// }

// let arr = [1, 4, 3, 7, 6]
// console.log(quickSort(arr));


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let midIndex = Math.floor(midIndex)
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (i == midIndex) {
            continue
        }
        if (arr[i] < arr[midIndex]) {
            left.push(arr[i])
        }
        if (arr[i > arr[midIndex]]) {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), arr[midIndex], ...quickSort(right)]
}//这个就是快速排序。