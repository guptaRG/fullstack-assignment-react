export const TITLE:string = "Fractal Analytics Fullstack Assignment";
export const BASE_URL:string = "http://localhost:1337/api"

export const API_URLS = {
    USER_LOGIN: 'user/login/',
    USER_TOKEN: 'user/token/',
    USER_SIGNUP: 'user/signup/',
    TO_DO_LIST: 'to-do/',
    TO_DO_CREATE: 'to-do'
}

export const USER_CONSTANTS = {
    LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
    
    LOGOUT: 'USER_LOGOUT',
};

export const ALERT_CONSTANTS = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
};

export const TO_DO_CONSTANTS = {
    LIST_REQUEST: 'LIST_TO_DOS_REQUEST',
    LIST_SUCCESS: 'LIST_TO_DOS_SUCCESS',
    LIST_FAILURE: 'LIST_TO_DOS_FAILURE'
    
}