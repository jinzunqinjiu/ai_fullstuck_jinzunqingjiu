import React from 'react';
import PropTypes from 'prop-types';

const BroherA = props => {
    const msg = '传给父祖件的数据'
    const handle = () => {
        props.cb(msg)
    }
    return (
        <div>
            <h4 onClick={handle}>子组件A</h4>
        </div>
    );
};

BroherA.propTypes = {

};

export default BroherA;