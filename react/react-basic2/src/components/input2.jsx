import React, { Component, createRef } from 'react';

//createRef 用于创建
//非受控组件
class input2 extends Component {//非受控组件  自己的value状态不被React组件控制
    msgRef = createRef()//创建了一个存放dom的容器
    changehandle = (e) => {
        console.log(this.msgRef.current.value);
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.msgRef} />
                <button onClick={this.changehandle}>提交</button>
            </div>
        );
    }
}

export default input2;