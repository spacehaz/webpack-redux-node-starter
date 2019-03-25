var path = require('path')

module.exports = app => {
  app.get(['/store', '/store/*'], (req, res) => {
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
  title: 'Vegemite Toast Extract',
  id: 1,
  weight: 220,
  qty: 10,
  type: 'spread',
  price: 900,
  imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61j9GPlAR%2BL._SL1000_.jpg'
}]
