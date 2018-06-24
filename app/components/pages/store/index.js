import React from 'react'
import { Store } from 'components/common'
import { actions } from 'decorators'

@actions(({products: { products }}) => ({ products }))
class StorePage extends React.Component {
  render () {
    const { products } = this.props
    return <div className='vm-store-page'>
      <div className='vm-container'>
        <Store products={products} />
      </div>
    </div>
  }
}

export default StorePage
