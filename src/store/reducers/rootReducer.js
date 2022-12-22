import {combineReducers} from "redux";
import {postReducer} from "./posts/reducer";
import {loginFlowReducer} from "./users/login-flow-reducer";

export const rootReducer = combineReducers({
    post: postReducer,
    user: loginFlowReducer
})