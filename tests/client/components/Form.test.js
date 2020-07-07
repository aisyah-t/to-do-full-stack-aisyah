import React from 'react'
import {Form} from '../../../client/components/Form'
import { shallow } from 'enzyme'

test('Form renders correctly', () => {
  const wrapper = shallow(<Form/>)
  const actual = wrapper.find('input[type="text"]')
  expect(actual).toHaveLength(1)
})

test('Add button renders correctly', () => {
  const wrapper = shallow(<Form/>)
  const actual = wrapper.find('input[value="Add"]')
  expect(actual).toHaveLength(1)
})