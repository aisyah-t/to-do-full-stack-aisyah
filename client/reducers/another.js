function addstuff (state = "initanother", action) {
    switch (action.type) {
      case "ADDTO":
        return (action.data + "!!") 
  
      default:
        return state
    }
  }
  export default addstuff