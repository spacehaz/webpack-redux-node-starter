
import React from 'react'
import './styles.scss'
import { actions, translate } from 'decorators'

@actions(({products: { products }}) => ({ products }))
@translate('components.common.header')
class Store extends React.Component {
  componentWillMount () {
    this.actions().products.getProducts()
  }

  render () {
    const { products } = this.props
    console.log({products})
    return <div className='vm-store'>
      here is store
    </div>
  }
}

export default Store
