//函数要注意什么?
// 编写一个函数，返回一个美国座机格式的电话号码（123）4567-890
// 输入是数字数组[1,2,3,4,5,6,7,8,9,0]
// 不要急于写功能，先写注释
//不用读代码，直接拿来就用
//大厂，代码的可能性甚至比功能更重要一个等级
/** 
 *  @func  返回美国格式的座机号
 *  @param{Array}nums[1234567890]
 *  @return {string}(123)456-790
 *  @author jinzunqinjiu  2023/10/31 代码的维护性
 */
 // undefined 类型未定义  let 生命了undefined的变量
// 箭头函数,es6非常简洁的函数，function可以省略，
// 只有返回值才能省略return
const createPhoneNumber =(nums)=>
    "(" + nums[0] + nums[1] + nums[2]
    + ")" + nums[3] + nums[4] + nums[5]
    + "-" + nums[6] + nums[7] + nums[8] + nums[9]
createPhoneNumber([1,2,3,4,5,6,7,8,9,0])