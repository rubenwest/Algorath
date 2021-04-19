require('dotenv').config()
const app = require('./app')
require('./db/mongodb')
const { appConfig } = require('./config')
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true  }));
// parse application/json
app.use(bodyParser.json());

app.listen(appConfig.port, () => console.log(`Listen on ${appConfig.port}`))