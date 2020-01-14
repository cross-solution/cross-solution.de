/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { mount, createLocalVue } from '@vue/test-utils'
import DateRange from 'src/components/General/LanguageSearch/Level.vue'
import * as All from 'quasar'

const { Quasar, date } = All

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

describe('DateRange', () => {
  const localVue = createLocalVue()
  localVue.use(Quasar, { components })

  const wrapper = mount(
    DateRange,
    {localVue})

  it('renders a div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })

  it('Test level', () => {
    expect(wrapper.name()).toBe('Level')
  })

  it('Test Default Value of level', () => {
    expect(wrapper.vm.level).toBe('B2')
  })


})