// var nums=[2,3,3,2,4,5,5,6,7,8,8,8,8]
// let len=nums.lemgth
// nums.sort()
// var uniqueArray = [...new Set(nums)];
// console.log(uniqueArray);
// const dp= new Array(len+1)
//     if(uniqueArray.length===0) return 0
//     dp[0]=0
//     dp[1]=uniqueArray[0]
//     for(let i=2;i<=len;i++)
//     {
//         dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i-1])
//     }
//     return dp[len]//需要的是最终返回的结果
//     console.log(dp)
// let tag=0
// var countPairs = function(nums, target) {
   
//     let len=nums.length
//     nums.sort(function(a,b){
//         return a-b
//     })
//     for(let i=0;i<len-1;i++)
//     {
//        if(nums[i]>0&&nums[i]>=target) return tag
//         for(let j=i+1;j<len;j++)
//         {
            
//             if(nums[i]+nums[j]<target)
//             {
//               tag=tag+1
//             }
//         }
         
//     }
//    return tag
// };
// let nums=[-6,2,5,-2,-7,-1,3]

// console.log(countPairs(nums,-2))
// console.log(nums)
// // console.log(nums.sort(function(a,b){
// //     return a-b
// // }))



var moveZeroes = function(nums) {
    let len=nums.length
    let tag=0
    for(i=0;i<len;i++)
    {
        if(nums[i]===0){
             nums.splice(i,1)
            tag++
            i--
        }
    }
    for(let j=0;j<tag;j++)
    {
        nums.push(0)
    }

};
let nums=[1,0,0,1]
moveZeroes(nums)
console.log(nums)

