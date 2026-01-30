import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ErrorMessage from './ErrorMessage.vue'

describe('ErrorMessage', () => {
  it('renders the error title', () => {
    const title = 'Failed to load'
    const wrapper = mount(ErrorMessage, {
      props: { title },
    })
    
    expect(wrapper.text()).toContain(title)
  })

  it('renders the error message', () => {
    const message = 'Network connection failed'
    const wrapper = mount(ErrorMessage, {
      props: { message },
    })
    
    expect(wrapper.text()).toContain(message)
  })

  it('renders with default title when not provided', () => {
    const wrapper = mount(ErrorMessage)
    expect(wrapper.text()).toContain('Error')
  })

  it('shows retry button when retryable is true', () => {
    const wrapper = mount(ErrorMessage, {
      props: { retryable: true },
    })
    
    expect(wrapper.find('button').text()).toContain('Try again')
  })

  it('emits retry event when retry button is clicked', async () => {
    const wrapper = mount(ErrorMessage, {
      props: { retryable: true },
    })
    
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('retry')).toBeTruthy()
  })

  it('shows dismiss button when dismissible is true', () => {
    const wrapper = mount(ErrorMessage, {
      props: { dismissible: true },
    })
    
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(1)
  })

  it('emits dismiss event when dismiss button is clicked', async () => {
    const wrapper = mount(ErrorMessage, {
      props: { dismissible: true },
    })
    
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('dismiss')).toBeTruthy()
  })

  it('has proper alert role for accessibility', () => {
    const wrapper = mount(ErrorMessage)
    expect(wrapper.find('[role="alert"]').exists()).toBe(true)
  })
})
