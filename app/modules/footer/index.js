import React from 'react'
import t from 'texts'

class Footer extends React.Component {
  render () {
    return <footer className='hello'> {t('modules.footer.copyright')} </footer>
  }
}

export default Footer
