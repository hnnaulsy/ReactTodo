import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'


function* loadPerson() {
  let persons = yield axios.get('http://localhost:3005/api/getUsers').then(res => res.data)
  yield put({ type: 'load_person_success', payLoad: persons })
}

export default function* personSaga() {
  yield takeEvery('load_person', loadPerson)
}