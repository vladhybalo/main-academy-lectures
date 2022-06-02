import React, {memo} from "react";

import {TextContext} from '../../contextCreator';

class Header extends React.Component {
    static contextType = TextContext;

    render(){
        console.log('header rerender');

        return <div style={{height: '100px'}}>{this.context.text}</div>
    }
}

export default memo(Header);