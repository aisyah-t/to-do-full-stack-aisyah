import request from 'superagent'

const mainToDoRoute = 'http://localhost:3000/ToDo'


export function getTasks () {
    return request
    .get(mainToDoRoute)
    .then(res => res.body)
}

export function apiAddTask (task) {
    return request
    .post (mainToDoRoute)
    .send (task)
    .then (res => res.body )
}

export function deleteTaskApiFunction (id) {
    console.log('in api client' , id)
    return request
    .delete (mainToDoRoute)
    .send ({id})
    .then (res => res.body )
}
