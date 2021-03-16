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

// 04 更新指令
export const modify_todo = createAction('modify_todo')
export const modify_todo_success = createAction('modify_todo_success')

// 05 筛选指令
export const modify_todo_filter = createAction('modify_todo_filter')

// 06 清除已完成任务
export const clear_todo_completed = createAction('clear_todo_completed')
export const clear_todo_completed_success = createAction('clear_todo_completed_success')

// 07 任务名称修改指令
export const modify_todo_edit = createAction('modify_todo_edit')
export const modify_todo_edit_success = createAction('modify_todo_edit_success')

// 08 任务名称确认指令
export const modify_todo_name = createAction('modify_todo_name')
export const modify_todo_name_success = createAction('modify_todo_name_success')

/**
 *  01 可以发送请求获取数据    load_todo
 *  02 当异步操作完成之后还需要触发新的指令  load_todo_success
 */