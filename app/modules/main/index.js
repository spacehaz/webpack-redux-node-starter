import React from 'react'
import FinalList from 'redux/containers/final-list'
import './style.scss'

class Main extends React.Component {
  render () {
    return <main className='main'>
      hello i am app
      <FinalList />
    </main>
  }
}

export default Main
