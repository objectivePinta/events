import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxReducer(state = initialState.loading, action) {
  switch (action.type) {
  case types.AJAX_STARTED:
    return true;
  case types.AJAX_FINISHED:
    return false;
  default:
    return false;
  }
}
