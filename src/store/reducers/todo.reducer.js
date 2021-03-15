import { handleActions as createReducer } from 'redux-actions'
import { load_todo_success, add_todo_success, remove_todo_success, modify_todo_success } from '../actions/todo.actions'

const initialState = {
  todos: []
}

export default createReducer({
  [load_todo_success]: (state, action) => ({ todos: action.payload }),
  [add_todo_success]: (state, action) => ({ todos: [...state.todos, action.payload] }),
  [remove_todo_success]: (state, action) => {
    // 需要获取被删除项的 id  
    let id = action.payload

    let index = state.todos.findIndex(todo => todo.id === id)
    let todos = JSON.parse(JSON.stringify(state.todos))
    todos.splice(index, 1)
    return { todos }
  },
  [modify_todo_success]: (state, action) => {
    let params = action.payload

    let index = state.todos.findIndex(todo => todo.id === params.id)

    let todos = JSON.parse(JSON.stringify(state.todos))

    todos[index].isCompleted = params.isCompleted
    return { todos }
  }
}, initialState)

/**
 * 接收到指令之后对数据进行相应的处理
 *
 */