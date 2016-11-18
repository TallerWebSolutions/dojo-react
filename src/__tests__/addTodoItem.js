import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'
import AddTodoItem from '../components/AddTodoItem'

const defaultProps = {
  onSubmit: jest.fn()
}

it('renders without crashing', () => {
  shallow(<App items={ [] } />)
})

it('renders add todo item without crashing', () => {
  shallow(<AddTodoItem { ...defaultProps } />)
})

it('should have add component', () => {
  const wrapper = mount(<App items={ [] } />)
  expect(wrapper.find('AddTodoItem').length).toBe(1)
})

it('should have add input', () => {
  const wrapper = shallow(<AddTodoItem { ...defaultProps } />)
  expect(wrapper.find('input').length).toBe(1)
})

it('should submit with input value when enter key is pressed', () => {
  const handleSubmit = jest.fn()
  const wrapper = mount(<AddTodoItem onSubmit={ handleSubmit } />)

  wrapper.setState({ add: 'hey' })

  wrapper.find('form').simulate('submit')
  expect(handleSubmit).toBeCalledWith('hey')
})

it('should be able to input a value and submit', () => {
  const handleSubmit = jest.fn()
  const wrapper = mount(<AddTodoItem onSubmit={ handleSubmit } />)

  wrapper.find('form input').simulate('change', { target: { value: 'hey' } })
  wrapper.find('form').simulate('submit')

  expect(handleSubmit).toBeCalledWith('hey')
})

it('shouldn\'t be able to submit without a value', () => {
  const handleSubmit = jest.fn()
  const wrapper = mount(<AddTodoItem onSubmit={ handleSubmit } />)

  wrapper.find('form').simulate('submit')

  expect(handleSubmit).not.toBeCalled()
})
