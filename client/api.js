import request from 'superagent'

export function getToDoList () {
    return request
    .get('http://localhost:3000/ToDo')
    .then(res => res.body)
}