import React from 'react'
import { Switch, Route } from 'react-router'
import { NotFound } from 'components/pages'

class AppRouter extends React.Component {
  render () {
    return <Switch>
      <Route path='/spa' component={NotFound} />
    </Switch>
  }
}

export default AppRouter
