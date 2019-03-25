import React from 'react'
import './styles.scss'
import classNames from 'classnames'

class Button extends React.Component {
  render () {
    const { title, onClick, type = 'default' } = this.props
    return <button className={classNames('vm-button', `vm-button-${type}`)} onClick={() => onClick && onClick()}>
      {title}
    </button>
  }
}

export default Button
