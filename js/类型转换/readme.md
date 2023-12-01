# 基本数据类型之间的转换
1.转布尔
2.转数字
3.转字符串
4.转对象
CodeGeex





# 对象转原始类型  obj.toString()    obj.valueof()
{}.tosString //"[obeject clss]"
toString() 在js中有多个版本：
- 数组中的 toString()会将数组中所有的元素转化成字符串并以逗号拼接
- 函数中的toString()会将整个函数体以字符串形式返回
- Data的toString()会将整个data以字符串形式返回


## 对象转字符串    ToPrimitive(string string)
1.判断obj是基本类型，则返回
2.否则 调用 valueof()方法
3.否则 调用 valueof()方法
4.否则 报类型错误


## 对象转数字       ToPrimitive(string number)
1.判断obj是基本类型，则返回
2.否则 调用 valueof()方法
3.否则 调用 valueof()方法
4.否则 报类型错误