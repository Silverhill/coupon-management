import * as types from '../actions/actionTypes';
import initialState from './initialState';
import history from '../history';

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      history.push('/private')
      return !!sessionStorage.jwt
    case types.LOG_OUT:
      history.push('/')
      return !!sessionStorage.jwt
    default:
      return state;
  }
}

