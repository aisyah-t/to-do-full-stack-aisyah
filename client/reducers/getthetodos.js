
function addtodos (state = [], action) {
    switch (action.type) {
      case "GETTASKS":
        return (action.data) 
      case "ADDTODO":
        return ([...state, action.data])
      case "DELETETASK":
        return state.filter(elem => elem.name != action.data);
      case "EDITTODO":
   
        
        return state.map(elem =>  {
       
          if (elem.id == action.data.id) {
           
            return action.data
          }
          else return elem
          
        } );
      default:
        return state
    }
  }
  export default addtodos