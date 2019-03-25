import React from 'react'
import { Switch, Route } from 'react-router'
import { NotFound, Page, Store, Cart, Checkout } from 'components/pages'
import { actions } from 'decorators'

@actions()
class AppRouter extends React.Component {
  componentWillMount () {
    this.actions().cart.getItems()
  }

  render () {
    return <Page>
      <Switch>

        <Route path='/store/cart' component={Cart} />
        <Route path='/store/checkout' component={Checkout} />
        <Route path='/store/checkout/method' component={Checkout} />
        <Route path='/store/checkout/details' component={Checkout} />
        <Route path='/store/checkout/delivery' component={Checkout} />
        <Route path='/store' component={Store} />

        <Route path='/*' component={NotFound} />
      </Switch>
    </Page>
  }
}

export default AppRouter
