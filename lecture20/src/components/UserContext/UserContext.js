import React from 'react';

import { UserContext} from '../../contextCreator';

class UserContextComponent extends React.Component {
  onInputHandler = (e) => {
    this.setState({ name: e.target.value });
  }

  state = { 
    name: 'Vlad',
    onInputHandler: this.onInputHandler
  }

  render() {
    return (
        <UserContext.Provider value={this.state}>
            {this.props.children}
        </UserContext.Provider>
    );
  }
}

export default UserContextComponent;
