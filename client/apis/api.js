import request from 'superagent'

const toDoUrl = 'http://localhost:3000/api/v1/toDos/'

export function getToDos() {
  return request
    .get(toDoUrl)
    .then(response => response.body)
}

export function addToDo(newToDo) {
  return request
    .post(toDoUrl)
    .send(newToDo)
    .then(response => response.body)
}

export function updateToDo(ToDo) {
  return request
    .put(toDoUrl + '/' + ToDo.id)
    .send(ToDo)
    .then(response => response.body)
}

export function deleteToDo(id) {
  return request
    .del(toDoUrl + '/' + id)
    .send(id)
    .then(response => response.body)
}