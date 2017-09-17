import axios from 'axios';
import { RECEIVE_BARBERS, SELECT_BARBER, WORKLIST_RECEIVE, WORKLIST_REQUEST } from './types';


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
    return axios.get('http://localhost:3090/barbers')
      .then(response => {
        dispatch(receiveBarbers(response.data));
      })
      .catch(error => {
        console.log('fetchBarbers error: ', error);
      })
  }
}

const requestWorklist = () => {
  return {
    type: WORKLIST_REQUEST
  }
}

const receiveWorklist = (worklist) => {
  return {
    type: WORKLIST_RECEIVE,
    worklist
  }
}

export const fetchWorklist = () => {
  return (dispatch) => {
    dispatch(requestWorklist());

    return axios.get('http://localhost:3090/worklist')
      .then(response => {
        dispatch(receiveWorklist(response.data))
      })
      .catch(error => {
        console.log('fetchWorklist error: ', error);
      })
  }
}
