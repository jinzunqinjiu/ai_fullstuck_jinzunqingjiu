import React, { Component } from 'react';

class PChild extends Component {
    state = {
        msg: '来自子组件的数据'
    }
    handle = () => {
        this.props.cb(this.state.msg)
    }
    render() {
        return (
            <div>
                <h4>子组件</h4>
                <button onClick={this.handle}>按钮</button>
            </div>
        );
    }
}

export default PChild;