import { handleActions as createReducer } from 'redux-actions'
import { increment_action, decrement_action } from '../Actions/counter.actions'

const initialState = {
  count: 10
}

const counterReducer = createReducer({
  [increment_action]: (state, action) => ({ count: state.count + 1 }),
  [decrement_action]: (state, action) => ({ count: state.count - 1 }),
}, initialState)

export default counterReducer

