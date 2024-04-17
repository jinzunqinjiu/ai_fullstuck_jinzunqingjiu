# 组件

- props 中的数据类型
1.安装 prop-types 依赖
2.为组件添加校验规则  name:PropTypes.string//必须是字符串类型
3.可以限定props中参数的类型，是否必传


- props的默认值的写法
1.函数式组件
2.默认组件

# 生命周期
- 挂载阶段
1.constructor
2.render
3.conponentDidMount


- 更新阶段
1.render
2.conponentDidUpdate


- 卸载阶段
1.conponentWillUnmount

3.useRef  在函数组件中获取dom结构
4.useContext   createContext创建一个上下文对象，用于父组件提供数据，子组件用过useContent(context)来接受数据