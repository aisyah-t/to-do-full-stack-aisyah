import { ADD_TO_DO } from '../actions'
import { INIT_TO_DOS } from '../actions'

const initialState = []


function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_TO_DOS:
      return action.toDos
    case ADD_TO_DO:
      return [...state, action]
    default:
      return state
  }
}

export default reducer