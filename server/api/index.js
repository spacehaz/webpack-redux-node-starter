const db = require('../db')

module.exports = app => {
  app.get('/api/v1/user', (req, res) => {
    res.json({'foo': 'bar'})
  })

  app.get('/api/v1/user/:name', (req, res) => {
    console.log(db.get())
  })
}
