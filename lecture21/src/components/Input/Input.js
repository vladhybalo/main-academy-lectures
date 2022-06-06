import React from "react";

import withSpinner from '../../hocs/withSpinner/withSpinner';
import withLogger from '../../hocs/withLogger/withLogger';


const Input = ({ handleInput, inputRef })=> {
    return <input ref={inputRef} onChange={handleInput}></input>
};


export default withSpinner(withLogger(Input));