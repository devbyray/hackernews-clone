import StoryItem from './StoryItem.vue'

export default {
  title: 'Components/StoryItem',
  component: StoryItem,
  tags: ['autodocs'],
}

const mockStory = {
  id: 123,
  title: 'Show HN: I built a new productivity app',
  by: 'johndoe',
  score: 342,
  time: Math.floor(Date.now() / 1000) - 7200, // 2 hours ago
  descendants: 87,
  url: 'https://example.com/my-app',
}

const mockAskHN = {
  id: 456,
  title: 'Ask HN: What are your favorite productivity tips?',
  by: 'janedoe',
  score: 156,
  time: Math.floor(Date.now() / 1000) - 10800, // 3 hours ago
  descendants: 45,
  url: null, // Ask HN posts don't have external URLs
}

export const Default = {
  args: {
    story: mockStory,
    index: 0,
  },
}

export const AskHN = {
  args: {
    story: mockAskHN,
    index: 1,
  },
}

export const HighScore = {
  args: {
    story: {
      ...mockStory,
      score: 1523,
      descendants: 342,
    },
    index: 0,
  },
}

export const NoComments = {
  args: {
    story: {
      ...mockStory,
      descendants: 0,
    },
    index: 2,
  },
}

export const LongTitle = {
  args: {
    story: {
      ...mockStory,
      title: 'This is a very long title that demonstrates how the component handles lengthy story titles that might wrap to multiple lines',
    },
    index: 0,
  },
}
