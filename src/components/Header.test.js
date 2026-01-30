import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import Header from './Header.vue'

describe('Header', () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div>Home</div>' } },
    ],
  })

  it('renders the header with logo and title', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router],
      },
    })
    
    expect(wrapper.find('h1').text()).toBe('HackerNews')
    expect(wrapper.find('.bg-white').text()).toBe('Y')
  })

  it('renders navigation links', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router],
      },
    })
    
    const links = wrapper.findAll('a')
    expect(links.length).toBeGreaterThan(0)
    expect(links[1].text()).toBe('Top Stories')
  })

  it('has sticky positioning', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router],
      },
    })
    
    expect(wrapper.find('header').classes()).toContain('sticky')
  })
})
