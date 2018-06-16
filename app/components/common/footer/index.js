import React from 'react'
import { translate } from 'decorators'
console.log({translate})
@translate('components.footer')
class Footer extends React.Component {
  render () {
    return <footer className='hello'>{this.t('copyright')}</footer>
  }
}

export default Footer
