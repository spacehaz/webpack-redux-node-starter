import { call, put, select } from 'redux-saga/effects'

const generator = function * ({id}) {
  try {
    const items = window.localStorage && window.localStorage.getItem('cart')
    console.log({items: JSON.parse(items)})
    if (items) {
      yield put({type: 'CART.SET_ITEMS', items: JSON.parse(items)})
    }
  } catch (e) {
    console.error(e)
  }
}

export default generator
