import {LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, STOP_IS_LOADING} from "./actions";

const initialState = {
    error: null,
    token: null,
    isLoadingLogin: false
}

export const userReducer = (state= initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                error: null,
                isLoadingLogin: true
            }
        }
        case LOGIN_SUCCESS: {
            const token = action.payload.token
            return {
                ...state,
                isLoadingLogin: false,
                token
            }
        }
        case LOGIN_FAILED: {
            const error = action.payload.error
            return {
                ...state,
                isLoadingLogin: false,
                error
            }
        }
        case LOGOUT: {
            return {
                ...state,
                error: null,
                token: null
            }
        }
        case STOP_IS_LOADING: {
            return {
                ...state,
                isLoadingLogin: false
            }
        }
        default:
            return state
    }
}