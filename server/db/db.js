const connection = require('./connection')

function getToDos(db = connection) {
    return db('toDos').select()
}

function addToDo(toDo, db = connection) {
    return db('toDos').insert(toDo)
}

function updateToDo(toDo, db = connection) {
    return db('toDos').update(toDo).where('id', toDo.id)
}

function deleteToDo(id, db = connection) {
    return db('toDos').delete().where('id', id)
}

module.exports = {
    getToDos,
    addToDo,
    updateToDo,
    deleteToDo,
}