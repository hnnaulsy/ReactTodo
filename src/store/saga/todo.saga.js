import axios from 'axios'
import {takeEvery,put} from 'redux-saga/effects'
import { load_todo,load_todo_success } from '../actions/todo.actions'

function* loade_todo_data(){
  let todoData = yield axios.get('http://localhost:3005/api/todos').then(res=>res.data)
  yield put(load_todo_success(todoData))
}

export default function* todoSaga(){
  yield takeEvery(load_todo,loade_todo_data)
}