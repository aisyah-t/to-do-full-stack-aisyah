import {SET_LOADING} from '../actions/actions'

const initialState = false

const waitReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.loading
    default:
      return state
  }
}

export default waitReducer