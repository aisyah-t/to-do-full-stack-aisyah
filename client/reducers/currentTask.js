import { CURRENT_TASK } from '../actions/index'


// const initialState = []

const initialState = {}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CURRENT_TASK:
      return action.task
    default: 
      return state
  }
}

export default reducer