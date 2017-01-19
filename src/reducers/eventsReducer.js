import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function eventsReducer(state = initialState.events, action) {
  switch (action.type) {
    case types.SET_EVENTS:
      return action.payload;
    default:
      return state;
  }
}
