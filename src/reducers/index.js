import {combineReducers} from 'redux';
import events from './eventsReducer';
import login from './loginReducer';

const rootReducer = combineReducers({
  events, login
});

export default rootReducer;
