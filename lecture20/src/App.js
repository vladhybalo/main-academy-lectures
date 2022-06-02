import logo from './logo.svg';
import './App.css';

import React from 'react';

import {TextContext} from './contextCreator';

import Home from './pages/Home/Home'
import UserContext from './components/UserContext/UserContext';

class App extends React.Component {
  state= { 
    text: 'Hello, from header'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: 'Hello, from my header'
      })
    }, 2000)
  }


  render() {
    return (
      <div className="App">
        <TextContext.Provider value={this.state}>
          <UserContext>
            <Home />
          </UserContext>
        </TextContext.Provider>
      </div>
    );
  }
}

export default App;
