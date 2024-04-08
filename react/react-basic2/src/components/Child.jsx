import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <h4>子组件</h4>
                <p>{this.props.msg}</p>
            </div>
        );
    }
}

export default Child;