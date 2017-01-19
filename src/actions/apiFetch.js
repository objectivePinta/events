import URI from 'urijs';
import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import * as ajaxActions from './ajaxActions';

export default function apiFetch(dispatch, resource, request) {
  const startTime = dispatch(ajaxActions.ajaxStarted());
  return fetch(resource.toString(), request)
    .then(response => {
      dispatch(ajaxActions.ajaxFinished(startTime));
      if (response.status === 204) {
        dispatch(push(new URI(constants.ROOT).segment('login').toString()));
        if (resource.equals(new URI(constants.ROOT).segment('login'))) {
          throw new Error('Login failed, please try again.');
        }
        throw new Error('Logged out, please log in again.');
      }
      return response;
    });
}
