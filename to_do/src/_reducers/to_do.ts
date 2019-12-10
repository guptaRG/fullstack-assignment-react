import { ToDoState, ToDoAction } from "../types";
import { TO_DO_CONSTANTS } from "../constants";

const initialState:ToDoState = {
    toDos: []
}

export const toDoReducer = (state:ToDoState = initialState, action:ToDoAction): ToDoState => {
    switch (action.type) {
        case TO_DO_CONSTANTS.LIST_REQUEST:
            return state;
        case TO_DO_CONSTANTS.LIST_SUCCESS:
            return {
                toDos: action.toDos
            };
        case TO_DO_CONSTANTS.LIST_FAILURE:
            return state;
        default:
            return state;
    }
}