import CommentList from './CommentList.vue'

export default {
  title: 'Components/CommentList',
  component: CommentList,
  tags: ['autodocs'],
}

const mockComments = [
  {
    id: 1,
    by: 'johndoe',
    text: '<p>This is a great article! I really enjoyed reading it.</p>',
    time: Math.floor(Date.now() / 1000) - 3600,
    replies: [
      {
        id: 2,
        by: 'janedoe',
        text: '<p>I agree! Very insightful.</p>',
        time: Math.floor(Date.now() / 1000) - 1800,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    by: 'bobsmith',
    text: '<p>Has anyone tried implementing this?</p>',
    time: Math.floor(Date.now() / 1000) - 7200,
    replies: [],
  },
  {
    id: 4,
    by: 'alice',
    text: '<p>Here&#x27;s my implementation:</p><pre><code>function example() {\n  return true;\n}</code></pre>',
    time: Math.floor(Date.now() / 1000) - 10800,
    replies: [],
  },
]

export const Default = {
  args: {
    comments: mockComments,
  },
}

export const Loading = {
  args: {
    loading: true,
  },
}

export const Error = {
  args: {
    error: 'Failed to load comments. Please check your internet connection.',
  },
}

export const Empty = {
  args: {
    comments: [],
  },
}

export const SingleComment = {
  args: {
    comments: [mockComments[0]],
  },
}
