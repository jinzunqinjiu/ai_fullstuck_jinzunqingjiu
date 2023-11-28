function sleep(t){
    const p=new Promise(resolve=>{

        setTimeout(()=>{
            console.log('计时器生成') 
            resolve('promise返回的hello world')
        })
    },t)
    return p
}
// //异步变成了同步
sleep(1000)
    .then((msg)=>{
        console.log(msg,'--------')
    })
//返回一个promise
//then里面
// console.log('hello');


(async function () {
    //耗时任务  Promise的一个实例
    const res = await fetch('https://qhabzb.laf.run/get-list')
    const {data} = await res.json()
    console.log(data)
})()