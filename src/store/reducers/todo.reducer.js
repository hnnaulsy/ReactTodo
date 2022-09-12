import {handleActions as  createReducer} from 'redux-actions'
import { load_todo_success } from '../actions/todo.actions'

const initalState = {
  todos: []
}

export default createReducer({
  [load_todo_success]: (state,action) => ({
    todos: action.payload
  })
},initalState)