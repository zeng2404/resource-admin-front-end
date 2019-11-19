import { fork, all}from 'redux-saga/effects'

import globalSaga from './globalSaga'
import bookmarkSaga from "./bookmarkSaga";
import tagSaga from "./tagSaga";

const sagas = []

globalSaga.map((value, index) => {
    sagas.push(fork(value));
})

bookmarkSaga.map((value, index) => {
    sagas.push(fork(value));
})

tagSaga.map((value, index) => {
    sagas.push(fork(value));
})

function* rootSaga() {
    yield all(sagas)
}

export default rootSaga;
