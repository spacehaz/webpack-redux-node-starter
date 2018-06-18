class Cart {
  constructor (actions) {
    this.actions = actions
  }

  addItem ({ id }) {
    this.actions.dispatch({type: '*CART.ADD_ITEM', id})
  }
}

export default Cart
