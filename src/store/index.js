import {all, spawn} from 'redux-saga/effects'
import {userPostsFetchRequestedWatcherSaga} from "./reducers/posts/sagas-with-action-channel";
import {loginFlowSaga} from "./sagas/user/sagas-login-flow";

export function* rootSaga() {
    const sagas = [userPostsFetchRequestedWatcherSaga, loginFlowSaga]

    yield all(
        sagas.map((saga) => spawn(saga))
    )
}