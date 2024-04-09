import React, { Component, createRef } from 'react';

class life extends Component {
    constructor() {
        super()
        this.ref = createRef()
        console.log('Life组件开始加载');
        this.state = {
            count: 1
        }



    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })


        this.state.count++
        this.forceUpdate()//强制render重新更新。
    }

    render() {
        console.log('组件开始编译');
        return (
            <div>
                <h4 ref={this.ref} onClick={this.handleClick}>{this.state.count}</h4>
            </div>
        );
    }
    componentDidMount() {
        console.log(this.ref.current);
        console.log('life组件挂载完成');
    }
    componentDidUpdate() {
        console.log('life组件更新完');
    }
    componentWillUnmount() {
        console.log('组件卸载');
    }

}

export default life;