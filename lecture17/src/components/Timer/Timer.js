import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

let a = 1;

class Timer extends React.Component {
    constructor(props) {
        super(props);

        // state
        this.state = {
            time: 1
        }
    }

    // mount (created and rendered)
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: this.state.time + 1
            })
        }, 1000)
       
    }

    // update
    componentDidUpdate(prevProps) {
        console.log('update', prevProps, this.props);

        if(prevProps.time === 6 && this.props.time === 7) {
            // do some magic
        }
    }

    // unmount (destoy)
    componentWillUnmount() {
        console.log('unmount');

        a = null;

        // TODO clear timer
    }

    render() {
        return <div>{this.state.time} {a}</div>;
    }
}

export default Timer;