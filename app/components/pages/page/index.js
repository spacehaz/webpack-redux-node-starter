import React from 'react'
import { Footer, Header } from 'components/common'
class Page extends React.Component {
  render () {
    return <div>
      <Header />
      {this.props.children}
      <Footer />
    </div>
  }
}

export default Page
