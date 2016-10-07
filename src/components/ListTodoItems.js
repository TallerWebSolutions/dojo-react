import React, { Component, PropTypes } from 'react'

class ListTodoItems extends Component {

  static propTypes = {
    items: PropTypes.array
  }

  static defaultProps = {
    items: []
  }

  render () {
    const { items } = this.props
    return (
      <ul>
        { items.map((item, key) => (
          <li key={ key }>{ item }</li>
        )) }
      </ul>
    )
  }
}

export default ListTodoItems
