import React from "react";

const withLogger = (WrappedComponent) => {
    class Logger extends React.Component {
        componentDidMount() {
            console.log('mount');
        }

        componentWillUnmount() {
            console.log('unmount');
        }

        render() {
            return <div><WrappedComponent {...this.props}/></div>
        }
    };

    return Logger;
}

export default withLogger;