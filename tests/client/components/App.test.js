import React from 'react'
import {App} from '../../../client/components/App'
import { shallow } from 'enzyme'

test('App renders correctly on list view', () => {
  const wrapper = shallow(<App dispatch={() => {}} pageView={{completed:0}}/>)
  const actual = wrapper.find('Connect(Form)')
  // console.log(wrapper.debug())
  expect(actual).toHaveLength(1)
})

test('App renders correctly on edit view', () => {
  const wrapper = shallow(<App dispatch={() => {}} pageView={'edit'}/>)
  const actual = wrapper.find('Connect(Form)')
  expect(actual).toHaveLength(0)
})
