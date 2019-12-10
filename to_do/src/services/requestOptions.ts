import { AxiosRequestConfig } from "axios"
import { HTTP_METHOD } from "../types"

export const getRequestOptions = async (method: HTTP_METHOD) => {
    let requestOptions:AxiosRequestConfig  = {
        method: method,
        headers: {}
    }
    const user = localStorage.getItem('user')
    if (user) {
        const authToken:String = JSON.parse(user).token
        if (authToken) {
            requestOptions.headers = {
                Authorization: `token ${authToken}`,
            }
        }
    }
    
    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
        Object.assign(requestOptions.headers, {
            Accept: 'application/json',
            "Content-type": 'application/json',
        })
    } else {
        Object.assign(requestOptions.headers, {
            Accept: 'application/json',
        })
    }
    return requestOptions
}
