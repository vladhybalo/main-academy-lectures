import React from "react";

import { playModes } from "../../Config";

import './Cell.css';

export default class Cell extends React.Component {
    componentDidUpdate(prevProps) {
        // if(!prevProps.error && this.props.error) {
        //     // document.querySelector('td').classList
        // }
    }
    render() {
        const {children, playMode, onCellClick, error} = this.props;

        return <td className={error ? 'error' : null} onClick={onCellClick}>{this.props.children}</td>;
    }
}