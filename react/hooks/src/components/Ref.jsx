import React, { useRef } from 'react';
import { useEffect } from 'react';

const Ref = () => {

    const h2Ref = useRef(null)
    useEffect(() => {
        console.log(h2Ref);
    }, [])

    return (
        <div>
            <h2 ref={h2Ref}>1111</h2>
        </div>
    );
};

export default Ref;