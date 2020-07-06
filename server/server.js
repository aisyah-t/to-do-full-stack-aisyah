const express = require('express')

const server = express()

const tasks = require('./routes/tasks')

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1/tasks', tasks)

module.exports = server
