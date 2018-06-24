import React from 'react'
import { Switch, Route } from 'react-router'
import { NotFound, Page, Store, Cart } from 'components/pages'

class AppRouter extends React.Component {
  render () {
    return <Page>
      <Switch>
        <Route path='/spa/store' component={Store} />
        <Route path='/spa/cart' component={Cart} />
        <Route path='/*' component={NotFound} />
      </Switch>
    </Page>
  }
}

export default AppRouter
