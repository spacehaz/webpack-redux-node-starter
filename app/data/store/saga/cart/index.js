import { takeEvery } from 'redux-saga/effects'

import addItem from './every/add-item'
import getItems from './every/get-items'
import removeItem from './every/remove-item'

export default function * () {
  yield takeEvery('*CART.ADD_ITEM', addItem)
  yield takeEvery('*CART.GET_ITEMS', getItems)
  yield takeEvery('*CART.REMOVE_ITEM', removeItem)
}
