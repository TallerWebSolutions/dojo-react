import React, { Component, PropTypes } from 'react'
import ListItem from './ListItem'

class ListTodoItems extends Component {

  static propTypes = {
    items: PropTypes.array,
    onRemoveItem: PropTypes.func.isRequired,
    onEditItem: PropTypes.func.isRequired,
    onEditSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    items: []
    // onRemoveItem: () => ({})
  }

  render () {
    const { items, onEditItem, onRemoveItem, onEditSubmit } = this.props
    return (
      <ul>
        { items.map((item, key) => (
          <li key={ key } >
            <ListItem
              item={ item }
              onEditSubmit={ onEditSubmit }
              onRemoveItem={ onRemoveItem }
              onEditItem={ onEditItem }
            />
          </li>
        )) }
      </ul>
    )
  }
}

export default ListTodoItems
