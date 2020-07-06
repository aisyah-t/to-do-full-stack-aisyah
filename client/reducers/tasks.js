const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return [...state, action.letter]

      default:
        return state
  }
}

export default reducer