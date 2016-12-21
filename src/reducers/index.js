import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses,//ES6 shorthand property name
  authors
});

export default rootReducer;
