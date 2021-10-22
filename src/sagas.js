import { all, fork } from "redux-saga/effects"
import test from "./pages/SagaStructureComponent/sagas"
import application from "./pages/Application/sagas"

const allSagas = [test, application]

export default function* rootSaga() {
  yield all(allSagas.map(fork))
}
