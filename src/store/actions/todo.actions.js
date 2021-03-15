import { createAction } from 'redux-actions'

// 01 获取 todos 列表的相关指令
export const load_todo = createAction('load_todo')
export const load_todo_success = createAction('load_todo_success')

// 02 新增 todo 列表项的相关指令
export const add_todo = createAction('add_todo')
export const add_todo_success = createAction('add_todo_success')

// 03 删除 指令
export const remove_todo = createAction('remove_todo')
export const remove_todo_success = createAction('remove_todo_success')

/**
 *  01 可以发送请求获取数据    load_todo
 *  02 当异步操作完成之后还需要触发新的指令  load_todo_success
 */