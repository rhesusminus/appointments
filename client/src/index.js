import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import App from './App';
import rootReducer from './reducers/';
import './index.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

/* eslint-disable no-underscore-dangle */
const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
