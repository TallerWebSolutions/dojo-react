import React from 'react'
import { shallow, mount } from 'enzyme'
import ListTodoItems from '../components/ListTodoItems'

it('should render without crashing', () => {
  const stub = jest.fn()
  shallow(<ListTodoItems onRemoveItem={ stub } onCompleteItem={ stub } onEditItem={ stub } onEditSubmit={ stub } />)
})

it('should list items when they are available', () => {
  const mockItems = [
    { id: '1', data: 'item one' },
    { id: '2', data: 'item two' },
    { id: '3', data: 'item three' }
  ]
  const stub = jest.fn()
  const wrapper = shallow(<ListTodoItems items={ mockItems } onCompleteItem={ stub } onRemoveItem={ stub } onEditItem={ stub } onEditSubmit={ stub } />)

  expect(wrapper.find('li').length).toBe(3)
})

it('should remove an item when remove button is clicked', () => {
  const mockItems = [
    { id: '1', data: 'item one' },
    { id: '2', data: 'item two' },
    { id: '3', data: 'item three' }
  ]
  const stub = jest.fn()
  const onRemoveItem = jest.fn()

  const wrapper = mount(
    <ListTodoItems
      items={ mockItems }
      onRemoveItem={ onRemoveItem }
      onEditItem={ stub }
      onEditSubmit={ stub }
      onCompleteItem={ stub }
    />
  )

  wrapper.find('button.remove').first().simulate('click')
  expect(onRemoveItem).toHaveBeenCalledTimes(1)
})

it('should be able to edit an item', () => {
  const mockItems = [
    { id: '1', data: 'item one' },
    { id: '2', data: 'item two' },
    { id: '3', data: 'item three' }
  ]
  const stub = jest.fn()
  const onEditItem = jest.fn()

  const wrapper = mount(
    <ListTodoItems
      items={ mockItems }
      onEditItem={ onEditItem }
      onRemoveItem={ stub }
      onEditSubmit={ stub }
      onCompleteItem={ stub }
    />
  )

  wrapper.find('li p').first().simulate('click')
  expect(onEditItem).toHaveBeenCalledTimes(1)
})

it('should be able to update an item', () => {
  const mockItems = [
    { id: '1', data: 'item one', isEditing: true },
    { id: '2', data: 'item two' },
    { id: '3', data: 'item three' }
  ]
  const stub = jest.fn()
  const onEditSubmit = jest.fn()

  const wrapper = mount(
    <ListTodoItems
      items={ mockItems }
      onEditItem={ stub }
      onRemoveItem={ stub }
      onEditSubmit={ onEditSubmit }
      onCompleteItem={ stub }
    />
  )

  wrapper.find('li form').first().simulate('submit')
  expect(onEditSubmit).toHaveBeenCalledTimes(1)
})

it('should be able to check an item as done', () => {
  const mockItems = [
    { data: 'item one' },
    { data: 'item two', completed: true },
    { data: 'item three' }
  ]

  const stub = jest.fn()
  const onCompleteItem = jest.fn()

  const wrapper = mount(<ListTodoItems items={ mockItems } onCompleteItem={ onCompleteItem } onRemoveItem={ stub } onEditItem={ stub } onEditSubmit={ stub } />)
  const checkboxes = wrapper.find('input[type="checkbox"]')
  const checked = wrapper.find('input[checked]')

  expect(checkboxes.length).toBe(3)
  expect(checked.length).toBe(1)

  const checkbox = wrapper.find('input[type="checkbox"]').first()
  checkbox.simulate('change')
  expect(onCompleteItem).toHaveBeenCalledTimes(1)
})
