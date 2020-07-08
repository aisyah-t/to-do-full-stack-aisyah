import React from 'react'
import { shallow } from 'enzyme'
import {Task} from '../../../client/components/Task'

test('Task renders correctly', () => {
  //Arrange
  const pageView = { completed: 0 }
  const task = {
    id: 1,
    task: 'Get milk',
    details: '',
    priority: 'low',
    completed: 0
  }
 
  const wrapper = shallow(<Task dispatch={() => {}} task={task} pageView={pageView}/>)
  
  // Act
  const actual = wrapper.find('a').text()

  // Assert
  expect(actual).toEqual('Get milk')
})


test('Edit form is not rendered for if not current task', () => {
  // Arrange
  const pageView = { completed: 1 }

  const task = {
    id: 1,
    task: 'Get milk',
    details: '',
    priority: 'low',
    completed: 0
  }

  const currentTask = {
    id: 3,
    task: 'More coffee',
    details: '',
    priority: 'low',
    completed: 1
  }
  const wrapper = shallow(<Task dispatch={() => {}} task={task} pageView={pageView} currentTask={currentTask}/>)

  // Act
  const actual = wrapper.find('Connect(EditForm)')

  // Assert
  expect(actual).toHaveLength(0)
})


test('Edit form is rendered for if current task', () => {
  // Arrange
  const pageView = { completed: 1 }

  const task = {
    id: 1,
    task: 'Get milk',
    details: '',
    priority: 'low',
    completed: 0
  }

  const currentTask = {
    id: 1,
    task: 'Get milk',
    details: '',
    priority: 'low',
    completed: 0
  }

  const wrapper = shallow(<Task dispatch={() => {}} task={task} pageView={pageView} currentTask={currentTask}/>)

  // Act
  const actual = wrapper.find('Connect(EditForm)')

  // Assert
  expect(actual).toHaveLength(0)
})
