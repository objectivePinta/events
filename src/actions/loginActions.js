import URI from 'urijs';
import apiFetch from './apiFetch';
import * as constants from './constants';
import * as types from './actionTypes';


export function setLogin(data) {
  return {
    type: types.LOGIN,
    payload: data,
  }
}

export function login() {
  return function(dispatch) {
    const requestUri = new URI(constants.API_ROOT).segment('login');
    console.log(requestUri);
    return apiFetch(dispatch, requestUri, {
      method: 'GET',
      mode: 'no-cors',
    }).then(response => {
      console.log(response);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).then(json =>{
      console.log(json);
      dispatch(setLogin(json));
    }).catch(error =>{
      throw error;
    });
  };
}
