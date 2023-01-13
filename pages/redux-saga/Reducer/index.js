import {combineReducers} from "redux";
import UsrReducer from "./UsrReducer";
import JobReducer from "./JobReducer";

const rootReducer = combineReducers({
    usrStated: UsrReducer,
    jobStated: JobReducer
})

export default rootReducer