const express = require('express');
const bodyParser = require('body-parser')
const userRoutes = require ('./routes/user')
const cors = require('cors');
const app = express()

app.use(cors());
app.use(bodyParser());
app.use('/',userRoutes)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
module.exports = app