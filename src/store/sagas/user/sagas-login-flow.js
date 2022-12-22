import {take, call, put, fork, cancel, cancelled} from 'redux-saga/effects'
import {LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, STOP_LOGING_PENDING} from "../../reducers/users/actions";
import * as userApi from '../../../api/user'

function* authorize(username, password) {
    try {
        const token =  yield call(userApi.login, username, password)
        yield put({type: LOGIN_SUCCESS, payload: {token}})
        yield call(userApi.saveToken, token)
    } catch (error) {
        yield put({
            type: LOGIN_ERROR, payload: {error}
        })
    } finally {
        if (yield cancelled()) {
            yield put({type: STOP_LOGING_PENDING})
        }
    }
}

export function* loginFlowSaga() {
    while ( true) {
        const {payload} = yield take(LOGIN_REQUEST)
        const task = yield fork(authorize, payload.username, payload.password)
        const action = yield take([LOGOUT, LOGIN_ERROR])
        if (action.type === LOGOUT) yield cancel(task)
        yield call(userApi.clearToken)
    }
}