import { combineReducers } from "redux";
import { authentication } from "./authentication"
import { alert } from "./alert"
import { toDoReducer } from "./to_do";
import { bucketReducer } from "./bucket";

const rootReducer = combineReducers({
    authentication,
    alert,
    toDoReducer,
    bucketReducer
});
  
export default rootReducer;
