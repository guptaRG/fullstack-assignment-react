import { USER_CONSTANTS } from '../constants';
import { AuthenticationAction, AuthenticationState } from '../types';

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user: JSON.parse(user) } : {};

export const authentication = (state:AuthenticationState|{} = initialState, action:AuthenticationAction): AuthenticationState => {
  switch (action.type) {
    case USER_CONSTANTS.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case USER_CONSTANTS.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case USER_CONSTANTS.LOGIN_FAILURE:
      return {};
    case USER_CONSTANTS.LOGOUT:
      return {};
    default:
      return state
  }
}