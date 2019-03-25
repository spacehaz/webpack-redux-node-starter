import React from 'react'
import { actions, translate } from 'decorators'
import './styles.scss'
import { Input } from 'components/common'
import Controls from '../controls'

@actions()
@translate('components.pages.checkout.details')
class Details extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      adress: '',
      city: '',
      country: '',
      zip: '',
      secondName: '',
      email: '',
      phone: ''
    }
  }

  setField ({ field, value }) {
    this.setState({[field]: value})
  }

  render () {
    const { name, secondName, adress, city, country, zip, email, phone } = this.state
    return <div className='vm-checkout-details'>
      <div className='vm-checkout-details-split'>
        <Input defaultValue={name} placeholder={this.t('fields.name')} />
        <Input defaultValue={secondName} placeholder={this.t('fields.secondName')} />
      </div>
      <div className='vm-checkout-details-split'>
        <Input defaultValue={email} placeholder={this.t('fields.email')} />
        <Input defaultValue={phone} placeholder={this.t('fields.phone')} />
      </div>
      <div className='vm-checkout-details-split'>
        <Input defaultValue={city} placeholder={this.t('fields.city')} />
        <Input defaultValue={country} placeholder={this.t('fields.country')} />
      </div>
      <div className='vm-checkout-details-split'>
        <Input defaultValue={adress} placeholder={this.t('fields.adress')} />
        <Input defaultValue={zip} placeholder={this.t('fields.zip')} />
      </div>
      <Controls nextPage='/store/checkout/delivery' prevPage='/store/checkout/delivery' />
    </div>
  }
}

export default Details
