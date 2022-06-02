import React from "react"

import { UserContext } from "../../contextCreator";

const Input = () => {
    console.log('input rerender');
    return (
        <UserContext.Consumer>
            {user => <input value={user.name} onChange={user.onInputHandler} />}
        </UserContext.Consumer>
    );
}

export default Input;