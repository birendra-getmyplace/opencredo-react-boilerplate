import {
  getState,
  LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST,
} from './auth-actions';

const authReducer = (state = getState(), action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, action.state);
    case LOGIN_FAILURE:
      return Object.assign({}, state, action.state);
    case LOGOUT_REQUEST:
      return Object.assign({}, state, action.state);
    default:
      return state;
  }
};

export default authReducer;