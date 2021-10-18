import { all, fork } from "redux-saga/effects"
import test from "pages/SagaStructureComponent/sagas"

const allSagas = [test]

export default function* rootSaga() {
  yield all(allSagas.map(fork))
}
