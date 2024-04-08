import React, { Component } from 'react';
import CChild from './components/Child'

class CAPP extends Component {
    state = {
        massage: Date.now()
    }

    fn = () => {
        console.log('parent');
    }
    render() {
        return (
            <div>
                <h2>父组件</h2>
                <CChild msg={this.state.massage} cb={this.fn}></CChild>
            </div>
        );
    }
}

export default CAPP;