import React from 'react';
import BroherA from './components/BroherA';
import BrotherB from './components/BrotherB';
import { Provider } from './provider.js'
class BApp extends React.Component {
    state = {
        message: ''
    }

    fn = (newMsg) => {
        console.log(newMsg);
    }
    render() {
        return (
            <Provider value={this.state.message}>
                <div>
                    <p>父组件</p>
                    {/* <BroherA cb={this.fn}></BroherA>
                <BrotherB message={this.state.message}></BrotherB> */}
                    <BrotherB />
                    <BroherA />
                </div>
            </Provider>

        );
    }

}
export default BApp;

// rscp 函数式
// rcc 类
//能不能不要一会类，一会函数式编程