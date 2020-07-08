import {UPDATE_TASK, SET_TASK} from '../actions/actions'


const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
    //   case ADD_TASK:
    //     return [...state, action.wombat]
      case SET_TASK:
        return action.tasks
    //   case DEL_TASK:
    //     return state.filter((wombat) => wombat !== action.wombat)
      default:
        return state
    }
  }

export default reducer
