import React from 'react'
import {ToDoList} from '../../../client/components/ToDoList'
import { shallow } from 'enzyme'

test('Only inprogress tasks are rendered when pageView.completed == 0', () => {
  //Arrange
  const pageView = { completed: 0 }

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
  {
    id: 3,
    task: 'Get bread',
    details: '',
    priority: 'low',
    completed: 1
    },
  ]
  const wrapper = shallow(<ToDoList dispatch={() => {}} tasks={tasks} pageView={pageView}/>)
  
  // Act
  const actual = wrapper.find('Connect(Task)')

  // Assert
  expect(actual).toHaveLength(1)
})


test('Only completed tasks are rendered when pageView.completed == 1', () => {
  //Arrange
  const pageView = { completed: 1 }


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
  {
    id: 3,
    task: 'Get bread',
    details: '',
    priority: 'low',
    completed: 1
    },
  ]
  const wrapper = shallow(<ToDoList dispatch={() => {}} tasks={tasks} pageView={pageView}/>)
  
  // Act
  const actual = wrapper.find('Connect(Task)')

  // Assert
  expect(actual).toHaveLength(2)
})




