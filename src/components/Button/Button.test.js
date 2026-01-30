import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button', () => {
  it('renders with default props', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me'
      }
    })
    
    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('applies primary variant classes', () => {
    const wrapper = mount(Button, {
      props: { variant: 'primary' },
      slots: { default: 'Primary' }
    })
    
    expect(wrapper.find('button').classes()).toContain('bg-hn-orange')
  })

  it('applies secondary variant classes', () => {
    const wrapper = mount(Button, {
      props: { variant: 'secondary' },
      slots: { default: 'Secondary' }
    })
    
    expect(wrapper.find('button').classes()).toContain('bg-white')
  })

  it('applies size classes', () => {
    const wrapper = mount(Button, {
      props: { size: 'lg' },
      slots: { default: 'Large' }
    })
    
    expect(wrapper.find('button').classes()).toContain('px-8')
  })

  it('emits click event', async () => {
    const wrapper = mount(Button, {
      slots: { default: 'Click' }
    })
    
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('disables button when disabled prop is true', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Disabled' }
    })
    
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('shows loading state', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Loading' }
    })
    
    expect(wrapper.text()).toContain('⏳')
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('prevents click when loading', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Loading' }
    })
    
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })
})
