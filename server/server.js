const express = require('express')

const server = express()
const taskRoutes = require('./routes/tasks')

server.use(express.json())
server.use(express.static('public'))

server.use('/tasks', taskRoutes)

module.exports = server
