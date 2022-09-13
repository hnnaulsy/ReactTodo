import { createAction } from 'redux-actions'

export const load_todo = createAction('load_todo')
export const load_todo_success = createAction('load_todo_success')

export const add_todo = createAction('add_todo')
export const add_todo_success = createAction('add_todo_success')

export const remove_todo = createAction('remove_todo')
export const remove_todo_success = createAction('remove_todo_success')

export const modify_todo = createAction('modify_todo')
export const modify_todo_success = createAction('modify_todo_success')

export const modify_todo_filter = createAction('modify_todo_filter')

