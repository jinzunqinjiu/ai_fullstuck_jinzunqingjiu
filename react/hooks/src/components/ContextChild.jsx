import React from 'react';
import { useContext } from 'react';
import Con from './__context'

const ContextChild = () => {
    const msg = useContext(Con)

    return (
        <div>
            ContextChild --- {msg}
        </div>
    );
};

export default ContextChild;