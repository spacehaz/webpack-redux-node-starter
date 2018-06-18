import cart from './cart'
import products from './products'

function * saga () {
  yield * cart()
  yield * products()
}

export default saga
