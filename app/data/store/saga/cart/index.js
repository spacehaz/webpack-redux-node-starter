import { takeEvery } from 'redux-saga/effects'

import addItem from './every/add-item'

export default function * () {
  yield takeEvery('*CART.ADD_ITEM', addItem)
}
