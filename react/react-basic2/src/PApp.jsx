import React, { Component } from 'react';
import Pchild from './components/PChild'
class PApp extends Component {

    callback = (newMsg) => {
        console.log('拿到子组件的数据：' + newMsg);
    }
    render() {
        return (
            <div>
                <h2>父组件</h2>
                <Pchild cb={this.callback}></Pchild>
            </div>
        );
    }
}

export default PApp;