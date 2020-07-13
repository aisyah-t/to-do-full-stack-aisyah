import request from 'superagent'  

const TodoListUrl = 'http://localhost:3000/api/v1/todoLists/'


export function editTaskPriority (id, priority) {
  
    return request
    .put(`${TodoListUrl}${id}`)
    .send({priority})
    .then(response => response.body)
  }