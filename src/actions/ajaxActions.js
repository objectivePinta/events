import * as types from './actionTypes';

export function ajaxStarted() {
  return function (dispatch) {
    dispatch(
      {
        type: types.AJAX_STARTED,
      }
    );
    return new Date().getTime();
  };
}


export function ajaxFinished(startTime) {
  const time = new Date().getTime() - startTime;
  return function (dispatch) {
    setTimeout(() => {
      dispatch({
        type: types.AJAX_FINISHED,
      });
    }, 300 - time);
  };
}

export function callAjaxFinished() {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(ajaxFinished());
    }, 500);
  };
}
