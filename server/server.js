const express = require('express')

const server = express()
const routes = require('./routes/tasks')

server.use(express.json())
server.use(express.static('public'))
server.use('/api/v1/todoList/', routes)

module.exports = server
