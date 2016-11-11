import React, { Component, PropTypes } from 'react'

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

  editSubmit = id => {
    return event => {
      event.preventDefault()
      this.props.onEditSubmit({ value: this.refs['edit-' + id].value, id })
    }
  }

  removeItem = key => {
    return this.props.onRemoveItem(key)
  }

  editItem = key => {
    return this.props.onEditItem(key)
  }

  render () {
    const { items } = this.props
    return (
      <ul>
        { items.map((item, key) => (
          <li key={ key } >
            { !item.isEditing && (
              <div>
                <p onClick={ this.editItem(key) }>{ item.data }</p>
                <button className="remove" onClick={ this.removeItem(key) }>remove</button>
              </div>
            ) }
            { item.isEditing && (
              <form onSubmit={ this.editSubmit(item.id) } >
                <input ref={ 'edit-' + item.id } type="text" defaultValue={ item.data } />
                <button type="submit" className="save">save</button>
              </form>
            ) }
          </li>
        )) }
      </ul>
    )
  }
}

export default ListTodoItems
