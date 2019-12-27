import Bucket from "../models/bucket";
import { getRequestOptions } from "./requestOptions";
import { API } from "../config";
import { API_URLS } from "../constants";

const getAll = async (): Promise<Array<Bucket>> => {
    const requestOptions = await getRequestOptions('GET')
    try {
        let response = await API.get(API_URLS.BUCKET_LIST, requestOptions)
        return response.data
    } catch (e) {
        let errorMsg = e.response.data.message ? e.response.data.message : e.response.data.detail
        return Promise.reject(errorMsg)
    }
}

export default {
    getAll
}
