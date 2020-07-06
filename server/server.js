const express = require('express')

const server = express()

const routes = require('./routes/routes.js')

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1/toDos', routes)

module.exports = server
