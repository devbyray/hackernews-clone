import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CommentItem from './CommentItem.vue'

describe('CommentItem', () => {
  const mockComment = {
    id: 1,
    by: 'testuser',
    text: 'This is a test comment',
    time: Math.floor(Date.now() / 1000) - 3600,
    replies: [],
  }

  it('renders comment author', () => {
    const wrapper = mount(CommentItem, {
      props: { comment: mockComment },
    })
    
    expect(wrapper.text()).toContain('testuser')
  })

  it('renders comment text', () => {
    const wrapper = mount(CommentItem, {
      props: { comment: mockComment },
    })
    
    expect(wrapper.html()).toContain('This is a test comment')
  })

  it('renders time ago', () => {
    const wrapper = mount(CommentItem, {
      props: { comment: mockComment },
    })
    
    expect(wrapper.text()).toMatch(/\d+[hmd] ago/)
  })

  it('shows collapse button when has replies', () => {
    const commentWithReplies = {
      ...mockComment,
      replies: [
        { id: 2, by: 'user2', text: 'Reply', time: Date.now() / 1000, replies: [] },
      ],
    }
    
    const wrapper = mount(CommentItem, {
      props: { comment: commentWithReplies },
    })
    
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('collapses and expands replies', async () => {
    const commentWithReplies = {
      ...mockComment,
      replies: [
        { id: 2, by: 'user2', text: 'Reply', time: Date.now() / 1000, replies: [] },
      ],
    }
    
    const wrapper = mount(CommentItem, {
      props: { comment: commentWithReplies },
    })
    
    const button = wrapper.find('button')
    await button.trigger('click')
    
    expect(button.text()).toContain('[+')
    
    await button.trigger('click')
    expect(button.text()).toContain('[-]')
  })

  it('applies indentation for nested comments', () => {
    const wrapper = mount(CommentItem, {
      props: { 
        comment: mockComment,
        level: 2,
      },
    })
    
    expect(wrapper.find('.ml-6').exists()).toBe(true)
  })

  it('renders deleted state', () => {
    const deletedComment = {
      ...mockComment,
      deleted: true,
    }
    
    const wrapper = mount(CommentItem, {
      props: { comment: deletedComment },
    })
    
    expect(wrapper.text()).toContain('[deleted]')
  })

  it('renders nested replies recursively', () => {
    const nestedComment = {
      ...mockComment,
      replies: [
        {
          id: 2,
          by: 'user2',
          text: 'Level 1 reply',
          time: Date.now() / 1000,
          replies: [
            {
              id: 3,
              by: 'user3',
              text: 'Level 2 reply',
              time: Date.now() / 1000,
              replies: [],
            },
          ],
        },
      ],
    }
    
    const wrapper = mount(CommentItem, {
      props: { comment: nestedComment },
    })
    
    expect(wrapper.html()).toContain('Level 1 reply')
    expect(wrapper.html()).toContain('Level 2 reply')
  })
})
