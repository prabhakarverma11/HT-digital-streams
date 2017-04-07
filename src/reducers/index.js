import {combineReducers} from "redux";
import user from "./userReducer";
import authenticate from "./authReducer";

export default combineReducers({
    user,
    authenticate,
});