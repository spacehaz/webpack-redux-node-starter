import React from 'react'
import { Footer, Header } from 'components/common'
import './styles.scss'
import 'assets/styles/style.scss'

class Page extends React.Component {
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
