module.exports = app => {
  app.get('/api/v1/user', (req, res) => {
    res.json({'foo': 'bar'})
  })
}
