import {all, spawn} from 'redux-saga/effects'
import {fetchUserPostsWatcher} from "./posts";
import {userLoginWatcher} from "./user";

export function* rootSaga() {
    const sagas = [fetchUserPostsWatcher, userLoginWatcher]

    yield all(sagas.map(saga => spawn(saga)))
}