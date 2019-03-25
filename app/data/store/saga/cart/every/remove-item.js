import { call, put, select } from 'redux-saga/effects'

const generator = function * ({ id }) {
  try {
    yield put({type: 'CART.REMOVE_ITEM', id})
  } catch (e) {
    console.error(e)
  }
}

export default generator
