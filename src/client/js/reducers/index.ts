import {combineReducers} from "redux";

export interface IAppState {
    userRegister: any;
}

export default combineReducers({
    userRegister: null
})