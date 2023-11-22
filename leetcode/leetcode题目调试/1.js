var nums=[2,3,3,2,4,5,5,6,7,8,8,8,8]
let len=nums.lemgth
nums.sort()
var uniqueArray = [...new Set(nums)];
console.log(uniqueArray);
const dp= new Array(len+1)
    if(uniqueArray.length===0) return 0
    dp[0]=0
    dp[1]=uniqueArray[0]
    for(let i=2;i<=len;i++)
    {
        dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i-1])
    }
    return dp[len]//需要的是最终返回的结果
    console.log(dp)


