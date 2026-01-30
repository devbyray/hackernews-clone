# 🚀 Quick Start Guide

Get up and running with the HackerNews Clone in under 2 minutes!

## Step 1: Verify Installation

The project is already set up with all dependencies installed. Verify everything is ready:

```bash
cd hackernews-clone
npm test -- --run
```

You should see: **46 tests passed** ✅

---

## Step 2: Start Development Server

```bash
npm run dev
```

Open your browser to: **http://localhost:5173**

You'll see:

- Top 30 HackerNews stories
- Click any story to view details and comments
- Responsive design that works on all devices

---

## Step 3: Explore Storybook (Optional)

View all components in isolation:

```bash
npm run storybook
```

Open your browser to: **http://localhost:6006**

Browse 21 interactive component examples with documentation!

---

## 🎯 What to Try

### Browse Stories

1. Visit http://localhost:5173
2. See top 30 stories from HackerNews
3. Stories show: title, score, author, time, comment count

### View Story Details

1. Click any story title (with a link icon)
2. Opens external article in new tab

### Read Comments

1. Click the comment count on any story
2. See nested comment threads
3. Click `[+]` to collapse, `[-]` to expand threads

### Test Responsiveness

1. Resize your browser window
2. Try mobile, tablet, and desktop sizes
3. Everything adapts smoothly!

---

## 📖 Explore the Code

### Components (`src/components/`)

- **Header.vue** - Navigation header
- **LoadingSpinner.vue** - Loading indicator
- **ErrorMessage.vue** - Error display
- **StoryItem.vue** - Individual story card
- **StoryList.vue** - List of stories
- **CommentItem.vue** - Single comment (recursive)
- **CommentList.vue** - List of comments

Each component has:

- `.vue` file - Component implementation
- `.test.js` file - Unit tests
- `.stories.js` file - Storybook stories

### Pages (`src/pages/`)

- **HomePage.vue** - Top stories list
- **StoryDetailPage.vue** - Story with comments

### Services (`src/services/`)

- **hackernews.js** - API integration

---

## 🧪 Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm run coverage
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to `dist/` folder. Preview it:

```bash
npm run preview
```

---

## 🎨 Customize

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'hn-orange': '#ff6600',  // Change this!
  'hn-bg': '#f6f6ef',      // And this!
}
```

### Modify Story Count

Edit `src/pages/HomePage.vue`:

```javascript
const storyIds = await getTopStories(30) // Change 30 to any number
```

---

## 📚 Documentation

- **README.md** - Overview and setup
- **COMPONENTS.md** - Detailed component docs
- **PROJECT-SUMMARY.md** - Complete project summary
- **Storybook** - Interactive component examples

---

## ✅ Verification Checklist

- [x] Dependencies installed
- [x] 46 tests passing
- [x] Dev server starts successfully
- [x] Stories load from HackerNews
- [x] Comments load and display
- [x] Routing works (home → story detail)
- [x] Responsive design
- [x] Storybook working
- [x] Production build succeeds

---

## 🆘 Troubleshooting

**Tests failing?**

```bash
npm install
npm test -- --run
```

**Dev server not starting?**

```bash
# Check if port 5173 is in use
lsof -i :5173
# Kill any process using it, then try again
npm run dev
```

**Storybook not working?**

```bash
npm run storybook
# Visit http://localhost:6006
```

---

## 🎉 You're Ready!

Your HackerNews Clone is fully functional with:

- ✅ 7 well-documented components
- ✅ 46 passing unit tests
- ✅ 21 Storybook stories
- ✅ Real HackerNews API integration
- ✅ Responsive Tailwind CSS design
- ✅ Vue 3 + Vue Router + Vite

**Enjoy exploring and customizing!** 🚀
