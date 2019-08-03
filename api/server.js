const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bcrypt = require('bcryptjs')

const usersRouter = require('../users/users-router.js')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/users', usersRouter )

module.exports = server