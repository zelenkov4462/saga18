import {takeEvery, take, call, put} from 'redux-saga/effects'
import {USER_POSTS_FAILED, USER_POSTS_FETCH, USER_POSTS_SUCCESS} from "../../reducers/posts/actions";
import {getUserPosts} from "../../../api/posts";

function* fetchUserPostsWorker(action) {
   try {
       const userPosts = yield call(getUserPosts, action.payload.userId)
       yield put ({
           type: USER_POSTS_SUCCESS, payload: {
               data: userPosts
           }
       })
   } catch (error) {
       yield put ({
           type: USER_POSTS_FAILED, payload: {
               message: error.message
           }
       })
   }
}

export function* fetchUserPostsWatcher() {
    yield takeEvery(USER_POSTS_FETCH, fetchUserPostsWorker)
}