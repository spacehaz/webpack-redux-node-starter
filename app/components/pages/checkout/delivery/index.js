import React from 'react'
import { actions, translate } from 'decorators'
import './styles.scss'
import classNames from 'classnames'
import Controls from '../controls'

@actions()
@translate('components.pages.checkout.delivery')
class Delivery extends React.Component {
  render () {
    const { delivery } = this.props
    return <div className='vm-checkout-delivery'>
      <div className='vm-checkout-delivery-content'>
        {DELIVERY.map(({kind, valid, area}) =>
          <div
            className={classNames('vm-checkout-delivery-item', {
              'vm-checkout-delivery-item-active': kind === delivery,
              'vm-checkout-delivery-item-valid': valid
            })}
            onClick={_ => this.chooseDelivery({ delivery: kind })}
          >
            {this.t(`kinds.${kind}`)}
          </div>)}
      </div>
      <Controls nextPage='/store/checkout/details' prevPage='/store/checkout/method' />
    </div>
  }

  chooseDelivery ({ delivery }) {
    const { chooseDelivery } = this.props
    chooseDelivery && chooseDelivery({ delivery })
  }
}

export default Delivery

const DELIVERY = [
  {
    kind: 'pickup',
    valid: true,
    area: ['st-petersburg', 'msk']
  }, {
    kind: 'bike',
    valid: true,
    area: ['st-petersburg', 'msk']
  }
]
