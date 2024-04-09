import React, { useState } from 'react';

const State = () => {
    let [count, setCount] = useState(10)
    const [title, setTitle] = useState('hellow')
    const add = () => {
        setCount(count + 1)
        setTitle(title + count)
    }
    return (
        <div>
            <h4>title:{title}</h4>
            <button onClick={() => add()}>{count}</button>
        </div>
    );
};

export default State;