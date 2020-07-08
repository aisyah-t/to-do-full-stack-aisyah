import { FILTER_BY } from '../actions/index'


// const initialState = []

const initialState = {completed: 0}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FILTER_BY:
      return action.filter
    default: 
      return state
  }
}

export default reducer