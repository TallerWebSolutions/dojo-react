import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { mount } from 'enzyme'

// describe('')

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('should add items to list', () => {
  const Wrapper = mount(<App />)
  const AddTodoItem = Wrapper.find('AddTodoItem')

  AddTodoItem.find('form input').simulate('change', { target: { value: 'hey' } })
  AddTodoItem.find('form').simulate('submit')

  expect(Wrapper.state().items[0].data).toBe('hey')
})

it('should show items', () => {
  const Wrapper = mount(<App />)
  const ListTodoItems = Wrapper.find('ListTodoItems')

  Wrapper.setState({
    items: [
      { data: 'item1', isEditing: false },
      { data: 'item2', isEditing: false }
    ]
  })

  expect(ListTodoItems.text()).toContain('item1')
})

it('should show added items', () => {
  const Wrapper = mount(<App />)
  const ListTodoItems = Wrapper.find('ListTodoItems')
  const AddTodoItem = Wrapper.find('AddTodoItem')

  expect(ListTodoItems.text()).not.toContain('added item')

  AddTodoItem.find('form input').simulate('change', { target: { value: 'added item' } })
  AddTodoItem.find('form').simulate('submit')

  expect(ListTodoItems.text()).toContain('added item')
})
