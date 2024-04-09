import React, { Component, createRef } from 'react';
import TodoItem from '../todoList/todoitem.jsx';

export default class TodoList extends Component {
    msgRef = createRef();
    state = {
        list: ['html', 'css']
    }
    handle = () => {
        // 获取输入框的值
        console.log(this.msgRef.current.value);
        const newItem = this.msgRef.current.value;
        // 更新状态
        this.state.list.push(newItem)
        // 清空输入框
        console.log(this.state.list);
        this.msgRef.current.value = '';
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <header>
                    <input type="text" placeholder='请输入内容' ref={this.msgRef} />
                    <button onClick={this.handle}>提交</button>
                </header>
                <section>
                    {/* 引入TodoItem组件时，确保路径是正确的 */}
                    <TodoItem state={this.state.list} />
                </section>
            </div>
        )
    }
}
