var path = require('path')

module.exports = app => {
  app.get(['/spa', '/spa/*'], (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../app') })
  })

  app.get('/api', (req, res) => {
    console.log('hello api!')
  })

  app.get('/api/products', (req, res) => {
    res.json(PRODUCTS)
  })
}

const PRODUCTS = [{
  title: 'Vegemite',
  id: 1,
  weight: 220,
  qty: 10,
  type: 'spread'
}]
