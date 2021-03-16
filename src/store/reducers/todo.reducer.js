import { handleActions as createReducer } from 'redux-actions'
import { modify_todo_name_success, modify_todo_edit_success, clear_todo_completed_success, load_todo_success, add_todo_success, remove_todo_success, modify_todo_success, modify_todo_filter } from '../actions/todo.actions'
import { fromJS, setIn, mergeDeep, removeIn, getIn, updateIn } from 'immutable'

const initialState = fromJS({
  todos: [],
  filter: 'all'
})

// 1 展示任务列表
const load_todo_action = (state, action) => {
  // 01 第一个参数用于表示我们当前想要操作的数据是谁
  // 02 第二个参数用于表示我们当前想要操作的是这个数据中的哪一个属性
  // 03 第三个参数用于示我们将这个属性的值设置为什么
  return setIn(state, ['todos'], action.payload)
}

// 2 添加任务
const add_todo_action = (state, action) => {
  // mergeDeep 合并数据
  // 第二个参数，是要合并的属性及被合并的值 
  return mergeDeep(state, { todos: [action.payload] })
}

// 3 删除任务
const remove_todo_action = (state, action) => {
  let index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload)
  return removeIn(state, ['todos', index])
}
// 4 切换任务状态
const modify_todo_action = (state, action) => {
  let index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload.id)
  // 第二个参数是要更新的属性
  // 第三个参数是我们要更新成的目标值
  return updateIn(state, ['todos', index], () => action.payload)
}

// 5 过滤不同状态任务
const filter_todo_action = (state, action) => {
  return setIn(state, ['filter'], action.payload)
}

// 6 清除已完成
const clear_completed_action = (state, action) => {
  let todos = getIn(state, ['todos']).filter(todo => !todo.isCompleted)
  return setIn(state, ['todos'], todos)
}

// 07 编辑任务
const edit_todo_action = (state, action) => {
  // 利用id 找到需要被操作的任务项，然后设置 isEditing 状态，显示具体的样式
  let todos = JSON.parse(JSON.stringify(state.todos))
  let index = state.todos.findIndex(todo => todo.id === action.payload.id)
  todos[index].isEditing = action.payload.isEditing
  return { ...state, todos }
}

// 08 修改任务名称
const rename_todo_action = (state, action) => {
  let todos = JSON.parse(JSON.stringify(state.todos))
  let index = state.todos.findIndex(todo => todo.id === action.payload.id)
  todos[index].taskName = action.payload.taskName
  return { ...state, todos }
}

export default createReducer({
  // 展示任务
  [load_todo_success]: load_todo_action,
  // 新增任务
  [add_todo_success]: add_todo_action,
  // 删除任务
  [remove_todo_success]: remove_todo_action,
  // 切换任务状态
  [modify_todo_success]: modify_todo_action,
  // 晒选不同状态任务
  [modify_todo_filter]: filter_todo_action,
  // 清除已完成任务
  [clear_todo_completed_success]: clear_completed_action,
  // 编辑任务
  [modify_todo_edit_success]: edit_todo_action,
  // 重命名任务
  [modify_todo_name_success]: rename_todo_action
}, initialState)
