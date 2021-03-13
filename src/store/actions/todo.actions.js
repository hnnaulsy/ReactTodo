import { createAction } from 'redux-actions'

export const load_todo = createAction('load_todo')
export const load_todo_success = createAction('load_todo_success')

/**
 *  01 可以发送请求获取数据    load_todo
 *  02 当异步操作完成之后还需要触发新的指令  load_todo_success
 */