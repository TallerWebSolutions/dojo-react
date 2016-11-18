import React, { Component, PropTypes } from 'react'

class ListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onEditItem: PropTypes.func.isRequired,
    onEditSubmit: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
  }

  handleEdit = event => {
    this.props.onEditItem(this.props.item.id)
  }

  handleRemove = event => {
    this.props.onRemoveItem(this.props.item.id)
  }

  handleEditSubmit = event => {
    event.preventDefault()
    const { id } = this.props.item
    const value = this.refs[id].value

    this.props.onEditSubmit({ value, id })
  }

  render () {
    const { item } = this.props
    return (
      <div>
        { !item.isEditing && (
          <div>
            <p onClick={ this.handleEdit }>{ item.data }</p>
            <button className="remove" onClick={ this.handleRemove }>remove</button>
          </div>
        ) }
        { item.isEditing && (
          <form onSubmit={ this.handleEditSubmit } >
            <input ref={ item.id } type="text" defaultValue={ item.data } />
            <button type="submit" className="save">save</button>
          </form>
        ) }
      </div>
    )
  }
}

export default ListItem
