import { TO_DO_CONSTANTS} from "../constants"
import toDoServices from "../services/to_do"
import { ToDo } from "../models/to_do"
import alertActions from "./alert"
import { ActionDispatch } from "../types"

const getAll = ():ActionDispatch => {
    const request = () => { return { type: TO_DO_CONSTANTS.LIST_REQUEST } }
    const success = (toDos:Array<ToDo>) => { return { type: TO_DO_CONSTANTS.LIST_SUCCESS, toDos} }
    const failure = (error:String) => { return { type: TO_DO_CONSTANTS.LIST_FAILURE, error} }

    return dispatch => {
        dispatch(request());

        toDoServices.getAll().then(
            toDos => {
                dispatch(success(toDos));
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
