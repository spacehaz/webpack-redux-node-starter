import reducers from './reducers'

const initialState = {
  items: []
}

export default (state = initialState, action = {}) => {
  const newState = { ...state }
  const { type } = action
  const actionMethod = ACTIONS[type]
  if (!actionMethod) return newState

  return actionMethod(newState, action)
}

const ACTIONS = {
  'CART.ADD_ITEM': reducers.addItem,
  'CART.SET_ITEMS': reducers.setItems,
  'CART.REMOVE_ITEM': reducers.removeItem
}
