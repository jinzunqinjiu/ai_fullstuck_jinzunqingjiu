var arr =[1,[2,[3,4]]]// [1,2,3,4]
// for (var i=0;i<arr.length;i++)
// {
//     let res =[]
//     if(!Array.isArray(arr[i]))//判断是不是一个数组
//     {
//         res.push(arr[i])
//     }
//     else{
//         for (var j=0;i<arr.length;j++)
//         {
//             if(!Array.isArray(arr[i]))
//             res.push(arr[i][j])
//         }
//         else{
                    // 无限套娃
//         }
//     }
// }
// var newArr =arr.flat(Infinity)//Infinit无穷大
// console.log(newArr)

function  flaten(arr) {
    let res=[]
    for(let i=0;i<arr.length;i++)
    {
        if(Array.isArray(arr[i]))
        {
           let newArr= flaten(arr[i])
           res= res.concat(newArr)
        }
        else
        {
            res.push(arr[i])
        }
    }
    return res
   
}
console.log(flaten(arr))        