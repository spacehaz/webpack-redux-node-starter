import React from 'react'
import { Switch, Route } from 'react-router'
import { NotFound, Page } from 'components/pages'

class AppRouter extends React.Component {
  render () {
    return <Page>
      <Switch>
        <Route path='/store' component={NotFound} />
        <Route path='/*' component={NotFound} />
      </Switch>
    </Page>
  }
}

export default AppRouter
