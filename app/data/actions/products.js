class Products {
  constructor (actions) {
    this.actions = actions
  }

  getProducts () {
    this.actions.dispatch({type: '*PRODUCTS.GET_PRODUCTS'})
  }
}

export default Products
