export default (state, { id }) => {
  const { items = [] } = state
  const indexOfItem = items.findIndex(item => Number(item.id) === Number(id))
  const finalItems = items.filter((item, idx) => idx !== indexOfItem)
  window.localStorage && window.localStorage.setItem('cart', JSON.stringify(finalItems))
  return {...state, items: finalItems}
}
