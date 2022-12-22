import {USER_POSTS_FAILED, USER_POSTS_FETCH, USER_POSTS_SUCCESS} from "./actions";

const initialState = {
    posts: [],
    error: null,
    isLoadingFetch: false
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_POSTS_FETCH: {
            return {
                ...state,
                isLoadingFetch: true,
            }
        }
        case USER_POSTS_SUCCESS: {
            const posts = action.payload.data
            return {
                ...state,
                isLoadingFetch: false,
                posts
            }
        }
        case USER_POSTS_FAILED: {
            const error = action.payload.message
            return {
                ...state,
                isLoadingFetch: false,
                error
            }
        }
        default:
            return state
    }
}