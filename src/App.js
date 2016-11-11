import React, { Component } from 'react'
import './App.css'
import AddTodoItem from './components/AddTodoItem'
import ListTodoItems from './components/ListTodoItems'
import uuid from 'uuid'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      items: [],
      isEditing: false
    }
  }

  handleRemove = key => {
    const { items } = this.state
    const filteredItems = items.filter((item, index) => {
      return index !== key
    })

    return event => {
      this.setState({
        items: filteredItems
      })
    }
  }

  handleEdit = key => {
    const { items } = this.state
    const modifiedItems = items.map((item, index) => {
      if (index !== key) {
        return item
      }

      return {
        ...item,
        isEditing: true
      }
    })

    return event => {
      this.setState({
        items: modifiedItems
      })
    }
  }

  handleOnSubmit = (value) => {
    const { items } = this.state

    this.setState({
      items: items.concat({
        id: uuid.v1(),
        data: value,
        isEditing: false
      })
    })
  }

  handleEditSubmit = ({ value, id }) => {
    const { items } = this.state

    this.setState({
      items: items.map((item, index) => {
        if (item.id !== id) {
          return item
        }

        return {
          ...item,
          data: value,
          isEditing: false,
        }
      })
    })
  }

  render () {
    const { items } = this.state

    return (
      <div className='App'>
        <header>
          <h1>Todo App</h1>
          <AddTodoItem onSubmit={ this.handleOnSubmit } />
          <ListTodoItems
            items={ items }
            onEditItem={ this.handleEdit }
            onRemoveItem={ this.handleRemove }
            onEditSubmit={ this.handleEditSubmit }
          />
        </header>
      </div>
    )
  }
}

export default App
