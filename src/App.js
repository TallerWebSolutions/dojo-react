import React, { Component } from 'react'
import './App.css'
import AddTodoItem from './components/AddTodoItem'
import ListTodoItems from './components/ListTodoItems'
class App extends Component {

  constructor (props) {
    super(props)
    this.state = { items: [] }
  }

  handleOnSubmit = (value) => {
    const { items } = this.state

    this.setState({
      items: items.concat(value)
    })
  }

  render () {
    const { items } = this.state

    return (
      <div className='App'>
        <header>
          <h1>Todo App</h1>
          <AddTodoItem onSubmit={ this.handleOnSubmit } />
          <ListTodoItems items={ items } />
        </header>
      </div>
    )
  }
}

export default App
