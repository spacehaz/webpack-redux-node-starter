import { takeEvery } from 'redux-saga/effects'

import getProducts from './every/get-products'

export default function * () {
  yield takeEvery('*PRODUCTS.GET_PRODUCTS', getProducts)
}
