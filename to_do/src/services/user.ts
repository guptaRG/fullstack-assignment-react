import { getRequestOptions } from "./requestOptions";
import {API} from '../config';
import {API_URLS} from '../constants';
import { AxiosResponse } from "axios";
import User from "../models/user";
import { detect, BrowserInfo, BotInfo, NodeInfo } from "detect-browser";

const login = async (username: string, password: string): Promise<User> => {
    const requestOptions = await getRequestOptions('POST')
    const browser:BrowserInfo | BotInfo | NodeInfo | null = detect()

    const userBody = JSON.stringify({
        username,
        password,
        browser_info: browser
    })
    try {
        let loginResponse = API.post(API_URLS.USER_LOGIN, userBody, requestOptions)
        const tokenResponse = API.post(API_URLS.USER_TOKEN, userBody, requestOptions)
        let [user, token] = await Promise.all([loginResponse, tokenResponse]) as [AxiosResponse<any>, AxiosResponse<any>]
        let userDetails:User = {...user.data, ...token.data}
        localStorage.setItem('user', JSON.stringify(userDetails))
        return userDetails
    } catch (e) {
        let errorMsg = e.toString()
        if (e.response) {
            if (e.response.data.message) {
                errorMsg = e.response.data.message
            } else if (e.response.data.non_field_errors) {
                errorMsg = e.response.data.non_field_errors[0]
            } else {
                let errorArr: Array<String> = []
                for (let key in e.response.data) {
                    e.response.data[key].forEach((err: String) => {
                        errorArr.push(`${key}: ${err}`)
                    });
                }
                errorMsg = errorArr.join(' ')
            }
        }
        console.log(errorMsg, "dasdsadas")

        return Promise.reject(errorMsg)
    }
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

const signup = async (firstName: string, lastName: string, username: string, email: string, password: string): Promise<void> => {
    const requestOptions = await getRequestOptions('POST')
    const requestBody = JSON.stringify({
        username,
        password,
        email,
        first_name: firstName,
        last_name: lastName
    })
    try {
        await API.post(API_URLS.USER_SIGNUP, requestBody, requestOptions)
    } catch (e) {
        let errorMsg = e.response.data.message || e.response.data.detail || e.response.data.non_field_errors[0]
        return Promise.reject(errorMsg)
    }
}

export default {
    login,
    logout,
    signup
};