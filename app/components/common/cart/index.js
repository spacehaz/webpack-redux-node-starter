import React from 'react'
import { translate } from 'decorators'
import './styles.scss'

@translate('components.common.cart')
class Cart extends React.Component {
  render () {
    return <div className='vm-cart'>
      <div className='vm-cart-body'>
        {this.t('title')}
      </div>
    </div>
  }
}

export default Cart
