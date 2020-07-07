import React from 'react'
import {ToDoList} from '../../../client/components/ToDoList'
import { shallow } from 'enzyme'

test('ToDoList renders only correctly', () => {
  //Arrange
  const tasks = [{
    id: 1,
    task: 'Get milk',
    details: '',
    priority: 'low',
    completed: 0
  },
  {
    id: 2,
    task: 'Get coffee',
    details: '',
    priority: 'low',
    completed: 0
    },
  ]
  const wrapper = shallow(<ToDoList dispatch={() => {}} tasks={tasks}/>)
  
  // Act
  const actual = wrapper.find('li')

  // Assert
  expect(actual).toHaveLength(2)
})


test('ToDoList renders only completed tasks', () => {
  //Arrange
  const tasks = [{
    id: 1,
    task: 'Get milk',
    details: '',
    priority: 'low',
    completed: 0
  },
  {
    id: 2,
    task: 'Get coffee',
    details: '',
    priority: 'low',
    completed: 1
    },
  ]
  const wrapper = shallow(<ToDoList dispatch={() => {}} tasks={tasks}/>)
  
  // Act
  const actual = wrapper.find('li')

  // Assert
  expect(actual).toHaveLength(1)
})


