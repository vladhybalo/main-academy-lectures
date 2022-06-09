import React from 'react';

import { withRouter } from 'react-router-dom';

const More = (props) => {
    console.log(props);

    return (
        <div>
            More, Hi {props.match.params.name}!
        </div>
    )
};

export default More;