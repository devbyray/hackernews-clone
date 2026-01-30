import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import StoryDetailPage from '../pages/StoryDetailPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Top Stories - HackerNews',
    },
  },
  {
    path: '/story/:id',
    name: 'story',
    component: StoryDetailPage,
    meta: {
      title: 'Story Details - HackerNews',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// Update page title based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'HackerNews Clone'
  next()
})

export default router
