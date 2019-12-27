import { combineReducers } from "redux";
import { authentication } from "./authentication"
import { alert } from "./alert"
import { toDoReducer } from "./to_do";
import { bucketReducer } from "./bucket";
import { signup } from "./signup";

const rootReducer = combineReducers({
    authentication,
    alert,
    toDoReducer,
    bucketReducer,
    signup
});
  
export default rootReducer;
