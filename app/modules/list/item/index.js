import React from 'react'
import classNames from 'classnames'
import './style.scss'

class Item extends React.Component {
  render () {
    const {title, onItemClick, id, toggled} = this.props
    return <div className={classNames('item', {
      'item-toggled': toggled
    })} onClick={() => onItemClick(id)}>{title}</div>
  }
}

export default Item
