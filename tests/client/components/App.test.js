
import React from 'react'
import {App} from '../../../client/components/App'
import { shallow } from 'enzyme'

test('App renders correctly', () => {
  const wrapper = shallow(<App/>)
  const actual = wrapper.find('Connect(Form)')
  // console.log(wrapper.debug())
  expect(actual).toHaveLength(1)
})

// test('App renders correctly on edit view', () => {
//   const wrapper = shallow(<App dispatch={() => {}} pageView={'edit'}/>)
//   const actual = wrapper.find('Connect(Form)')
//   console.log(wrapper.debug())
//   expect(actual).toHaveLength(0)
// })
