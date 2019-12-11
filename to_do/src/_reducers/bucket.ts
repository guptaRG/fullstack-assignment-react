import { BucketState, BucketAction } from "../types";
import { BUCKET_CONSTANTS } from "../constants";

const initialState:BucketState = {
    buckets: []
}

export const bucketReducer = (state:BucketState = initialState, action:BucketAction): BucketState => {
    switch (action.type) {
        case BUCKET_CONSTANTS.LIST_REQUEST:
            return state;
        case BUCKET_CONSTANTS.LIST_SUCCESS:
            return {
                buckets: action.buckets
            };
        case BUCKET_CONSTANTS.LIST_FAILURE:
            return state;
        default:
            return state;
    }
}
