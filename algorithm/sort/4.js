function bubbleSort(arr) {
     console.time('改进冒泡排序')
     const length = arr.length
    if (length <= 1) return
    // 也xing
    for (let i = 0; i < length - 1; i++) {
     let isSorted = true
     for (let j = 0; j < length - i - 1; j++) {
     if (arr[j] > arr[j + 1]) {// 相邻元素交换位置
     [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
     isSorted = false
    }
    }
    if (isSorted) {
    break
    }
      }
   
    return arr
    }
    // 待排序   从小到大排序
    const arr = [5, 8, 6, 3, 9, 2, 1, 7]
    bubbleSort(arr)
    console.log(bubbleSort(arr))