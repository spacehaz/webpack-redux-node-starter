import React from 'react'
import Item from './item'

class List extends React.Component {
  onItemClick (id) {
    this.props.onItemClick(id)
  }

  render () {
    return <div className='list'>
      <div className='list-content'>
        {this.props.items && this.props.items.map((item, idx) =>
          <Item {...item} key={idx} onItemClick={() => this.onItemClick(idx)} />
        )}
      </div>
      <div className='list-controls'>
        this is the place for controls
      </div>
    </div>
  }
}

export default List
