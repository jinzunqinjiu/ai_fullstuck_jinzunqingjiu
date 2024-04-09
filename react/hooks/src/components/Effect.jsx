import React, { useEffect, useState } from 'react';

const Effect = () => {

    const [count, setCount] = useState(0)
    const [name, setname] = useState('jerry')

    useEffect(() => {
        // console.log(`当前点击了${count}次`);
        const timer = setInterval(() => {
            setCount(count + 1)
        }, 1000)
        return () => {//组件卸载的时候自动的触发
            //清除副作用
            clearInterval(timer)
        }
    }, [count])
    useEffect(() => {
        console.log(`名字是${name}`);
    }, [name])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <button onClick={() => setname('Tom')}>{name}</button>
        </div>
    );
};

export default Effect;