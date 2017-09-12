import axios from 'axios';
import { FETCH_BARBERS, RECEIVE_BARBERS } from './types';


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
