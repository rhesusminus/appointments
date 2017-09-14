import axios from 'axios';
import { USERDATA_REQUEST, USERDATA_SUCCESS, USERDATA_SAVE, USERDATA_SAVED } from './types';

const requestUserData = () => {
  return {
    type: USERDATA_REQUEST,
    isFetching: true,
  }
};

const receiveUserData = (userData) => {
  return {
    type: USERDATA_SUCCESS,
    isFetching: false,
    userData
  }
}

const saveNewUser = (userData) => {
  return {
    type: USERDATA_SAVE,
    payload: userData
  }
}

const userSaved = () => {
  return {
    type: USERDATA_SAVED
  }
}

export const getCurrentUserData = () => {
  return (dispatch) => {
    dispatch(requestUserData());

    const headers = { Authorization: localStorage.getItem('jwt-token') }

    return axios.get('http://localhost:3090/currentUser', { headers })
      .then(response => {
        const userData = response.data;
        dispatch(receiveUserData(userData));
      });
  }
};

export const saveUserData = (userData) => {
  const { firstName, lastName, email, address, phonenumber, password } = userData;
  const body = {
    name: {
      firstName,
      lastName
    },
    email,
    address,
    phonenumber,
    password
  }

  return (dispatch) => {
    return axios.post('http://localhost:3090/signup', body)
      .then(response => {
        dispatch(userSaved);
        localStorage.setItem('jwt-token', response.data.token);
      });

  }
}
