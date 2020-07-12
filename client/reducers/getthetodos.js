
function addtodos (state = [], action) {
    switch (action.type) {
      case "GETTASKS":
        return (action.data) 
      case "ADDTODO":
        return ([...state, action.data])
      case "DELETETASK":
            return state.filter(elem => elem.name != action.data);
      default:
        return state
    }
  }
  export default addtodos