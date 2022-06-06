import React from 'react';

import Input from './components/Input/Input';

// ...App


{/* <Spinner component={<Logger component={<Input />}} /> */}

class App extends React.Component {
  state = {
    disabled: true,
    loading: false
  }

  inputRef = React.createRef()

  handleInput = (e) => {
    console.log(e);

    this.setState({disabled: e.target.value === ''});
  }

  applyChanges = () => {
    if(!this.state.inputValue) {
      // apply changes

      // clear input
      console.dir(this.inputRef);
      this.inputRef.current.value = '';
    }
  }

  resetInput = () => {
    this.inputRef.current.value = '';

    this.inputRef.current.focus();
  }

  componentDidMount() {
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({loading: false});
    }, 3000)
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.inputValue !== prevState.inputValue) {
      const disabled = this.state.inputValue === '';

      this.setState({ disabled });
    }
  }

  render() {
    return (
      <div className="App">
        <Input loading={this.state.loading} inputRef={this.inputRef} handleInput={this.handleInput}></Input>

        <button disabled={this.state.disabled} onClick={this.applyChanges}>
          Apply
        </button>
        <button onClick={this.resetInput}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
