import React from 'react'
import { actions, translate } from 'decorators'
import './styles.scss'
import { Button } from 'components/common'

@actions()
@translate('components.pages.checkout.common')
class Controls extends React.Component {
  render () {
    const { nextPage, prevPage } = this.props
    return <div className='vm-checkout-controls'>
      <Button title={this.t('buttons.return')} type='cancel' onClick={_ => this.actions().routing.goTo(prevPage)} />
      <Button title={this.t('buttons.continue')} onClick={_ => this.actions().routing.goTo(nextPage)} />
    </div>
  }
}

export default Controls
