// import React from 'react';
// import PropTypes from 'prop-types';

// const Page = ({ page = 10 }) => {
//     return (
//         <div>
//             <p>props的默认值是{page}</p>
//         </div>
//     );
// };

// Page.propTypes = {

// };

// export default Page;
import React, { Component } from 'react';

class Page extends Component {
    static defaultProps = {
        page: 10
    }
    render() {
        return (
            <div>
                <p>props的默认值是{this.props.Page}</p>
            </div>
        );
    }
}

export default Page;