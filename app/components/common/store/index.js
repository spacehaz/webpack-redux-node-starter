
import React from 'react'
import './styles.scss'
import { translate } from 'decorators'
import { Product } from 'components/common'

@translate('components.common.header')
class Store extends React.Component {
  render () {
    const { products } = this.props
    return <div className='vm-store'>
      {this.renderProducts({ products })}
    </div>
  }

  renderProducts ({ products }) {
    return products.map((product) => {
      return <Product key={`product_${product.id}`} {...product} />
    })
  }
}

export default Store
