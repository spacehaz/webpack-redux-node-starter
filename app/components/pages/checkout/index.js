import React from 'react'
import { actions } from 'decorators'
import './styles.scss'
import Header from './header'
import Method from './method'
import Details from './details'
import Deivery from './delivery'

@actions()
class Checkout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      method: 'credit',
      delivery: 'pickup'
    }
  }

  render () {
    return <div className='vm-checkout'>
      <div className='vm-container'>
        <Header />
        <div className='vm-checkout-body'>
          {this.renderActualContent()}
        </div>
      </div>
    </div>
  }

  chooseMethod ({ method }) {
    this.setState({
      method
    })
  }

  chooseDelivery ({ delivery }) {
    this.setState({
      delivery
    })
  }

  renderActualContent () {
    const { method, delivery } = this.state
    if (this.isPage('/method')) return <Method method={method} chooseMethod={({ method }) => this.chooseMethod({ method })} />
    if (this.isPage('/details')) return <Details />
    if (this.isPage('/delivery')) return <Deivery delivery={delivery} chooseDelivery={({ delivery }) => this.chooseDelivery({ delivery })} />
    return <Method method={method} chooseMethod={({ method }) => this.chooseMethod({ method })} />
  }

  isPage (page) {
    const currentPath = window.location.href
    return currentPath.indexOf(page) > -1
  }
}

export default Checkout
