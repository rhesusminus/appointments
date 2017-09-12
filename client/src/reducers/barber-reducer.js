import { FETCH_BARBERS, RECEIVE_BARBERS } from '../actions/types';

const initialState = {
  isFetching: false,
  barbers: []
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

    default:
      return state;
  }
}
