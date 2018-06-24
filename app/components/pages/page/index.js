import React from 'react'
import { Footer, Header } from 'components/common'
import { actions } from 'decorators'
import './styles.scss'
import 'assets/styles/style.scss'

@actions()
class Page extends React.Component {
  componentWillMount () {
    this.actions().products.getProducts()
  }

  render () {
    return <div>
      <Header />
      <main className='vm-body'>
        {this.props.children}
      </main>
      <Footer />
    </div>
  }
}

export default Page
