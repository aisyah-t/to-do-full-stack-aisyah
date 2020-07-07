import { ADD_TO_DO } from '../actions'
import { INIT_TO_DOS } from '../actions'

import { SHOW_FORM } from '../actions'
import { HIDE_FORM } from '../actions'

const initialState = false


function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_FORM:
      return true
    case HIDE_FORM:
      return false
    default:
      return state
  }
}

export default reducer