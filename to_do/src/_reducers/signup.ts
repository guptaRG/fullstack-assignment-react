import { USER_CONSTANTS } from '../constants';
import { SignupAction } from '../types';

export const signup = (state = {}, action:SignupAction) => {
  switch (action.type) {
    case USER_CONSTANTS.SIGNUP_REQUEST:
      return { signingUp: true };
    case USER_CONSTANTS.SIGNUP_SUCCESS:
      return {};
    case USER_CONSTANTS.SIGNUP_FAILURE:
      return {};
    default:
      return state
  }
}
