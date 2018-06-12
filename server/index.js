const express = require('express')
const app = express()
const config = require('../config')
const routes = require('./routes')
const api = require('./api')
const db = require('./db')

app.use(express.static('app'))
routes(app)
api(app)

app.listen(config.port, () => {
  console.log('server is running on port: ', config.port)
})
