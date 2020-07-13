import request from 'superagent'

const taskUrl = '/api/'

export function getTasks() {
    return request
        .get(taskUrl)
        .then(response => {
            return response.body
        })
}

export function addTask(task) {
    return request
        .post(taskUrl)
        .send(task)
        .then(request => {
            return request.body
        })
}

export function deleteTask(taskId) {
    return request
        .del(taskUrl + taskId)
        .then(response => {
            return response.body
        })
}

export function getTask(taskId) {
    return request
        .get(taskUrl + taskId)
        .then(response => {
            return response.body
        })
}

export function updateTask(taskId, task) {
    return request
        .patch(taskUrl + taskId)
        .send(task)
        .then(response => {
            return response.body
        })
}