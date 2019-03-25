import React from 'react'
import { actions, translate } from 'decorators'
import './styles.scss'
import classNames from 'classnames'
import Controls from '../controls'

@actions()
@translate('components.pages.checkout.method')
class Method extends React.Component {
  render () {
    const { method } = this.props
    return <div className='vm-checkout-method'>
      <div className='vm-checkout-method-content'>
        {METHODS.map(methodItem =>
          <div
            className={classNames('vm-checkout-method-item', {
              'vm-checkout-method-item-active': methodItem === method
            })}
            onClick={_ => this.chooseMethod({ method: methodItem })}
          >
            {this.t(`methods.${methodItem}`)}
          </div>)}
      </div>
      <Controls nextPage='/store/checkout/delivery' prevPage='/store/store' />
    </div>
  }

  chooseMethod ({ method }) {
    const { chooseMethod } = this.props
    chooseMethod && chooseMethod({ method })
  }
}

export default Method

const METHODS = ['credit', 'cash', 'cryptoDash']
