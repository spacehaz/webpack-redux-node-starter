import { call, put, select } from 'redux-saga/effects'

import { getProducts } from 'data/api/products'

const generator = function * ({id}) {
  try {
    const productsFromDB = yield call(getProducts)
    console.log({productsFromDB})
  } catch (e) {
    console.error(e)
  }
}

export default generator
