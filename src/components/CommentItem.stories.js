import CommentItem from './CommentItem.vue'

export default {
  title: 'Components/CommentItem',
  component: CommentItem,
  tags: ['autodocs'],
}

const mockComment = {
  id: 1,
  by: 'johndoe',
  text: '<p>This is a great article! I really enjoyed reading it.</p>',
  time: Math.floor(Date.now() / 1000) - 3600,
  replies: [],
}

const commentWithReplies = {
  id: 1,
  by: 'johndoe',
  text: '<p>What do you think about this approach?</p>',
  time: Math.floor(Date.now() / 1000) - 7200,
  replies: [
    {
      id: 2,
      by: 'janedoe',
      text: '<p>I think it&#x27;s a good approach, but we should consider the edge cases.</p>',
      time: Math.floor(Date.now() / 1000) - 5400,
      replies: [
        {
          id: 3,
          by: 'bobsmith',
          text: '<p>Agreed. Edge cases are important here.</p>',
          time: Math.floor(Date.now() / 1000) - 3600,
          replies: [],
        },
      ],
    },
    {
      id: 4,
      by: 'alice',
      text: '<p>Has anyone tried implementing this yet?</p>',
      time: Math.floor(Date.now() / 1000) - 1800,
      replies: [],
    },
  ],
}

const commentWithCode = {
  id: 5,
  by: 'developer',
  text: '<p>Here&#x27;s a code example:</p><pre><code>function hello() {\n  console.log(&quot;Hello World&quot;);\n}</code></pre>',
  time: Math.floor(Date.now() / 1000) - 1800,
  replies: [],
}

export const Default = {
  args: {
    comment: mockComment,
    level: 0,
  },
}

export const WithReplies = {
  args: {
    comment: commentWithReplies,
    level: 0,
  },
}

export const Nested = {
  args: {
    comment: mockComment,
    level: 2,
  },
}

export const WithCode = {
  args: {
    comment: commentWithCode,
    level: 0,
  },
}

export const Deleted = {
  args: {
    comment: {
      id: 6,
      deleted: true,
      time: Math.floor(Date.now() / 1000),
    },
    level: 0,
  },
}
