import URI from 'urijs';
import apiFetch from './apiFetch';
import * as constants from './constants';
import * as types from './actionTypes';

export function setEvents(events) {
  return {
    type: types.SET_EVENTS,
    payload: events
  };
}

export function getEvents() {
  console.log(window.location.protocol);
  console.log(window.location.host);
  console.log(window.location.pathname.split('/')[1]);
  return function(dispatch) {
    const requestUri = new URI(constants.API_ROOT).segment('events');
    console.log(requestUri);
    return apiFetch(dispatch, requestUri, {
      method: 'GET',
      credentials: 'include',
    }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).then(json =>{
      dispatch(setEvents(json));
    }).catch(error =>{
      throw error;
    });
  };
}
