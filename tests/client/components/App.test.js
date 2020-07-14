import React from 'react'
import { App } from "../../../client/components/App"
import { shallow, mount } from 'enzyme'

test ("App renders correctly", () => {
    const wrapper = shallow(<App dispatch={() => {}} tasks={{}} />)
    console.log(wrapper.debug())
})


test ("it works", () => {
    expect(7).toBeLessThan(10)
})