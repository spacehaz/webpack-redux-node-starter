import React from 'react'
import './styles.scss'
import { actions, translate } from 'decorators'
import { Cart } from 'components/common'

@actions(({user}) => ({ user }))
@translate('components.common.header')
class Header extends React.Component {
  render () {
    const { user } = this.props
    return <header className='vm-header'>
      <div className='vm-container'>
        <span onClick={() => this.actions().cart.addItem({id: 666})}>{this.t('title')}</span>
        <Cart />
      </div>
    </header>
  }
}

export default Header
