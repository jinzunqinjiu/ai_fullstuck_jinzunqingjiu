- 函数式编程
  - sort 函数，操作有副作用，影响原数组
  - sortArr函数，修改外界传进来的实参nums,多人协作时，可能带来外界的误解
      在编写函数时，不要写这种函数，我们要写纯函数


- 写函数前，cover  覆盖99%的case
- 浅拷贝
    数组是对象，引用式赋值
    arr.concat() 返回的是一个全新的数组

- 数组渲染ul 列表
    - 使用map，将原来的数组数组变为li 字符串数组
      es6 数组的新方法，不影响原来的数组，会返回一个全新的数组
      遍历数组的每一项，执行一个callback，callback 的返回值就是新的数组的每一项的值
    - join('')li的拼接字符串
    - innerHTML = 