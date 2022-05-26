import React, {Component, Fragment} from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';

const formConfig = [
    {
        name: 'name',
        regExp: /[\w ]+/,
        errorText:"Enter valid name",
        value: '',
        id: 'id1'
    },
    {
        name: 'tel',
        regExp: /^\d{8,10}$/,
        errorText:"Enter valid number",
        value: '',
        id: 'id2'
    },
    {
        name: 'email',
        regExp: /^[\w-\d]+@\w+.\w{2,3}$/,
        errorText:"Enter valid email",
        value: '',
        id: 'id3'
    }
];

const entities = {
    id1: {
        name: 'name',
        regExp: /[\w ]+/,
        errorText:"Enter valid name",
        value: '',
        id: 'id1'
    },
    id2: {
        name: 'tel',
        regExp: /^\d{8,10}$/,
        errorText:"Enter valid number",
        value: '',
        id: 'id2'
    },
    id3:  {
        name: 'email',
        regExp: /^[\w-\d]+@\w+.\w{2,3}$/,
        errorText:"Enter valid email",
        value: '',
        id: 'id3'
    }
}

const formConfigOrder = ['id1', 'id2', 'id3'];

class Form extends Component {
    state = {
        disabled: true,
        nameInputValid: false,
        telInputValid: false,
        emailInputValid: false,
        formConfig: formConfig,
        entities,
        formConfigOrder
    }

    setInputState = (id) => ({value, valid}) => {
        const newObj = {
            ...entities[id],
            valid,
            value
        }
        
        this.setState({
            entities: {
                ...entities,
                [id]: newObj
            }
        }, () => {
            if(this.state.formConfigOrder.every(id => this.state.entities[id].valid)) {
                this.setState({disabled: false})
            } else {
                this.setState({disabled: true})
            }
        });
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevState.entities !== this.state.entities) {
    //         if(this.state.formConfigOrder.every(id => this.state.entities[id].valid)) {
    //             this.setState({disabled: false})
    //         } else {
    //             this.setState({disabled: true})
    //         }
    //     }
    // }

    onClickHander = (e) => {
        e.preventDefault();

        fetch('http://dafdsfas.com', {
            method: 'POST',
            body: JSON.stringify(this.state.entities)
        });
    }

    render() {
       return (
            <form>
                {this.state.formConfigOrder.map((id, index) => {
                    const {name, regExp, errorText} = this.state.entities[id];

                    return (<Input
                        key={id}
                        name={name}
                        regExp={regExp}
                        errorText={errorText}
                        setInputState={this.setInputState(id)}
                    ></Input>)
                })}
                <Button disabled={this.state.disabled} onClickHander={this.onClickHander}>Send me</Button>
            </form>
       )
    }
};

export default Form;