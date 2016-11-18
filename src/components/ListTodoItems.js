import React, { Component, PropTypes } from 'react'
import ListItem from './ListItem'

class ListTodoItems extends Component {

  static propTypes = {
    items: PropTypes.array,
    onRemoveItem: PropTypes.func.isRequired,
    onEditItem: PropTypes.func.isRequired,
    onEditSubmit: PropTypes.func.isRequired,
    onCompleteItem: PropTypes.func.isRequired,
  }

  static defaultProps = {
    items: []
    // onRemoveItem: () => ({})
  }

  render () {
    const { items, onEditItem, onCompleteItem, onRemoveItem, onEditSubmit } = this.props
    return (
      <ul>
        { items.map((item, key) => (
          <li key={ key } >
            <ListItem
              item={ item }
              onEditSubmit={ onEditSubmit }
              onRemoveItem={ onRemoveItem }
              onEditItem={ onEditItem }
              onCompleteItem={ onCompleteItem }
            />
          </li>
        )) }
      </ul>
    )
  }
}

export default ListTodoItems
