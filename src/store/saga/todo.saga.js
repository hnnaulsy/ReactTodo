import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { modify_todo_name, modify_todo_name_success, modify_todo_edit, modify_todo_edit_success, clear_todo_completed, clear_todo_completed_success, load_todo_success, load_todo, add_todo, add_todo_success, remove_todo, remove_todo_success, modify_todo_success, modify_todo } from '../actions/todo.actions'

// 实现 load_todo_data 获取数据同时传递新指令
function* load_todo_data() {
  let todoData = yield axios.get('/api/todos')
  // console.log(todoData)
  yield put(load_todo_success(todoData))
}

// 实现 add_todo_data 方法
function* add_todo_data(action) {
  // 1 完成异步操作 
  let taskInfo = yield axios.post('/api/todos', { taskName: action.payload })
  console.log(taskInfo)
  // 2 重新发送指令
  yield put(add_todo_success(taskInfo.task))
}

// 实现 remove_todo_data
function* remove_todo_data(action) {
  // 此时将 id 利用相应的接口传递给后端执行具体的删除操作   
  let res = yield axios.delete('/api/todos', {
    params: {
      id: action.payload
    }
  })
  console.log(res)
  // 重新发送指令
  yield put(remove_todo_success(res.tasks.id))
}

// 实现 modify_todo
function* modify_todo_data(action) {
  let params = action.payload

  yield axios.put('/api/todos/isCompleted', params)

  yield put(modify_todo_success(params))
}

// 实现 clear_todo_data
function* clear_todo_data() {
  // 利用 axios 删除后端数据
  yield axios.delete('/api/todos/clearCompleted')
  yield put(clear_todo_completed_success())
}

// 实现 modify_todo_edit_data 
function* modify_todo_edit_data(action) {
  yield axios.put("/api/todos/isEditing", action.payload)
  yield put(modify_todo_edit_success(action.payload))
}

// 实现 modify_todo_name_data
function* modify_todo_name_data(action) {
  yield axios.put("/api/todos/", action.payload)
  yield put(modify_todo_name_success(action.payload))
}

export default function* todoSaga() {
  yield takeEvery(load_todo, load_todo_data)
  yield takeEvery(add_todo, add_todo_data)
  yield takeEvery(remove_todo, remove_todo_data)
  yield takeEvery(modify_todo, modify_todo_data)
  yield takeEvery(clear_todo_completed, clear_todo_data)
  yield takeEvery(modify_todo_edit, modify_todo_edit_data)
  yield takeEvery(modify_todo_name, modify_todo_name_data)
}

/**
 * 01 完成异步操作
 *
 * 02 重新发送新的指令
 */