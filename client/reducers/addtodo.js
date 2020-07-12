
function addtodos (state = [], action) {
    switch (action.type) {
      case "ADDTODO":
        return (action.data) 
      default:
        return state
    }
  }
  export default addtodos