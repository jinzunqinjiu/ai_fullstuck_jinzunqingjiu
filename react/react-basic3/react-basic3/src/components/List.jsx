import React from 'react';
import PropTypes from 'prop-types'
const List = props => {
    const arr = props.colors
    const list = arr.map((item, index) => <li key={index}>{item.name}</li>)
    return (
        <div>
            {list}
        </div>
    );
};

List.propTypes = {//为组件添加校验规则
    colors: PropTypes.array,
    fn: PropTypes.func.isRequired,
    obj: {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
};

export default List;