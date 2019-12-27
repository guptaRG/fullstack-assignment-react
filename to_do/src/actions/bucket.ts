import { ActionDispatch } from "../types"
import { BUCKET_CONSTANTS } from "../constants"
import Bucket from "../models/bucket"
import bucketServices from "../services/bucket"
import alertActions from "./alert"

const getAll = ():ActionDispatch => {
    const request = () => { return { type: BUCKET_CONSTANTS.LIST_REQUEST } }
    const success = (buckets:Array<Bucket>) => { return { type: BUCKET_CONSTANTS.LIST_SUCCESS, buckets } }
    const failure = (error:String) => { return { type: BUCKET_CONSTANTS.LIST_FAILURE, error} }

    return dispatch => {
        dispatch(request());

        bucketServices.getAll().then(
            buckets => {
                dispatch(success(buckets));
            },
            error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        )
    }
}

export default {
    getAll
}
