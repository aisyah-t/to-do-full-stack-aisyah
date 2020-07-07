import { getTasks } from "../apis/api";

export const GET_TODOS = 'GET_TODOS'

//Action Creator
export const getTodos = (tasksArray) => {
  //returns an object from all the way via the API, the routes, the db, back to here
  return {
    type: GET_TODOS,
    tasks: tasksArray
  }
}

//this is our thunk - a function that returns another function (here: dispatch). it makes a call to call the API to get our tasks from the back-end
export function fetchTodos() {
  return (dispatch) => {
    getTasks()
    .then(tasks => {
      dispatch(getTodos(tasks))
      console.log(tasks)
    })
  }
}