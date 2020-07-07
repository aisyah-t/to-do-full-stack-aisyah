const express = require('express')

const tasks = require('./routes/tasks')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/tasks', tasks)

module.exports = server
