
import React from 'react'
import './styles.scss'
import { translate, actions } from 'decorators'

@actions()
@translate('components.common.product')
class Product extends React.Component {
  render () {
    const { title, price, qty, weight, type, id, imgUrl } = this.props
    return <div className='vm-product' style={{ backgroundImage: `url(${imgUrl})` }}>
      <div className='vm-product-overlay'>
        <div className='vm-product-title'>{ title }</div>
        <div className='vm-product-price' onClick={() => this.actions().cart.addItem({ id })}>{ price }₽</div>
      </div>
    </div>
  }
}

export default Product
