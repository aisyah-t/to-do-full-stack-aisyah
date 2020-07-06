import {ADD_TO_DO} from '../actions'
const initialState = []

function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_DO:
      return [...state, action]
    default:
      return state
  }
}

export default reducer