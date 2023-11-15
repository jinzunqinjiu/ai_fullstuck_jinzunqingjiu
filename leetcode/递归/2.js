// 5!
function mul(n)
{
    // let res=1
    // for(var i=1;i<=n;i++)
    // {
    //     res=res*i
    // }
    // return res
    if(n===1)  return 
    return  n*mul(n-1)//递归的思想，上一步与下一步有关，函数不停的调用，函数栈的思想。
    //return 是出口。
}
console.log(mul(8))

//mul(5)==5*mul(4)
//mul(4)==4*mul(3)
//mul(3)==3*mul(2)
//mul(2)==2*mul(1)
//mul==1


//找规律
//找出口