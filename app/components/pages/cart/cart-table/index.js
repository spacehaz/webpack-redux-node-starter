import React from 'react'
import { actions } from 'decorators'
import './styles.scss'

@actions(({products: { products }, cart: { items }}) => ({ items, products }))
class CartTable extends React.Component {
  render () {
    const { products, items } = this.props
    const groupedItems = this.groupItems({ items })
    console.log({groupedItems})
    return <div className='vm-cart-table'>
      <div className='vm-container'>
        <table>
          <tbody>
            {Object.keys(groupedItems).map(productId => {
              const { title, price } = this.defineProductById({ productId, products })
              const quantity = groupedItems[productId].length
              return <tr>
                <td>{title}</td>
                <td>QTY:{quantity}</td>
                <td>PRICE:{price * quantity}</td>
              </tr>
            })}
          </tbody>
        </table>
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
    console.log({ productId, products })
    return products.find(product => product.id === Number(productId))
  }
}

export default CartTable
