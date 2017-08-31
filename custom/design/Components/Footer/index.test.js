import { shallow } from 'enzyme'
import React from 'react'
import Component from '../../../../themes/jazzkitchen/Components/Footer/index.js'

const Editable = () => <div />

describe('themes/vipin/Components/Footer', () => {
  describe('Component', () => {
    it('renders a single div', () => {
      const wrapper = shallow(<Component Editable={Editable} />)
      expect(wrapper.find('div')).toBeDefined()
    })
  })
})
