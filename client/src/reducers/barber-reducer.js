import { FETCH_BARBERS, RECEIVE_BARBERS, SELECT_BARBER } from '../actions/types';

const initialState = {
  isFetching: false,
  barbers: [],
  selectedBarber: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BARBERS:
      return Object.assign({}, state, { isFetching: action.isFetching });

    case RECEIVE_BARBERS:
      return Object.assign({}, state, {
        barbers: action.barbers,
        isFetching: action.isFetching
      });

    case SELECT_BARBER:
      return Object.assign({}, state, {
        selectedBarber: action.barber
      });

    default:
      return state;
  }
}
