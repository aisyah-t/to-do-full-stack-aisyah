const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])


module.exports ={

    getTask,
    addTask,
    deleteTask,
    // updateTask,


}

function getTask(db=connection){

    return db('TodoList').select()

}

function addTask(task, db=connection){

    return db('TodoList')
    .insert({
     
        task: task.Tasks,
        Description:task.Description,
        Priority: task.Priority,
        Completed: task.Completed
    })
}

function deleteTask(id, db=connection){
    return db('TodoList').where('id', id).delete()
}

// function updateTask(id, db=connection){

//     returndb('TodoList')
// }



