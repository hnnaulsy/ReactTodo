import {handleActions as  createReducer} from 'redux-actions'
import { load_todo_success,add_todo_success,remove_todo_success,modify_todo_success,modify_todo_filter } from '../actions/todo.actions'

const initalState = {
  todos: [],
  filter: 'all'
}

export default createReducer({
  [load_todo_success]: (state,action) => ({...state,todos: action.payload}),
  [add_todo_success]: (state,action) => ({...state,todos: [...state.todos,action.payload]}),
  [remove_todo_success]: (state,action) => {
    let id = action.payload
    let index = state.todos.findIndex(todo=>todo.id===id)
    let todos = JSON.parse(JSON.stringify(state.todos))
    todos.splice(index,1)
    return {...state,todos}
  },
  [modify_todo_success]: (state,action) => {
    let params = action.payload
    let index = state.todos.findIndex(todo=>todo.id===params.id)
    let todos = JSON.parse(JSON.stringify(state.todos))
    todos[index].isCompleted = params.isCompleted
    return {...state,todos}
  },
  [modify_todo_filter]: (state,action) => {
    return {
      ...state,
      filter: action.payload
    }
  }
  
},initalState)