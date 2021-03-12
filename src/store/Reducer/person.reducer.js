const initialState = {
  person: [
    {
      id: '001',
      name: 'syy',
      age: 20,
      sex: '男'
    }
  ]
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'loadPersonSuccess':
      return {
        person: [
          ...state.person,
          ...action.payLoad
        ]
      }

    default:
      return state
  }
}

export default reducer
