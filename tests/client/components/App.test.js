import React from 'react'
import {App} from '../../../client/components/App'
import { shallow } from 'enzyme'

test('App renders correctly on list view', () => {
  const wrapper = shallow(<App dispatch={() => {}} pageView={'list'}/>)
  const actual = wrapper.find('Connect(Form)')
  expect(actual).toHaveLength(1)
})

test('App renders correctly on edit view', () => {
  const wrapper = shallow(<App dispatch={() => {}} pageView={'edit'}/>)
  const actual = wrapper.find('Connect(Form)')
  expect(actual).toHaveLength(0)
})
