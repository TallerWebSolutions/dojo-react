import React from 'react'
import { shallow, mount } from 'enzyme'
import ListTodoItems from '../components/ListTodoItems'

it('should render without crashing', () => {
  const handleRemove = jest.fn()
  shallow(<ListTodoItems onRemoveItem={ handleRemove } />)
})

it('should list items when they are available', () => {
  const mockItems = ['one', 'two', 'three']
  const handleRemove = jest.fn()
  const wrapper = shallow(<ListTodoItems items={ mockItems } onRemoveItem={ handleRemove } />)

  expect(wrapper.find('li').length).toBe(3)
})

it('should remove an item when remove button is clicked', () => {
  const mockItems = ['item one', 'item two', 'item three']
  const handleRemove = jest.fn()
  const wrapper = shallow(<ListTodoItems items={ mockItems } onRemoveItem={ handleRemove } />)
  wrapper.find('button.remove').first().simulate('click')

  expect(wrapper.find('li').length).toBe(2)
})
