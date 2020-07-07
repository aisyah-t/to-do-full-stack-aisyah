import React from 'react'
import tasksReducer from '../../../client/reducers/tasks'

test('RECEIVE_TASKS works correctly', () => {

  // Arrange
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

  const expected = tasks
  const initialState = []
  const action = {
    type: 'RECEIVE_TASKS',
    tasks: tasks
  }

  // Act
  const actual = tasksReducer(initialState, action) 

  // Assert 
  expect(actual).toEqual(expected)
})

test('ADD_TASK works correctly', () => {

  // Arrange
  const task = {
    id: 3,
    task: 'Bread',
    details: '',
    priority: 'High',
    completed: 0
    }

  const initialState = [{
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

  const action = {
    type: 'ADD_TASK',
    task: task
  }

  const expected = [{
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
  {
    id: 3,
    task: 'Bread',
    details: '',
    priority: 'High',
    completed: 0
    }
  ]

  // Act
  const actual = tasksReducer(initialState, action)

  // Assert 
  expect(actual).toEqual(expected)
})


test('UPDATE_TASK works correctly', () => {
  // Arrange
  const initialState = [{
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

  const task =  {
    id: 2,
    task: 'Get heaps of coffee',
    details: '',
    priority: 'low',
    completed: 0
  }

  const action = {
    type: 'UPDATE_TASK',
    task: task
  }

  const expected = [{
    id: 1,
    task: 'Get milk',
    details: '',
    priority: 'low',
    completed: 0
  },
  {
    id: 2,
    task: 'Get heaps of coffee',
    details: '',
    priority: 'low',
    completed: 0
  }]

  // Act
  const actual = tasksReducer(initialState, action)

  // Assert 
  expect(actual).toEqual(expected)

})


test('DELETE_TASK works correctly', () => {

  const id = 2
  // Arrange
  const initialState = [{
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

  const action = {
    type: 'DELETE_TASK',
    id: id
  }

  const expected = [{
    id: 1,
    task: 'Get milk',
    details: '',
    priority: 'low',
    completed: 0
  }]

  // Act
  const actual = tasksReducer(initialState, action)

  // Assert
  expect(actual).toEqual(expected)
})