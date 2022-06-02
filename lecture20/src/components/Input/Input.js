import React from "react"

import { UserContext } from "../../contextCreator";

const Input = () => {
    return (
        <UserContext.Consumer>
            {user => <input value={user.name} onChange={user.onInputHandler} />}
        </UserContext.Consumer>
    );
}

export default Input;