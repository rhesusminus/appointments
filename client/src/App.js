import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import Signin from './components/Signin';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route path="/" component={Signin} />
        </div>
      </Router>
    );
  }
}

export default App;
