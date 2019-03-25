import React from 'react'
import { actions } from 'decorators'
import './styles.scss'

@actions()
class Header extends React.Component {
  render () {
    return <div className='vm-checkout-header'>
      <div className='vm-container'>
        header of checkout
      </div>
    </div>
  }

  // renderActualContent () {
  //   const currentPath = window.location.href
  //   if (currentPath.indexOf('/method') > -1) return <div>checkout method</div>
  //   return <div>default</div>
  // }
}

export default Header
