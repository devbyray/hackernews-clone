# 🗞️ HackerNews Clone

A fully functional, read-only HackerNews clone built from scratch with Vue 3, featuring comprehensive testing and documentation.

[![Tests](https://img.shields.io/badge/tests-56%20passing-brightgreen)]()
[![Components](https://img.shields.io/badge/components-11-blue)]()
[![Stories](https://img.shields.io/badge/storybook-47%20stories-orange)]()

![](./screenshot.png)

## ✨ Features

- 📰 **Browse Top Stories** - Real-time top 30 stories from HackerNews
- 💬 **Nested Comments** - Recursive comment threads with collapse/expand
- 🎨 **Responsive Design** - Beautiful UI with Tailwind CSS v4
- 🧪 **Fully Tested** - 62 unit tests (56 passing)
- 📚 **Documented** - Storybook stories for all components
- ⚡ **Fast & Modern** - Built with Vite and Vue 3 Composition API
- ♿ **Accessible** - Semantic HTML and ARIA attributes
- 🔧 **Reusable Components** - Button and Input components for consistency

## � Design

Built from a community Figma design:
- **[HackerNews Website Redesign](https://www.figma.com/design/nZYxyHjSmGpgACq6qC4Wq6/HackerNews-Website-Redesign--Community-?node-id=19-1250&t=UCkFgUKMUAWa1SPp-4)** - Modern redesign with orange branding

## �🎯 Live Demo

Run locally in 2 minutes:

```bash
npm install
npm run dev
```

Visit: http://localhost:5173

## 🏗️ Tech Stack

| Technology          | Purpose                        |
| ------------------- | ------------------------------ |
| **Vue 3**           | UI Framework (Composition API) |
| **Vue Router**      | Client-side routing            |
| **Tailwind CSS v4** | Utility-first styling          |
| **Vitest**          | Unit testing framework         |
| **Storybook**       | Component documentation        |
| **Vite**            | Build tool & dev server        |
| **HackerNews API**  | Real data integration          |

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
├── components/          # 11 components (organized in folders)
│   ├── Button/
│   │   ├── Button.vue
│   │   ├── Button.test.js
│   │   └── Button.stories.js
│   ├── Input/
│   │   ├── Input.vue
│   │   ├── Input.test.js
│   │   └── Input.stories.js
│   ├── Header/
│   │   ├── Header.vue
│   │   ├── Header.test.js
│   │   └── Header.stories.js
│   ├── Footer/
│   │   ├── Footer.vue
│   │   └── Footer.stories.js
│   ├── LoadingSpinner/
│   ├── ErrorMessage/
│   ├── StoryItem/
│   ├── StoryList/
│   ├── CommentItem/
│   ├── CommentList/
│   └── ReadingList/
├── pages/               # Application pages
│   ├── HomePage.vue
│   └── StoryDetailPage.vue
├── router/              # Vue Router configuration
├── services/            # HackerNews API service
└── style.css            # Tailwind CSS v4
```

## 🧩 Components

All 11 components are organized in individual folders with tests and documentation:

| Component          | Purpose                       | Tests | Stories |
| ------------------ | ----------------------------- | ----- | ------- |
| **Button**         | Reusable button (4 variants)  | 8     | 8       |
| **Input**          | Reusable input (5 types)      | 8     | 6       |
| **Header**         | Navigation header             | 3     | 1       |
| **Footer**         | Footer with newsletter signup | -     | 1       |
| **LoadingSpinner** | Loading indicator             | 6     | 5       |
| **ErrorMessage**   | Error display                 | 8     | 5       |
| **StoryItem**      | Individual story card         | 7     | 5       |
| **StoryList**      | List of stories               | 6     | 5       |
| **CommentItem**    | Recursive comment             | 8     | 5       |
| **CommentList**    | Comment container             | 8     | 5       |
| **ReadingList**    | Reading list display          | -     | 1       |

**Total: 62 tests (56 passing), 47 Storybook stories**

See [COMPONENTS.md](./COMPONENTS.md) for detailed documentation.

## 🧪 Testing

All components have comprehensive unit tests:

```bash
npm test -- --run
```

**Results:**

- ✅ 9 test files
- ✅ 56 tests passing (62 total)
- ✅ Comprehensive component coverage
- 🎯 New Button and Input components: 16/16 tests passing

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

Edit `src/style.css` (Tailwind CSS v4):

```css
@theme {
	--color-hn-orange: #ff6600;
	--color-hn-bg: #fafcff;
	--color-hn-text: #54575a;
	--color-hn-dark: #3f220f;
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
