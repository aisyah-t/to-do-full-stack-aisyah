const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

//Write DB functions here

function getTasks(db = connection) {
    return db('tasks').select()
}

function addTask(task, db = connection) {
    return db('tasks')
        .insert({
            task: task.name,
            priority: task.priority,
            completed: task.completed
        })
}

module.exports = {
    getTasks,
    addTask
} 
