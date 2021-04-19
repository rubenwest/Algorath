const express = require('express');
const api = express.Router()

const { addUser, getUsers } = require('../controllers/userController')

api.post('/users', addUser )
api.get('/users', getUsers)



module.exports = api