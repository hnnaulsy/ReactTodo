import { createAction } from 'redux-actions'

// export const increment = () => ({ type: 'increment' })
// export const decrement = () => ({ type: 'decrement' })

export const increment_action = createAction('increment')
export const decrement_action = createAction('decrement')