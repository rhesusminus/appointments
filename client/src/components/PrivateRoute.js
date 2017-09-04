import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('jwt-token') ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
