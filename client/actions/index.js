import { getTasks } from "../apis/api";

export const GET_TODOS = 'GET_TODOS'

export const getTodos = (tasksArray) => {
  return {
    type: GET_TODOS,
    tasks: tasksArray
  }
}

export function fetchTodos() {
  return (dispatch) => {
    getTasks()
    .then(tasks => {
      dispatch(getTodos(tasks))
      console.log(tasks)
    })
  }
}