var express = require('express')
var app = express()
var config = require('../config')

app.use(express.static('app'))
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(config.port, () => {
  console.log('server is running on port: ', config.port)
})
