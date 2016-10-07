import React, { Component, PropTypes } from 'react'

class AddTodoItem extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)
    this.state = { add: '' }
  }

  handleSubmit = event => {
    event.preventDefault()
    const input = this.state.add

    if (input) {
      this.props.onSubmit(input)
    }
  }

  handleOnChange = event => {
    const { target: { value } } = event

    this.setState({
      add: value
    })
  }

  render () {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type='text' onChange={ this.handleOnChange } />
      </form>
    )
  }
}

export default AddTodoItem
