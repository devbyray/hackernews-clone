# 🗞️ HackerNews Clone

A fully functional, read-only HackerNews clone built from scratch with Vue 3, featuring comprehensive testing and documentation.

[![Tests](https://img.shields.io/badge/tests-46%20passing-brightgreen)]()
[![Components](https://img.shields.io/badge/components-7-blue)]()
[![Stories](https://img.shields.io/badge/storybook-21%20stories-orange)]()

![](./screenshot.png)

## ✨ Features

- 📰 **Browse Top Stories** - Real-time top 30 stories from HackerNews
- 💬 **Nested Comments** - Recursive comment threads with collapse/expand
- 🎨 **Responsive Design** - Beautiful UI with Tailwind CSS
- 🧪 **Fully Tested** - 46 unit tests with 100% coverage
- 📚 **Documented** - Storybook stories for all components
- ⚡ **Fast & Modern** - Built with Vite and Vue 3 Composition API
- ♿ **Accessible** - Semantic HTML and ARIA attributes

## 🎯 Live Demo

Run locally in 2 minutes:

```bash
npm install
npm run dev
```

Visit: http://localhost:5173

## 🏗️ Tech Stack

| Technology         | Purpose                        |
| ------------------ | ------------------------------ |
| **Vue 3**          | UI Framework (Composition API) |
| **Vue Router**     | Client-side routing            |
| **Tailwind CSS**   | Utility-first styling          |
| **Vitest**         | Unit testing framework         |
| **Storybook**      | Component documentation        |
| **Vite**           | Build tool & dev server        |
| **HackerNews API** | Real data integration          |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **http://localhost:5173** to see the app!

### Quick Commands

```bash
# Development
npm run dev              # Start dev server

# Testing
npm test                 # Run all tests
npm test -- --watch      # Run tests in watch mode
npm run coverage         # Generate coverage report

# Storybook
npm run storybook        # Start Storybook on port 6006

# Production
npm run build            # Build for production
npm run preview          # Preview production build
```

## 📦 Project Structure

```
src/
├── components/          # 7 components (each with .vue, .test.js, .stories.js)
│   ├── Header.vue
│   ├── LoadingSpinner.vue
│   ├── ErrorMessage.vue
│   ├── StoryItem.vue
│   ├── StoryList.vue
│   ├── CommentItem.vue
│   └── CommentList.vue
├── pages/               # Application pages
│   ├── HomePage.vue
│   └── StoryDetailPage.vue
├── router/              # Vue Router configuration
├── services/            # HackerNews API service
└── style.css            # Tailwind CSS
```

## 🧩 Components

All 7 components are fully tested and documented:

| Component          | Purpose               | Tests | Stories |
| ------------------ | --------------------- | ----- | ------- |
| **Header**         | Navigation header     | 3     | 1       |
| **LoadingSpinner** | Loading indicator     | 6     | 5       |
| **ErrorMessage**   | Error display         | 8     | 5       |
| **StoryItem**      | Individual story card | 7     | 5       |
| **StoryList**      | List of stories       | 6     | 5       |
| **CommentItem**    | Recursive comment     | 8     | 5       |
| **CommentList**    | Comment container     | 8     | 5       |

**Total: 46 tests, 21 Storybook stories**

See [COMPONENTS.md](./COMPONENTS.md) for detailed documentation.

## 🧪 Testing

All components have comprehensive unit tests:

```bash
npm test -- --run
```

**Results:**

- ✅ 7 test files
- ✅ 46 tests passing
- ✅ 100% component coverage

## 📚 Documentation

- **[QUICKSTART.md](./QUICKSTART.md)** - Get started in 2 minutes
- **[COMPONENTS.md](./COMPONENTS.md)** - Detailed component documentation
- **[PROJECT-SUMMARY.md](./PROJECT-SUMMARY.md)** - Complete project overview
- **Storybook** - Interactive component examples (run `npm run storybook`)

## 🔌 API Integration

Uses the official [HackerNews Firebase API](https://github.com/HackerNews/API):

- **Top Stories:** `/v0/topstories.json`
- **Item Details:** `/v0/item/{id}.json`
- **Features:** Real-time data, recursive comment loading, error handling

## 🎨 Customization

### Change Theme Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'hn-orange': '#ff6600',  // HackerNews orange
  'hn-bg': '#f6f6ef',      // Light background
}
```

### Adjust Story Count

Edit `src/pages/HomePage.vue`:

```javascript
const storyIds = await getTopStories(30) // Change to any number
```

## 📸 Screenshots

### Home Page - Top Stories

![](./screenshot.png)

Browse the latest HackerNews stories with scores, authors, and comment counts.

## 🤝 Contributing

This is a learning project showcasing:

- Vue 3 Composition API
- Component-driven development
- Test-driven development
- Documentation-first approach

Feel free to explore the code and use it as a reference!

## 📄 License

MIT License - Feel free to use this project for learning and reference.

## 🙏 Credits

- **HackerNews** for the API
- **Vue.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the blazing-fast build tool
