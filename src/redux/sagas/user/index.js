import {takeEvery, call, cancelled, put, take, fork, cancel} from 'redux-saga/effects';
import {LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, STOP_IS_LOADING} from "../../reducers/users/actions";
import {clearToken, requestLogin, setToken} from "../../../api/user";

function* loginWorker(username, password) {
    try {
        const token = yield call(requestLogin, username, password )
        yield put({type: LOGIN_SUCCESS, payload: {token}})
        yield call(setToken, token)
    } catch (error) {
        yield put({type: LOGIN_FAILED, payload: {error}})
    } finally {
        if (yield cancelled()) {
            yield put({type: STOP_IS_LOADING})
        }
    }
}

// function* loginWorker(action) {
//     try {
//         const token = yield call(requestLogin, action.payload.username, action.payload.password )
//         yield put({type: LOGIN_SUCCESS, payload: {token}})
//         yield call(setToken, token)
//
//     } catch (error) {
//         yield put({type: LOGIN_FAILED, payload: {error}})
//     }
// }

export function* userLoginWatcher() {
    while (true) {
        // yield takeEvery(LOGIN_REQUEST, loginWorker )
        const {payload} = yield take(LOGIN_REQUEST)
       const task =  yield fork(loginWorker, payload.username, payload.password)
        const action = yield take([LOGOUT, LOGIN_FAILED])
        if (action.type === LOGOUT) yield cancel(task)
        yield call(clearToken)
    }

}