import request from 'superagent'

const todosURL = 'http://localhost:3000/api/v1/todos/'

export function getTodosApi() {
    return request
        .get(todosURL)
        .then(response => response.body)
}

export function addTaskApi(task) {
    return request 
        .post(todosURL)
        .send(task)
        .then(res => request.body)
}

export function delTaskApi(id) {
    return request
        .delete(todosURL + id)
        .then(res => {
            return res.body
        })
}

export function updateTaskApi(task) {
    console.log(task);
    
    return request
        .patch(todosURL + task.taskId)
        .send(task)
        .then(res => {
            return res.body
        })
}