import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';


export function loadAuthorsSucces(authors) {
  // debugger;
  return {type:types.LOAD_AUTHORS_SUCCES,authors};
}


export function loadAuthors() {
  return function(dispatch) {
    return (AuthorApi.getAllAuthors()).then((authors) => {
      dispatch(loadAuthorsSucces(authors));
    }).catch(error=> {
      throw(error);
    });
  };
}
