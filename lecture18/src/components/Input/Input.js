import React, {Component} from 'react';
import './Input.css'

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        }
    }
    handleInputBlur = (e) => {
        console.log(e.target.value);

        if(e.target.value.match(this.props.regExp)) {
            // clear error
            this.setState({
                error: null
            });
            this.props.setInputState({valid: true, value: e.target.value})
        } else {
            // add error
            this.setState({
                error: this.props.errorText
            })

            this.props.setInputState({valid: false, value: e.target.value})
        }
    }

    render() {
        const {name} = this.props;
        const {error} = this.state;

        return (
            <label className='form-label'>
                {name}
                <input placeholder={`Enter your ${name}`} onBlur={this.handleInputBlur}></input>
                <p className='error'>
                    {error}
                </p>
            </label>
        )
    }
};

export default Input;