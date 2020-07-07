const express = require('express')

const server = express()
const ToDoItems = require ('./routes/ToDoItems')

server.use(express.json())
server.use(express.static('public'))

server.use('/ToDo', ToDoItems)

module.exports = server
