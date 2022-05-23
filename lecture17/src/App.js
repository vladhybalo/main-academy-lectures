import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Timer from './components/Timer/Timer';
import React from 'react';

const logText = 'Log';

const sayHiFromHeader = () => {
  console.log('Hi')
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerVisibility: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({timerVisibility: false});
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        <Header displayText={logText} a={2} b="2" sayHi={sayHiFromHeader}></Header>
        {this.state.timerVisibility && <Timer></Timer>}
      </div>
    );
  }
}

export default App;
