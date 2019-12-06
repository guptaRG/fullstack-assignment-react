import { AxiosRequestConfig } from "axios"

export const getRequestOptions = async (method: "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | undefined, authToken?: string) => {
    let requestOptions:AxiosRequestConfig  = {
        method: method,
        headers: {}
    }
    if (authToken) {
        requestOptions.headers = {
            Authorization: `token ${authToken}`
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
