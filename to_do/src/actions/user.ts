import userService from '../services/user';
import {User} from '../types';
import { USER_CONSTANTS } from '../constants';
import { Dispatch } from 'redux';
import alertActions from './alert';

interface LoginDispatch {
    (dispatch:Dispatch): void
}

const login = (username:string, password:string):LoginDispatch => {
    const success = (user:User) => { return { type: USER_CONSTANTS.LOGIN_SUCCESS, user } }
    const request = (user:{username:String}) => { return { type: USER_CONSTANTS.LOGIN_REQUEST, user } }
    const failure = (error:String) => { return { type: USER_CONSTANTS.LOGIN_FAILURE, error } }

    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password).then(
            user => { 
                dispatch(success(user));
                // history.push('/');
            },
            error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        )
    }
};

function logout() {
    userService.logout();
    return { type: USER_CONSTANTS.LOGOUT };
}

export default {
    login,
    logout,
    // signup,
};
