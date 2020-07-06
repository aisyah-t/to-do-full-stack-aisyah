import request from 'superagent'

export const GET_TODOS = 'GET_TODOS'

export const getTodos = () => {
  return {
    type: GET_TODOS
  }
}