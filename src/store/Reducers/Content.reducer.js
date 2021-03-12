import { ADDCONTENT } from '../Action_types/content_action_type'
const initialState = {
  content: ['默认数据']
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDCONTENT:
      return {
        content: [
          ...state.content,
          action.payLoad
        ]
      }
    default:
      return state
  }
}

export default reducer