import { USERDATA_REQUEST, USERDATA_SUCCESS, USERDATA_FAILURE } from '../actions/types';

const initialState = {
  isFetching: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case USERDATA_REQUEST:
      return Object.assign({}, state, { isFetching: true });

    case USERDATA_SUCCESS:
      return Object.assign({}, state, { isFetching: false, data: action.userData });

    default:
      return state;
  }
}
