import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import StoryItem from './StoryItem.vue'

describe('StoryItem', () => {
  const mockStory = {
    id: 123,
    title: 'Test Story Title',
    by: 'testuser',
    score: 100,
    time: Math.floor(Date.now() / 1000) - 3600, // 1 hour ago
    descendants: 25,
    url: 'https://example.com/article',
  }

  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/story/:id', component: { template: '<div>Story</div>' } },
    ],
  })

  it('renders story title', () => {
    const wrapper = mount(StoryItem, {
      props: { story: mockStory, index: 0 },
      global: { plugins: [router] },
    })
    
    expect(wrapper.text()).toContain('Test Story Title')
  })

  it('displays story metadata', () => {
    const wrapper = mount(StoryItem, {
      props: { story: mockStory, index: 0 },
      global: { plugins: [router] },
    })
    
    expect(wrapper.text()).toContain('100 points')
    expect(wrapper.text()).toContain('by testuser')
    expect(wrapper.text()).toContain('25 comments')
  })

  it('shows index number', () => {
    const wrapper = mount(StoryItem, {
      props: { story: mockStory, index: 5 },
      global: { plugins: [router] },
    })
    
    expect(wrapper.text()).toContain('6.')
  })

  it('displays domain for external links', () => {
    const wrapper = mount(StoryItem, {
      props: { story: mockStory, index: 0 },
      global: { plugins: [router] },
    })
    
    expect(wrapper.text()).toContain('example.com')
  })

  it('renders external link when url is provided', () => {
    const wrapper = mount(StoryItem, {
      props: { story: mockStory, index: 0 },
      global: { plugins: [router] },
    })
    
    const link = wrapper.find('a[target="_blank"]')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe(mockStory.url)
  })

  it('renders router link when no url is provided', () => {
    const storyWithoutUrl = { ...mockStory, url: null }
    const wrapper = mount(StoryItem, {
      props: { story: storyWithoutUrl, index: 0 },
      global: { plugins: [router] },
    })
    
    const routerLink = wrapper.findComponent({ name: 'RouterLink' })
    expect(routerLink.exists()).toBe(true)
  })

  it('formats time correctly', () => {
    const wrapper = mount(StoryItem, {
      props: { story: mockStory, index: 0 },
      global: { plugins: [router] },
    })
    
    expect(wrapper.text()).toMatch(/\d+ (hours?|minutes?) ago/)
  })
})
