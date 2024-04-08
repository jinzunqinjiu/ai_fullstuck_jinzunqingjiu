import React, { Component } from 'react';

class input extends Component {//受控表单组件 ----input自己的value状态被React控制
    state = {
        message: '窗前明月光'
    }
    changeHandle = (e) => {
        console.log(e.target.value);
        this.setState({ message: e.target.value })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.message} onChange={this.changeHandle} />
            </div>
        );
    }
}

export default input;