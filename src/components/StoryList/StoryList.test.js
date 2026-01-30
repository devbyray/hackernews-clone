import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import StoryList from './StoryList.vue'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.vue'
import ErrorMessage from '../ErrorMessage/ErrorMessage.vue'
import StoryItem from '../StoryItem/StoryItem.vue'

describe('StoryList', () => {
	const router = createRouter({
		history: createMemoryHistory(),
		routes: [{ path: '/story/:id', component: { template: '<div>Story</div>' } }]
	})

	const mockStories = [
		{
			id: 1,
			title: 'Story 1',
			by: 'user1',
			score: 100,
			time: Math.floor(Date.now() / 1000),
			descendants: 10,
			url: 'https://example.com/1'
		},
		{
			id: 2,
			title: 'Story 2',
			by: 'user2',
			score: 200,
			time: Math.floor(Date.now() / 1000),
			descendants: 20,
			url: 'https://example.com/2'
		}
	]

	it('renders loading state', () => {
		const wrapper = mount(StoryList, {
			props: { loading: true },
			global: { plugins: [router] }
		})

		expect(wrapper.findComponent(LoadingSpinner).exists()).toBe(true)
	})

	it('renders error state', () => {
		const error = 'Failed to fetch stories'
		const wrapper = mount(StoryList, {
			props: { error },
			global: { plugins: [router] }
		})

		expect(wrapper.findComponent(ErrorMessage).exists()).toBe(true)
		expect(wrapper.text()).toContain(error)
	})

	it('renders empty state when no stories', () => {
		const wrapper = mount(StoryList, {
			props: { stories: [] },
			global: { plugins: [router] }
		})

		expect(wrapper.text()).toContain('No stories found')
	})

	it('renders list of stories', () => {
		const wrapper = mount(StoryList, {
			props: { stories: mockStories },
			global: { plugins: [router] }
		})

		const storyItems = wrapper.findAllComponents(StoryItem)
		expect(storyItems.length).toBe(2)
	})

	it('emits retry event', async () => {
		const wrapper = mount(StoryList, {
			props: { error: 'Error' },
			global: { plugins: [router] }
		})

		const errorComponent = wrapper.findComponent(ErrorMessage)
		await errorComponent.vm.$emit('retry')

		expect(wrapper.emitted('retry')).toBeTruthy()
	})

	it('uses startIndex prop for numbering', () => {
		const wrapper = mount(StoryList, {
			props: {
				stories: mockStories,
				startIndex: 5
			},
			global: { plugins: [router] }
		})

		const firstStory = wrapper.findAllComponents(StoryItem)[0]
		expect(firstStory.props('index')).toBe(5)
	})
})
