import { handleActions as createReducer } from 'redux-actions'
import { load_todo_success } from '../actions/todo.actions'

const initialState = {
  todos: []
}

export default createReducer({
  [load_todo_success]: (state, action) => ({
    todos: action.payload
  })
}, initialState)

/**
 * 接收到指令之后对数据进行相应的处理
 *
 */