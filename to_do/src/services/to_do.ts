import { getRequestOptions } from "./requestOptions";
import { API } from "../config";
import { API_URLS } from "../constants";
import Bucket from "../models/bucket";
import ToDo from "../models/to_do";

interface ToDoResponse {
    id: number,
    done: boolean,
    description: String,
    title: String,
    bucket: Bucket
}

const getAll = async (): Promise<Array<ToDo>> => {
    const requestOptions = await getRequestOptions('GET')
    try {
        let response = await API.get(API_URLS.TO_DO_LIST, requestOptions)
        let toDos:Array<ToDo> = response.data.map((toDo:ToDoResponse) => {
            return {
                id: toDo.id,
                description: toDo.description,
                title: toDo.title,
                bucketId: toDo.bucket.id,
                bucketName: toDo.bucket.name
            }
        })

        return toDos
    } catch (e) {
        let errorMsg = e.response.data.message ? e.response.data.message : e.response.data.detail
        return Promise.reject(errorMsg)
    }
}

export default {
    getAll
}
