import React from 'react'
import { shallow, mount } from 'enzyme'
import ListTodoItems from '../components/ListTodoItems'

it('should render without crashing', () => {
  const handleRemove = jest.fn()
  const handleEdit = jest.fn()
  const handleEditSubmit = jest.fn()
  shallow(<ListTodoItems onRemoveItem={ handleRemove } onEditItem={ handleEdit } onEditSubmit={ handleEditSubmit } />)
})

it('should list items when they are available', () => {
  const mockItems = ['one', 'two', 'three']
  const handleRemove = jest.fn()
  const handleEdit = jest.fn()
  const handleEditSubmit = jest.fn()
  const wrapper = shallow(<ListTodoItems items={ mockItems } onRemoveItem={ handleRemove } onEditItem={ handleEdit } onEditSubmit={ handleEditSubmit } />)

  expect(wrapper.find('li').length).toBe(3)
})

it('should remove an item when remove button is clicked', () => {
  const mockItems = ['item one', 'item two', 'item three']
  const handleRemove = jest.fn()
  const handleEdit = jest.fn()
  const handleEditSubmit = jest.fn()
  const handleOnRemoveItem = key => handleRemove
  const wrapper = mount(<ListTodoItems items={ mockItems } onRemoveItem={ handleOnRemoveItem } onEditItem={ handleEdit } onEditSubmit={ handleEditSubmit } />)

  wrapper.find('button.remove').first().simulate('click')
  expect(handleRemove).toHaveBeenCalledTimes(1)
})

it('should be able to edit an item', () => {
  const mockItems = [
    { data: 'item one' },
    { data: 'item two', isEditing: true },
    { data: 'item three' }
  ]
  const handleRemove = jest.fn()
  const handleEdit = () => {
    return () => handleEditClick()
  }
  const handleEditClick = jest.fn()
  const handleEditSubmit = jest.fn()
  const handleOnRemoveItem = key => handleRemove
  const wrapper = mount(<ListTodoItems items={ mockItems } onRemoveItem={ handleOnRemoveItem } onEditItem={ handleEdit } onEditSubmit={ handleEditSubmit } />)
  wrapper.find('li p').first().simulate('click')
  expect(handleEditClick).toHaveBeenCalledTimes(1)
  expect(wrapper.find('li form').length).toBe(1)
})
