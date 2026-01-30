# Component Documentation

This document provides detailed information about all components in the HackerNews Clone application.

## Component Overview

All 7 components are fully documented, tested with Vitest, and have Storybook stories for visual documentation.

---

## 1. Header Component

**Location:** `src/components/Header.vue`

### Purpose

Displays the application header with logo, title, and navigation links. Sticky header that stays at the top while scrolling.

### Props

None

### Features

- Orange background matching HackerNews branding
- Responsive logo with "Y" symbol
- Navigation link to home page
- Sticky positioning

### Tests

- ✅ Renders logo and title
- ✅ Renders navigation links
- ✅ Has sticky positioning

### Storybook Stories

- Default state

---

## 2. LoadingSpinner Component

**Location:** `src/components/LoadingSpinner.vue`

### Purpose

Displays an animated loading spinner with optional message.

### Props

| Prop    | Type   | Default            | Description              |
| ------- | ------ | ------------------ | ------------------------ |
| size    | String | 'md'               | Size: 'sm', 'md', 'lg'   |
| message | String | ''                 | Optional loading message |
| color   | String | 'border-hn-orange' | Spinner color class      |

### Features

- Animated spinning effect
- Three size variants
- Customizable color
- Optional message display

### Tests

- ✅ Renders spinner
- ✅ Renders with message
- ✅ Applies correct size classes
- ✅ Applies custom color
- ✅ Renders without message by default

### Storybook Stories

- Default
- With Message
- Small
- Large
- Custom Color

---

## 3. ErrorMessage Component

**Location:** `src/components/ErrorMessage.vue`

### Purpose

Displays error messages with optional retry and dismiss actions.

### Props

| Prop        | Type    | Default | Description               |
| ----------- | ------- | ------- | ------------------------- |
| title       | String  | 'Error' | Error title               |
| message     | String  | ''      | Error message/description |
| retryable   | Boolean | false   | Show retry button         |
| dismissible | Boolean | false   | Show dismiss button       |

### Events

- `retry` - Emitted when retry button is clicked
- `dismiss` - Emitted when dismiss button is clicked

### Features

- Red color scheme for errors
- Icon indicator
- Optional retry action
- Optional dismiss action
- Accessible with proper ARIA roles

### Tests

- ✅ Renders error title and message
- ✅ Shows retry button when retryable
- ✅ Emits retry event
- ✅ Shows dismiss button when dismissible
- ✅ Emits dismiss event
- ✅ Has proper alert role

### Storybook Stories

- Default
- With Retry
- Dismissible
- With Both
- Title Only

---

## 4. StoryItem Component

**Location:** `src/components/StoryItem.vue`

### Purpose

Displays a single HackerNews story with title, metadata, and links.

### Props

| Prop  | Type   | Required | Description              |
| ----- | ------ | -------- | ------------------------ |
| story | Object | Yes      | Story object from HN API |
| index | Number | No (0)   | Index for numbering      |

### Story Object Structure

```javascript
{
  id: Number,
  title: String,
  by: String,
  score: Number,
  time: Unix timestamp,
  descendants: Number,
  url: String (optional)
}
```

### Features

- Numbered list display
- External link for stories with URL
- Router link for Ask HN posts
- Domain extraction and display
- Score, author, time display
- Comment count with link to details
- Hover effects

### Helper Functions

- `getDomain(url)` - Extracts domain from URL
- `getTimeAgo(timestamp)` - Converts to relative time

### Tests

- ✅ Renders story title and metadata
- ✅ Shows index number
- ✅ Displays domain for external links
- ✅ Renders external link when url provided
- ✅ Renders router link when no url
- ✅ Formats time correctly

### Storybook Stories

- Default
- Ask HN
- High Score
- No Comments
- Long Title

---

## 5. StoryList Component

**Location:** `src/components/StoryList.vue`

### Purpose

Displays a list of HackerNews stories with loading and error states.

### Props

| Prop       | Type    | Default | Description                  |
| ---------- | ------- | ------- | ---------------------------- |
| stories    | Array   | []      | Array of story objects       |
| loading    | Boolean | false   | Loading state                |
| error      | String  | ''      | Error message                |
| startIndex | Number  | 0       | Starting index for numbering |

### Events

- `retry` - Emitted when retry is requested

### Features

- Loading state with spinner
- Error state with retry
- Empty state message
- List of story items
- Configurable start index for pagination

### Tests

- ✅ Renders loading state
- ✅ Renders error state
- ✅ Renders empty state
- ✅ Renders list of stories
- ✅ Emits retry event
- ✅ Uses startIndex for numbering

### Storybook Stories

- Default
- Loading
- Error
- Empty
- With Start Index

---

## 6. CommentItem Component

**Location:** `src/components/CommentItem.vue`

### Purpose

Displays a single comment with nested replies (recursive component).

### Props

| Prop    | Type   | Required | Description                |
| ------- | ------ | -------- | -------------------------- |
| comment | Object | Yes      | Comment object from HN API |
| level   | Number | No (0)   | Nesting level              |

### Comment Object Structure

```javascript
{
  id: Number,
  by: String,
  text: HTML String,
  time: Unix timestamp,
  replies: Array,
  deleted: Boolean (optional)
}
```

### Features

- Recursive nesting for replies
- Collapse/expand functionality
- Reply count display
- Indentation based on level
- Deleted comment handling
- HTML content rendering
- Code block styling

### Computed Properties

- `hasReplies` - Checks if comment has replies
- `replyCount` - Recursively counts all nested replies

### Tests

- ✅ Renders author and text
- ✅ Renders time ago
- ✅ Shows collapse button with replies
- ✅ Collapses and expands replies
- ✅ Applies indentation for nested comments
- ✅ Renders deleted state
- ✅ Renders nested replies recursively

### Storybook Stories

- Default
- With Replies
- Nested
- With Code
- Deleted

---

## 7. CommentList Component

**Location:** `src/components/CommentList.vue`

### Purpose

Displays a list of comments with loading and error states.

### Props

| Prop     | Type    | Default | Description              |
| -------- | ------- | ------- | ------------------------ |
| comments | Array   | []      | Array of comment objects |
| loading  | Boolean | false   | Loading state            |
| error    | String  | ''      | Error message            |

### Events

- `retry` - Emitted when retry is requested

### Features

- Loading state with spinner
- Error state with retry
- Empty state message
- Comment count display
- Recursive comment rendering
- Styled container

### Tests

- ✅ Renders loading state
- ✅ Renders error state
- ✅ Renders empty state
- ✅ Renders list of comments
- ✅ Displays correct comment count
- ✅ Uses singular form for single comment
- ✅ Emits retry event
- ✅ Has proper styling

### Storybook Stories

- Default
- Loading
- Error
- Empty
- Single Comment

---

## Running Tests

Run all component tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

Run tests with coverage:

```bash
npm run coverage
```

---

## Viewing Storybook

Start Storybook development server:

```bash
npm run storybook
```

Build Storybook for deployment:

```bash
npm run build-storybook
```

---

## Common Patterns

### Error Handling

All components that fetch data follow this pattern:

1. Set loading state to true
2. Clear any previous errors
3. Fetch data in try block
4. Set error state in catch block
5. Set loading to false in finally block

### State Management

Components use Vue 3 Composition API with:

- `ref()` for reactive state
- `computed()` for derived state
- `onMounted()` for initialization

### Accessibility

- Semantic HTML elements
- ARIA roles where appropriate
- Keyboard navigation support
- Screen reader friendly

### Styling

- Tailwind CSS utility classes
- HackerNews color scheme (#ff6600, #f6f6ef)
- Responsive design
- Hover states and transitions
