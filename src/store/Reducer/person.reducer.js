const initialState = {
  person: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'load_person_success':
      return {
        person: action.payLoad
      }
    default:
      return state
  }
}

export default reducer
