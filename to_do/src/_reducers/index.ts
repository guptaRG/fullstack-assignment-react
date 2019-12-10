import { combineReducers } from "redux";
import { authentication } from "./authentication"
import { alert } from "./alert"
import { toDoReducer } from "./to_do";

const rootReducer = combineReducers({
    authentication,
    alert,
    toDoReducer
});
  
export default rootReducer;
