  
import React from 'react'
import {App} from '../../../client/components/App'
import { shallow } from 'enzyme'

test('checking App', () => {
  const wrapper = shallow(<App/>)
  const actual = wrapper.find('Connect(Form)')
  // console.log(wrapper.debug())
  expect(actual).toHaveLength(1)
})