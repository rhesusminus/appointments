import React, { Component } from 'react';
import { Header } from './components/Header';
import Signin from './components/Signin';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Signin />
      </div>
    );
  }
}

export default App;
