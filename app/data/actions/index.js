import User from './user'
import Routing from './routing'
import Cart from './cart'
import Products from './products'

class Actions {
  constructor (env) {
    this.dispatch = (env.props || env).dispatch
    this.history = (env.props || env).history

    this.routing = new Routing(this)
    this.user = new User(this)
    this.cart = new Cart(this)
    this.products = new Products(this)
  }
}

export default Actions
