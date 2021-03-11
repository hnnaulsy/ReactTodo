const initialState = {
  count: 6
}


export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      }
    case 'increment_n':
      return {
        count: state.count + action.payload
      }
    default:
      return state
  }
}