//箭头函数  arrow  function  =>
const createPhoneNumber = (nums) => {
    // Array object join
    // Array -> String
    //replace
    //nums.join('')
    //字符串拼接 是弟弟
    //架构的感觉  字符串模板  一个系列
    let format="(xxx)xxx-xxxx";//字符串模板
    for(let i=0;i<nums.length;i++)
    {
        format=format.replace('x',nums[i])//替换的过程
    }
    return format
}
