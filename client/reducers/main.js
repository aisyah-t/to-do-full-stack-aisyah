
 function test (state = "normal", action) {
  switch (action.type) {
    case "TEST":
      return action.data

    default:
      return state
  }
}

export default test