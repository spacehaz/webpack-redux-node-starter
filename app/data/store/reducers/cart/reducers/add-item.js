import { Item } from '../models'

export default (state, { id }) => {
  const { items = [] } = state
  const newItem = new Item({id})
  const finalItems = items.concat([newItem])
  return {...state, items: finalItems}
}
