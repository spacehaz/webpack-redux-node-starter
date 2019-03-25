import React from 'react'
import './styles.scss'
import classNames from 'classnames'

class Input extends React.Component {
  constructor (props) {
    const { defaultValue } = props
    super(props)
    this.state = {
      value: defaultValue || ''
    }
  }

  render () {
    const { type = 'text', placeholder, error } = this.props
    const { value } = this.state
    return <div className={classNames('vm-input', {
      'vm-input-errored': error
    })}>
      <input placeholder={placeholder} onChange={(e) => this.onChange(e)} className='vm-input-field' type={type} value={value} />
      {error && <div className='vm-input-error'>{error}</div>}
    </div>
  }

  onChange (e) {
    const { onChange } = this.props
    const value = e.currentTarget.value
    this.setState({
      value
    }, () => {
      onChange && onChange({ value })
    })
  }
}

export default Input
