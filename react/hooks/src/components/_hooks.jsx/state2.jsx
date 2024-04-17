import React, { useState } from 'react';

const state2 = (props) => {
    const [n] = useState(2)
    const [count, setCount] = useState(() => {
        return props.num * n
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    );
};

export default state2;