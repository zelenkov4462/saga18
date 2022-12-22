import {takeEvery, call, put, take} from 'redux-saga/effects';
import {LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from "../../reducers/users/actions";
import {clearToken, requestLogin, setToken} from "../../../api/users";

// function* loginWorker(username, password) {
//     try {
//         const token = yield call(requestLogin, username, password )
//         yield put({type: LOGIN_SUCCESS, payload: {token}})
//     } catch (error) {
//         yield put({type: LOGIN_FAILED, payload: {error}})
//     }
// }

function* loginWorker(action) {
    try {
        const token = yield call(requestLogin, action.payload.username, action.payload.password )
        yield put({type: LOGIN_SUCCESS, payload: {token}})
        yield call(setToken, token)

    } catch (error) {
        yield put({type: LOGIN_FAILED, payload: {error}})
    }
}

export function* userLoginWatcher() {
    yield takeEvery(LOGIN_REQUEST, loginWorker )
    // const {payload} = yield take(LOGIN_REQUEST)
    // yield call(loginWorker, payload.username, payload.password)
    yield take(LOGOUT)
    yield call(clearToken)

}