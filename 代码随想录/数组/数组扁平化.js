let arr = [[1, 2, 3], [2, 3, [1, 2, 3], 5], [2, 6, 8, 3], [3, 5, 8, 2, 4]]

function setFlattening(arr) {
    let newArr = []
    function Flattening(arr) {
        let len = arr.length
        for (let i = 0; i < len; i++) {
            if (arr[i] instanceof Array) {
                Flattening(arr[i])
            }
            else {
                newArr.push(arr[i])
            }//递归调用，让里面的数组再存入数组
        }
        return newArr
    }
    return Flattening(arr)
}
console.log(setFlattening(arr));
// 实现myflat





