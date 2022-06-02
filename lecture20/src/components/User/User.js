import React from 'react';

import {UserContext} from '../../contextCreator';


class User extends React.Component {
    static contextType = UserContext;

    handleClick() {
        this.context
    }

    componentDidMount() {
        this.context
    }

    render() {
        return <div>
            {this.context.name}
        </div>
    }
}

export default User;