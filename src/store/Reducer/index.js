import personReducer from './person.reducer'
import { combineReducers } from 'redux'

export default combineReducers({
  personReducer: personReducer
})