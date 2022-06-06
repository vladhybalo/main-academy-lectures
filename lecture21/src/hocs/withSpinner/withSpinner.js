import React from "react";

import './withSpinner.css'

const withSpinner = (WrappedComponent) => {
    class Spinner extends React.Component {
        render() {
            if(this.props.loading === true) {
                return <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }

            return <WrappedComponent {...this.props}/>;
        }
    }

    return Spinner;
}

export default withSpinner;