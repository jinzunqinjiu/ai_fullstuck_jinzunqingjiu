//函数修饰符   函数内部有异步 es7
(async function () {
    //js是单线程  放入eventloop ，先执行后面的代码
    //thenable   异步任务中控制执行顺序
    // fetch('https://icbib2.laf.run/get-list')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         console.log('end')
    //     })
    // 异步变同步，有利于流程控制
    const res=await fetch('https://icbib2.laf.run/get-list')
    const { data } = await res.json()
    console.log(data)
}
)()