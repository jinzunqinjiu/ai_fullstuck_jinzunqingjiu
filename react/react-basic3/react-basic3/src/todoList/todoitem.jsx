import React, { Component } from 'react'

export default class TodoItem extends Component {
    state = {
        list: this.props.state
    }//成功的拿到了值
    componentDidMount() {
        console.log(this.props.state);
    }
    handledelete = (index) => {
        this.state.list.splice(index, 1)
        this.forceUpdate()
    }
    render() {

        const { list } = this.state
        return (
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}  <button onClick={() => this.handledelete(index)}>x</button></li>

                ))}
            </ul>
        )
    }
}
//1.拿到数组
//2.将数组循环展示
//3.input加入数组数据
//4.删除下标