<template>
  <div class="min-h-screen bg-hn-bg">
    <Header />
    <main class="container mx-auto px-[70px] py-12">
      <div class="grid grid-cols-12 gap-12">
        <!-- Main Content -->
        <div class="col-span-8">
          <h1 class="text-4xl font-medium text-hn-text mb-8">Top Stories</h1>
          <StoryList 
            :stories="stories"
            :loading="loading"
            :error="error"
            @retry="fetchStories"
          />
        </div>
        
        <!-- Sidebar -->
        <div class="col-span-4">
          <ReadingList />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import StoryList from '../components/StoryList.vue'
import ReadingList from '../components/ReadingList.vue'
import Footer from '../components/Footer.vue'
import { getTopStories, getItems } from '../services/hackernews'

/**
 * HomePage Component
 * 
 * Displays the list of top stories from HackerNews
 */

const stories = ref([])
const loading = ref(false)
const error = ref('')

/**
 * Fetch top stories from HackerNews API
 */
const fetchStories = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const storyIds = await getTopStories(30)
    stories.value = await getItems(storyIds)
  } catch (err) {
    error.value = 'Failed to load stories. Please try again.'
    console.error('Error fetching stories:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchStories()
})
</script>
