import React from 'react'
import {ToDoList} from '../../../client/components/ToDoList'
import { shallow } from 'enzyme'
import {Task} from '../../../client/components/Task'

test('Task renders  correctly', () => {
  //Arrange
  const pageView = { completed: 0 }
  const task = [{
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
  const wrapper = shallow(<Task dispatch={() => {}} task={task} pageView={pageView}/>)
  
  // Act
  const actual = wrapper.find('li')

  // Assert
  expect(actual).toHaveLength(2)
})


test('Task renders only completed tasks pageView.completed == 0', () => {
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
  ]
  const wrapper = shallow(<Task dispatch={() => {}} tasks={tasks} pageView={pageView}/>)
  
  // Act
  const actual = wrapper.find('li')

  // Assert
  expect(actual).toHaveLength(1)
})

test('Task renders completed task when pageView.completed == 1', () => {
  // Arrange
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
    task: 'More coffee',
    details: '',
    priority: 'low',
    completed: 1
    }
  ]
  const wrapper = shallow(<Task dispatch={() => {}} tasks={tasks} pageView={pageView}/>)

  // Act
  const actual = wrapper.find('li')

  // Assert 
  expect(actual).toHaveLength(2)
})


test('Edit form is rendered only for current task', () => {
  // Arrange
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
    task: 'More coffee',
    details: '',
    priority: 'low',
    completed: 1
    }
  ]

  const currentTask = {
    id: 3,
    task: 'More coffee',
    details: '',
    priority: 'low',
    completed: 1
  }
  const wrapper = shallow(<Task dispatch={() => {}} tasks={tasks} pageView={pageView} currentTask={currentTask}/>)

  // Act
  const actual = wrapper.find('Connect(EditForm)')

  // Assert
  expect(actual).toHaveLength(1)
})
