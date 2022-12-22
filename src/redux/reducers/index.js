import {combineReducers} from "redux";
import {postsReducer} from "./posts/postReducer";
import {userReducer} from "./users/userReducer";

export const rootReducer = combineReducers({
    post: postsReducer,
    user: userReducer
})