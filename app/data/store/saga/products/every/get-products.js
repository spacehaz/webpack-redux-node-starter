import { call, put, select } from 'redux-saga/effects'

import { getProducts } from 'data/api/products'

const generator = function * ({id}) {
  try {
    const products = yield call(getProducts)
    yield put({ type: 'PRODUCTS.SET_PRODUCTS', products })
  } catch (e) {
    console.error(e)
  }
}

export default generator
