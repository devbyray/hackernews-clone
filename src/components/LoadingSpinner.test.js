import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LoadingSpinner from './LoadingSpinner.vue'

describe('LoadingSpinner', () => {
  it('renders the spinner', () => {
    const wrapper = mount(LoadingSpinner)
    expect(wrapper.find('.animate-spin').exists()).toBe(true)
  })

  it('renders with a message', () => {
    const message = 'Loading stories...'
    const wrapper = mount(LoadingSpinner, {
      props: { message },
    })
    
    expect(wrapper.text()).toContain(message)
  })

  it('applies correct size class for small spinner', () => {
    const wrapper = mount(LoadingSpinner, {
      props: { size: 'sm' },
    })
    
    expect(wrapper.find('.h-6').exists()).toBe(true)
    expect(wrapper.find('.w-6').exists()).toBe(true)
  })

  it('applies correct size class for large spinner', () => {
    const wrapper = mount(LoadingSpinner, {
      props: { size: 'lg' },
    })
    
    expect(wrapper.find('.h-16').exists()).toBe(true)
    expect(wrapper.find('.w-16').exists()).toBe(true)
  })

  it('applies custom color', () => {
    const wrapper = mount(LoadingSpinner, {
      props: { color: 'border-blue-500' },
    })
    
    expect(wrapper.find('.border-blue-500').exists()).toBe(true)
  })

  it('renders without message by default', () => {
    const wrapper = mount(LoadingSpinner)
    expect(wrapper.find('span').exists()).toBe(false)
  })
})
