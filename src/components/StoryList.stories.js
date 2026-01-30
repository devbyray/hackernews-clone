import StoryList from './StoryList.vue'

export default {
  title: 'Components/StoryList',
  component: StoryList,
  tags: ['autodocs'],
}

const mockStories = [
  {
    id: 1,
    title: 'Show HN: I built a new productivity app',
    by: 'johndoe',
    score: 342,
    time: Math.floor(Date.now() / 1000) - 7200,
    descendants: 87,
    url: 'https://example.com/my-app',
  },
  {
    id: 2,
    title: 'Ask HN: What are your favorite productivity tips?',
    by: 'janedoe',
    score: 156,
    time: Math.floor(Date.now() / 1000) - 10800,
    descendants: 45,
    url: null,
  },
  {
    id: 3,
    title: 'New JavaScript Framework Released',
    by: 'devuser',
    score: 523,
    time: Math.floor(Date.now() / 1000) - 14400,
    descendants: 123,
    url: 'https://example.com/framework',
  },
]

export const Default = {
  args: {
    stories: mockStories,
  },
}

export const Loading = {
  args: {
    loading: true,
  },
}

export const Error = {
  args: {
    error: 'Failed to load stories. Please check your internet connection.',
  },
}

export const Empty = {
  args: {
    stories: [],
  },
}

export const WithStartIndex = {
  args: {
    stories: mockStories,
    startIndex: 10,
  },
}
