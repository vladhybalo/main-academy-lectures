import React from 'react';

import {UserContext} from '../../contextCreator';


class User extends React.Component {
    static contextType = UserContext;

    render() {
        console.log('user rerender');

        return <div>
            {this.context.name}
        </div>
    }
}

export default User;