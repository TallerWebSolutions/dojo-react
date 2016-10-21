import React, { Component, PropTypes } from 'react'

class ListTodoItems extends Component {

  static propTypes = {
    items: PropTypes.array,
    onRemoveItem: PropTypes.func.isRequired
  }

  static defaultProps = {
    items: []
    // onRemoveItem: () => ({})
  }

  removeItem = key => {
    return this.props.onRemoveItem(key)
  }

  render () {
    const { items } = this.props
    return (
      <ul>
        { items.map((item, key) => (
          <li key={ key }>{ item } <button className="remove" onClick={ this.removeItem(key) }>remove</button></li>
        )) }
      </ul>
    )
  }
}

export default ListTodoItems
