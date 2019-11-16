import { fork, all}from 'redux-saga/effects'

import globalSaga from './globalSaga'

const sagas = []

globalSaga.map((value, index) => {
    sagas.push(fork(value))
})

function* rootSaga() {
    yield all(sagas)
}

export default rootSaga;
