import {handleActions as  createReducer} from 'redux-actions'
import { load_todo_success,add_todo_success,remove_todo_success,modify_todo_success,modify_todo_filter,clear_todo_completed_success,modify_todo_edit_success,modify_todo_name_success } from '../actions/todo.actions'
import {fromJS,setIn,mergeDeep,removeIn,getIn,updateIn, set} from 'immutable'

const initalState = fromJS({
  todos: [],
  filter: 'all'
})

const load_todo_action = (state,action) => {
  return setIn(state,['todos'],action.payload)
}
const add_todo_action = (state,action) => {
  return mergeDeep(state,{todos:[action.payload]})
}
const remove_todo_action = (state,action) => {
  let index = getIn(state,['todos']).findIndex(todo=>todo.id===action.payload)
  return removeIn(state,['todos',index])
}
const modify_todo_action = (state,action) => {
  let index = getIn(state,['todos']).findIndex(todo=>todo.id===action.payload.id)
  return updateIn(state,['todos',index],()=>action.payload)
}
const filter_todo_action = (state,action) => {
  return setIn(state,['filter'],action.payload)
}
const clear_completed_action = (state,action) => {
  let todos = getIn(state,['todos']).filter(todo=>!todo.isCompleted)
  return setIn(state,['todos'],todos)
}
const edit_todo_action = (state,action) => {
  let todos = JSON.parse(JSON.stringify(state.todos))
  let index = state.todos.findIndex(todo=>todo.id===action.payload.id)
  todos[index].isEditing = action.payload.isEditing
  return {...state,todos}
}
const rename_todo_action = (state,action) => {
  let todos = JSON.parse(JSON.stringify(state.todos))
  let index = state.todos.findIndex(todo=>todo.id===action.payload.id)
  todos[index].taskName = action.payload.taskName
  return {...state,todos}
}

export default createReducer({
  [load_todo_success]: load_todo_action,
  [add_todo_success]: add_todo_action,
  [remove_todo_success]: remove_todo_action,
  [modify_todo_success]: modify_todo_action,
  [modify_todo_filter]: filter_todo_action,
  [clear_todo_completed_success]: clear_completed_action,
  [modify_todo_edit_success]: edit_todo_action,
  [modify_todo_name_success]: rename_todo_action
},initalState)