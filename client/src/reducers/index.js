import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import userReducer from './user-reducer';
import barberReducer from './barber-reducer';


const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  barber: barberReducer
});

export default rootReducer;
