import React from 'react'
import {EditForm} from '../../../client/components/EditForm'
import { shallow } from 'enzyme'

test('EditForm renders only correctly', () => {
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

  const currentTask = {
    id: 2,
    task: 'Sleep',
    details: '',
    priority: 'low',
    completed: 0
    }
  
  const wrapper = shallow(<EditForm dispatch={() => {}} tasks={tasks} currentTask={currentTask}/>)
  
  // Act
  const actual = wrapper.find('input[defaultValue="Sleep"]')
  // console.log(wrapper.debug())
  // Assert
  expect(actual).toHaveLength(1)
})