import userService from '../services/user';
import { USER_CONSTANTS } from '../constants';
import alertActions from './alert';
import User from '../models/user';
import { ActionDispatch } from '../types';
import { URLS } from '../components/Routing';
import { history } from "../_helpers/history";

const login = (username:string, password:string):ActionDispatch => {
    const success = (user:User) => { return { type: USER_CONSTANTS.LOGIN_SUCCESS, user } }
    const request = (user:{username:String}) => { return { type: USER_CONSTANTS.LOGIN_REQUEST, user } }
    const failure = (error:String) => { return { type: USER_CONSTANTS.LOGIN_FAILURE, error } }

    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password).then(
            user => { 
                dispatch(success(user));
                history.push(URLS.HOME)
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
