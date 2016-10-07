import React from 'react'
import { shallow, mount } from 'enzyme'
import ListTodoItems from '../components/ListTodoItems'

it('should render without crashing', () => {
  shallow(<ListTodoItems />)
})

it('should list items when they are available', () => {
  const mockItems = ['one', 'two', 'three']
  const wrapper = shallow(<ListTodoItems items={ mockItems } />)

  expect(wrapper.find('li').length).toBe(3)
})
