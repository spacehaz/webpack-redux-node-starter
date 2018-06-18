import reducers from './reducers'

const initialState = {
  products: []
}

export default (state = initialState, action = {}) => {
  const newState = { ...state }
  const { type } = action
  const actionMethod = ACTIONS[type]
  if (!actionMethod) return newState

  return actionMethod(newState, action)
}

const ACTIONS = {
  'PRODUCTS.SET_PRODUCTS': reducers.setProducts
}
