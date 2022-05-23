import React, {Component} from "react";

import './Header.css';
import {logger} from '../../helpers'

class Header extends Component {

    render() {
        logger('Render header');
        logger(this.props);

        const { displayText, sayHi, a } = this.props;

        sayHi();

        return (<header>
            Hi
            <button className="login_btn">{a === 1 ? displayText : 'Some error'}</button>
        </header>)
    }
}

export default Header;