<template>
  <article class="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200">
    <div class="flex items-start space-x-3">
      <div class="flex-shrink-0 text-gray-400 font-semibold text-sm w-8 text-right">
        {{ index + 1 }}.
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-start">
          <div class="flex-1">
            <h2 class="text-base font-semibold text-gray-900 hover:text-hn-orange">
              <a 
                v-if="story.url" 
                :href="story.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="hover:underline"
              >
                {{ story.title }}
              </a>
              <router-link 
                v-else 
                :to="`/story/${story.id}`"
                class="hover:underline"
              >
                {{ story.title }}
              </router-link>
            </h2>
            <p v-if="story.url" class="text-xs text-gray-500 mt-1">
              ({{ getDomain(story.url) }})
            </p>
          </div>
        </div>
        <div class="flex items-center space-x-3 mt-2 text-xs text-gray-600">
          <span>{{ story.score }} points</span>
          <span>by {{ story.by }}</span>
          <span>{{ getTimeAgo(story.time) }}</span>
          <router-link 
            :to="`/story/${story.id}`"
            class="hover:underline"
          >
            {{ story.descendants || 0 }} comments
          </router-link>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
/**
 * StoryItem Component
 * 
 * Displays a single HackerNews story with title, metadata, and link
 * 
 * @prop {Object} story - Story object from HackerNews API
 * @prop {number} index - Index of the story in the list (for numbering)
 */

const props = defineProps({
  story: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
})

/**
 * Extract domain from URL
 */
const getDomain = (url) => {
  try {
    const domain = new URL(url).hostname
    return domain.replace('www.', '')
  } catch {
    return ''
  }
}

/**
 * Convert Unix timestamp to relative time
 */
const getTimeAgo = (timestamp) => {
  const seconds = Math.floor(Date.now() / 1000 - timestamp)
  
  if (seconds < 60) return 'just now'
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`
  return `${Math.floor(seconds / 86400)} days ago`
}
</script>
