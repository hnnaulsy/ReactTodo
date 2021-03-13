import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { load_todo_success, load_todo } from '../actions/todo.actions'

// 实现 load_todo_data 获取数据同时传递新指令
function* load_todo_data() {
  let todoData = yield axios.get('http://localhost:3005/api/todos').then(res => res.data)
  console.log(todoData)
  yield put(load_todo_success(todoData))
}

export default function* todoSaga() {
  yield takeEvery(load_todo, load_todo_data)
}

/**
 * 01 完成异步操作
 *
 * 02 重新发送新的指令
 */