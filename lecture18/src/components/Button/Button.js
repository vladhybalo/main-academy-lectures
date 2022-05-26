import React, {Component} from 'react';

class Button extends Component {
    render() {
        const { disabled, children, onClickHander } = this.props;

        return (
            <button disabled={disabled} onClick={onClickHander}>{children}</button>
        )
    }
};

export default Button;