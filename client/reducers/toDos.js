import { ADD_TO_DO } from '../actions'
import { INIT_TO_DOS } from '../actions'
import { DEL_TO_DO } from '../actions'
import { UPDATE_TO_DO } from '../actions'

const initialState = []

function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_TO_DOS:
      return action.toDos
    case ADD_TO_DO:
      return [...state, action]
    case DEL_TO_DO:
      return state.filter((toDo) => toDo.id !== action.id)
    case UPDATE_TO_DO:
      return state.map((toDo) => {
        return toDo.id === action.id
        ? action
        : toDo
      })
    default:
      return state
  }
}

export default reducer