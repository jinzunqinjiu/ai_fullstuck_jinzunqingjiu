// var arr=[1,2,3,4]//数组的增删改查
// arr.push(5)//尾部增加
// arr.pop()//头部增加
// arr.unshift(0)
// arr.shift()
// // arr.splice(1,1)
// arr.slice(1,2)//左闭右开
// console.log(arr)


// var arr =new Array(4)
// console.log(arr)



// var  arr =[
// [1,2,3,4],
// [1,2,3,4],
// [1,2,3,4],
// [1,2,3,4],
// ]

// for(var i=0;i<arr.length;i++)
// {
// for(var j=0;j<arr[i].length;j++)
// {

//     console.log(arr[i][j])
// }
// }//二维数组

var  arr =['a','b','c','d']
// arr.forEach(function(item,index,arrr){
// arr[index]=item+'1'
// })//提供过程

var newArr=arr.map(function(item,index,arr){
    return item + '1'//提供结果
})
console.log(newArr)