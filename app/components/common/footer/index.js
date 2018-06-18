import React from 'react'
import { translate } from 'decorators'
import moment from 'moment'
import './styles.scss'

@translate('components.common.footer')
class Footer extends React.Component {
  render () {
    return <footer className='vm-footer'>
      <div className='vm-container'>
        {this.t('copyright', { year: moment().format('YYYY') })}
      </div>
    </footer>
  }
}

export default Footer
