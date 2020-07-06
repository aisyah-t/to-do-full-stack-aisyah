const express = require('express')
const db = require('./db/connection')

const server = express()

const taskRoutes = require('./routes/routes')

server.use(express.json())
server.use(express.static('public'))

server.use('/tasks', taskRoutes)

module.exports = server
