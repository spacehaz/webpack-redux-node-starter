class Cart {
  constructor (actions) {
    this.actions = actions
  }

  addItem ({ id }) {
    this.actions.dispatch({type: '*CART.ADD_ITEM', id})
  }

  getItems () {
    this.actions.dispatch({type: '*CART.GET_ITEMS'})
  }

  removeItem ({ id }) {
    this.actions.dispatch({type: '*CART.REMOVE_ITEM', id})
  }
}

export default Cart
