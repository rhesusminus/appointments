import { FETCH_BARBERS, RECEIVE_BARBERS, SELECT_BARBER, WORKLIST_RECEIVE, WORKLIST_REQUEST,
  SELECT_WORK } from '../actions/types';

const initialState = {
  isFetchingBarbers: false,
  barbers: [],
  selectedBarber: '',
  isFetchingWorklist: false,
  worklist: [],
  selectedWork: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BARBERS:
      return Object.assign({}, state, { isFetchingBarbers: action.isFetching });

    case RECEIVE_BARBERS:
      return Object.assign({}, state, {
        barbers: action.barbers,
        isFetchingBarbers: action.isFetching
      });

    case SELECT_BARBER:
      return Object.assign({}, state, {
        selectedBarber: action.barber
      });

    case WORKLIST_REQUEST:
      return Object.assign({}, state, {
        isFetchingWorklist: true
      })

    case WORKLIST_RECEIVE:
      return Object.assign({}, state, {
        worklist: action.worklist,
        isFetchingWorklist: false
      });

    case SELECT_WORK:
      return Object.assign({}, state, {
        selectedWork: action.work
      });

    default:
      return state;
  }
}
