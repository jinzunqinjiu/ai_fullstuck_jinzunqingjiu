let nums1 = [1, 2, 3, 4, 3, 6, 2, 1]
let nums2 = [3, 3, 1]

let intersection = (nums1, nums2) => {
    const mySet = new Set(nums2)
    const resultSet = new Set()
    let len = nums1.length
    for (let i = 0; i < len; i++) {
        if (mySet.has(nums1[i])) {
            resultSet.add(nums1[i])
        }
    }
    return Array.from(resultSet)
}
console.log(intersection(nums1, nums2));

