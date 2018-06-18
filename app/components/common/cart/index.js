import React from 'react'
import { translate, actions } from 'decorators'
import './styles.scss'

@actions(({cart: { items }}) => ({
  items
}))
@translate('components.common.cart')
class Cart extends React.Component {
  render () {
    const { items } = this.props
    console.log({items})
    return <div className='vm-cart'>
      <div className='vm-cart-body'>
        {this.t('title')}
        <div className='vm-cart-counter'>{items.length}</div>
      </div>
    </div>
  }
}

export default Cart
