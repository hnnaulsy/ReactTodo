import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { clear_todo_completed, clear_todo_completed_success, load_todo_success, load_todo, add_todo, add_todo_success, remove_todo, remove_todo_success, modify_todo_success, modify_todo } from '../actions/todo.actions'

// 实现 load_todo_data 获取数据同时传递新指令
function* load_todo_data() {
  let todoData = yield axios.get('http://localhost:3005/api/todos').then(res => res.data)
  // console.log(todoData)
  yield put(load_todo_success(todoData))
}

// 实现 add_todo_data 方法
function* add_todo_data(action) {
  // 1 完成异步操作 
  let taskInfo = yield axios.post('http://localhost:3005/api/todos', { taskName: action.payload }).then(res => res.data)
  console.log(taskInfo)
  // 2 重新发送指令
  yield put(add_todo_success(taskInfo.task))
}

// 实现 remove_todo_data
function* remove_todo_data(action) {
  // 此时将 id 利用相应的接口传递给后端执行具体的删除操作   
  let res = yield axios.delete('http://localhost:3005/api/todos', {
    params: {
      id: action.payload
    }
  }).then(res => res.data)
  console.log(res)
  // 重新发送指令
  yield put(remove_todo_success(res.tasks.id))
}

// 实现 modify_todo
function* modify_todo_data(action) {
  let params = action.payload

  yield axios.put('http://localhost:3005/api/todos/isCompleted', params).then(res => res.data)

  yield put(modify_todo_success(params))
}

// 实现 clear_todo_data
function* clear_todo_data() {
  // 利用 axios 删除后端数据
  yield axios.delete('http://localhost:3005/api/todos/clearCompleted')
  yield put(clear_todo_completed_success())
}

export default function* todoSaga() {
  yield takeEvery(load_todo, load_todo_data)
  yield takeEvery(add_todo, add_todo_data)
  yield takeEvery(remove_todo, remove_todo_data)
  yield takeEvery(modify_todo, modify_todo_data)
  yield takeEvery(clear_todo_completed, clear_todo_data)
}

/**
 * 01 完成异步操作
 *
 * 02 重新发送新的指令
 */