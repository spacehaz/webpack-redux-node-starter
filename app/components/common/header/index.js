import React from 'react'
import './styles.scss'
import { actions } from 'decorators'

@actions(({user}) => ({ user }))
class Header extends React.Component {
  render () {
    const { user } = this.props
    return <header className='header'>
      this is header
    </header>
  }
}

export default Header
