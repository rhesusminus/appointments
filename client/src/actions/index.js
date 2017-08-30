import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from './types';

const requestLogin = (credentials) => {
    return {
      type: LOGIN_REQUEST,
      isFetching: true,
      isAuthenticated: false,
      credentials
    };
}

const receiveLogin = (token) => {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token
  };
}

const loginError = (message) => {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export const loginUser = ({ email, password }) => {
  /*
  const config = {
    method: 'POST',
    headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
    body: JSON.stringify({ email, password })
  }
  */

  return (dispatch) => {
    dispatch(requestLogin({ email, password }));

    return axios.post('http://localhost:3090/signin', { email, password })
    .then(response => {
      const token = response.data.token;
      console.log('RESPONSE:', response);
      localStorage.setItem('jwt-token', token);
      dispatch(receiveLogin(token));
    })
    .catch(error => {
      const errorMessage = error.response.status === 401
        ? 'Wrong email or password!'
        : 'Something went wrong!';

      dispatch(loginError(errorMessage));

      return Promise.reject(error);
    });

    /*
    return fetch('http://localhost:3090/signin', config)
      .then((response) => response.json().then((user) => console.log('USER:', user)))
      .then(({ user, response }) => {
        console.log(`user: ${user} – response: ${response}`);
        if(!response.ok) {
          console.log('USER:', user);
          dispatch(loginError(user.message))

          return Promise.reject(user);
        } else {
          localStorage.setItem('jwt-token', user.token);
          dispatch(receiveLogin(user));
        }
      })
      .catch((err) => console.log('Error:', err));
    */
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('jwt-token');
    dispatch(receiveLogout());
  }
}
