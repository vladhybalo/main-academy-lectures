import React, {memo} from "react";

import Header from '../../components/Header/Header'
import Input from "../../components/Input/Input";
import User from "../../components/User/User";

class Home extends React.Component {
    render(){
        return (
            <div style={{height: '150px'}}>
                <Header></Header>
                <User></User>
                <Input></Input>
            </div>
        );
    }
}

export default memo(Home);