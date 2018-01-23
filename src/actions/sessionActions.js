import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';
import auth from '../auth/authenticator';

export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function loginUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      if (response.data && response.data.token) {
        sessionStorage.setItem('jwt', response.data.token);
        dispatch(loginSuccess());
      }
    }).catch(error => {
      alert(error.response.data.message)
    });
  };
}

export function logOutUser() {
  auth.logOut();
  return {type: types.LOG_OUT}
}
