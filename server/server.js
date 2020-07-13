const express = require('express')

const animalRoutes = require('./routes/animals')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/animals', animalRoutes)

module.exports = server
