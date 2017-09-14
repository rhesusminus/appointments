import axios from 'axios';
import { RECEIVE_BARBERS, SELECT_BARBER } from './types';


export const selectBarber = (barber) => {
  return {
    type: SELECT_BARBER,
    barber
  }
}

const receiveBarbers = (barbers) => {
  return {
    type: RECEIVE_BARBERS,
    isFetching: false,
    barbers
  }
}

export const fetchBarbers = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3090/getBarbers')
      .then(response => {
        dispatch(receiveBarbers(response.data));
      })
      .catch(error => {
        console.log('fetchBarbers error: ', error);
      })
  }
}
