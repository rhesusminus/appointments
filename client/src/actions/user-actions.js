import axios from 'axios';
import { USERDATA_REQUEST, USERDATA_SUCCESS, USERDATA_FAILURE } from './types';

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


export const getCurrentUserData = () => {
  return (dispatch) => {
    dispatch(requestUserData());

    const headers = {
      Authorization: localStorage.getItem('jwt-token')
    }

    return axios.get('http://localhost:3090/currentUser', { headers })
      .then(response => {
        const userData = response.data;
        dispatch(receiveUserData(userData));
      });
  }
};
