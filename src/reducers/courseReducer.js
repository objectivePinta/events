import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
   //   debugger;
      //Object.assign({},state,)
      return action.courses;
    default:
      return state;
  }
}