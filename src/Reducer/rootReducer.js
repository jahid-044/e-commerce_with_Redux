import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import shopReducer from "./shopReducer";
const rootReducer = combineReducers({
    static: shopReducer,
    dynamic: fetchReducer
})
export default rootReducer