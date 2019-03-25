import { Item } from '../models'

export default (state, { id }) => {
  const { items = [] } = state
  const newItem = new Item({ id })
  const finalItems = items.concat([newItem])
  window.localStorage && window.localStorage.setItem('cart', JSON.stringify(finalItems))
  return {...state, items: finalItems}
}
