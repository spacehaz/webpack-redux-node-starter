import React from 'react'
import CartTable from './cart-table'
import { translate } from 'decorators'

class CartPage extends React.Component {
  render () {
    return <div className='vm-cart-page'>
      <div className='vm-container'>
        <CartTable />
      </div>
    </div>
  }
}

export default CartPage
