import request from 'superagent'

const todosURL = 'http://localhost:3000/api/v1/todos/'

export function getTodosApi() {
    return request
        .get(todosURL)
        .then(response => response.body)
}

export function addTaskApi(task) {
    return request 
        .get(todosURL)
        .send(task)
        .then(response => request.body)
}