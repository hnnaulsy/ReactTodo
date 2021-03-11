import { INCREMENT, INCREMENT_N, DECREMENT } from '../Action_types/counter.actions.types'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const increment_n = (payload) => ({ type: INCREMENT_N, payload })