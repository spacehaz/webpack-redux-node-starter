import React from 'react'
import { actions, translate } from 'decorators'
import './styles.scss'
import { Button } from 'components/common'

@actions(({products: { products }, cart: { items }}) => ({ items, products }))
@translate('components.pages.cart')
class CartTable extends React.Component {
  render () {
    const { products, items } = this.props
    const groupedItems = this.groupItems({ items })
    let totalPrice = 0
    return <div className='vm-cart-table'>
      <div className='vm-container'>
        <table>
          <thead>
            <tr>
              <th />
              <th>{this.t('title')}</th>
              <th>{this.t('quantity')}</th>
              <th>{this.t('price')}</th>
            </tr>
          </thead>
          <tbody>
            {products.length !== 0 && Object.keys(groupedItems).map(productId => {
              const { title, price } = this.defineProductById({ productId, products })
              const quantity = groupedItems[productId].length
              totalPrice = totalPrice + price * quantity
              return <tr>
                <td className='vm-cart-table-remove' onClick={() => this.actions().cart.removeItem({ id: productId })}>x</td>
                <td className='vm-cart-table-title'>{title}</td>
                <td>{quantity}</td>
                <td>{price}</td>
              </tr>
            })}
            <tr>
              <td />
              <td />
              <td />
              <td>{this.t('total')}: {totalPrice}</td>
            </tr>
          </tbody>
        </table>

        <div className='vm-cart-table-controls'>
          <Button title={this.t('return')} type='cancel' onClick={_ => this.actions().routing.goTo('/store')} />
          <Button title={this.t('continue')} onClick={_ => this.actions().routing.goTo('/store/checkout/method')} />
        </div>
      </div>
    </div>
  }

  groupItems ({ items }) {
    return items.reduce((sum, item) => {
      sum[item.id] = (sum[item.id] || []).concat([item])
      return sum
    }, {})
  }

  defineProductById ({ productId, products }) {
    return products.find(product => product.id === Number(productId))
  }
}

export default CartTable
