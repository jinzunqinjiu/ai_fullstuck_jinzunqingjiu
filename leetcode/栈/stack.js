var stack=[]//只有push和pop方法的数组，只能从一端存值
stack.push('北京烤鸭')
stack.push('北京烤鸭1')
stack.push('北京烤鸭2')
stack.push('北京烤鸭3')


while (stack.length){
    const  top =stack[stack.length-1]
    console.log('我想吃',top)
    pop()
}



