import React from 'react'
import {App} from '../../../client/components/App'
import { shallow } from 'enzyme'

test('App renders correctly', () => {
  const wrapper = shallow(<App dispatch={() => {}} pageView={'list'}/>)
  const actual = wrapper.find('h1')
  expect(actual).toHaveLength(1)
  // console.log(wrapper.debug())
})
