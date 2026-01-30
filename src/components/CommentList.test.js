import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CommentList from './CommentList.vue'
import LoadingSpinner from './LoadingSpinner.vue'
import ErrorMessage from './ErrorMessage.vue'
import CommentItem from './CommentItem.vue'

describe('CommentList', () => {
  const mockComments = [
    {
      id: 1,
      by: 'user1',
      text: 'Comment 1',
      time: Math.floor(Date.now() / 1000),
      replies: [],
    },
    {
      id: 2,
      by: 'user2',
      text: 'Comment 2',
      time: Math.floor(Date.now() / 1000),
      replies: [],
    },
  ]

  it('renders loading state', () => {
    const wrapper = mount(CommentList, {
      props: { loading: true },
    })
    
    expect(wrapper.findComponent(LoadingSpinner).exists()).toBe(true)
  })

  it('renders error state', () => {
    const error = 'Failed to fetch comments'
    const wrapper = mount(CommentList, {
      props: { error },
    })
    
    expect(wrapper.findComponent(ErrorMessage).exists()).toBe(true)
    expect(wrapper.text()).toContain(error)
  })

  it('renders empty state when no comments', () => {
    const wrapper = mount(CommentList, {
      props: { comments: [] },
    })
    
    expect(wrapper.text()).toContain('No comments yet')
  })

  it('renders list of comments', () => {
    const wrapper = mount(CommentList, {
      props: { comments: mockComments },
    })
    
    const commentItems = wrapper.findAllComponents(CommentItem)
    expect(commentItems.length).toBe(2)
  })

  it('displays correct comment count', () => {
    const wrapper = mount(CommentList, {
      props: { comments: mockComments },
    })
    
    expect(wrapper.text()).toContain('2 Comments')
  })

  it('uses singular form for single comment', () => {
    const wrapper = mount(CommentList, {
      props: { comments: [mockComments[0]] },
    })
    
    expect(wrapper.text()).toContain('1 Comment')
    expect(wrapper.text()).not.toContain('1 Comments')
  })

  it('emits retry event', async () => {
    const wrapper = mount(CommentList, {
      props: { error: 'Error' },
    })
    
    const errorComponent = wrapper.findComponent(ErrorMessage)
    await errorComponent.vm.$emit('retry')
    
    expect(wrapper.emitted('retry')).toBeTruthy()
  })

  it('has proper styling with shadow and padding', () => {
    const wrapper = mount(CommentList, {
      props: { comments: mockComments },
    })
    
    expect(wrapper.find('.shadow').exists()).toBe(true)
    expect(wrapper.find('.p-6').exists()).toBe(true)
  })
})
