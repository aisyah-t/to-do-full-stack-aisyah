import { CHANGE_VIEW } from '../actions/index'


// const initialState = []

const initialState = {completed: 0}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_VIEW:
      return action.view
    default: 
      return state
  }
}

export default reducer