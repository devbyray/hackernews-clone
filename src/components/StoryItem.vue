<template>
  <article class="py-8 space-y-4">
    <!-- Category Tag -->
    <p class="text-lg text-hn-text font-light">{{ category || 'Technology' }}</p>
    
    <!-- Title -->
    <h2 class="text-2xl font-medium text-hn-text leading-normal">
      <a 
        v-if="story.url" 
        :href="story.url" 
        target="_blank" 
        rel="noopener noreferrer"
        class="hover:text-hn-orange transition-colors"
      >
        {{ story.title }}
      </a>
      <router-link 
        v-else 
        :to="`/story/${story.id}`"
        class="hover:text-hn-orange transition-colors"
      >
        {{ story.title }}
      </router-link>
    </h2>
    
    <!-- Author -->
    <p class="text-xl text-hn-text">
      <span class="font-light">by </span>
      <span class="font-medium">{{ story.by }}</span>
    </p>
    
    <!-- Date -->
    <div class="flex items-center space-x-2">
      <svg class="w-6 h-6 text-hn-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p class="text-base text-hn-text font-light">{{ formatDate(story.time) }}</p>
    </div>
    
    <!-- Description -->
    <p class="text-lg text-hn-text font-light leading-relaxed">
      {{ getDescription() }}
    </p>
    
    <!-- Meta Info -->
    <div class="flex items-center justify-between pt-2">
      <div class="flex items-center space-x-8">
        <!-- Read Time -->
        <div class="flex items-center space-x-2">
          <svg class="w-6 h-6 text-hn-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-base text-hn-text font-light">{{ getReadTime() }} min read</p>
        </div>
        
        <!-- Comments -->
        <router-link 
          :to="`/story/${story.id}`"
          class="flex items-center space-x-2 hover:text-hn-orange transition-colors"
        >
          <svg class="w-6 h-6 text-hn-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <p class="text-base text-hn-text font-light">{{ story.descendants || 0 }} comments</p>
        </router-link>
      </div>
      
      <!-- Add to Reading List -->
      <button class="flex items-center space-x-2 hover:text-hn-orange transition-colors" v-if="showReadingList">
        <svg class="w-6 h-6 text-hn-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <p class="text-base text-hn-text font-light">Add to Reading List</p>
      </button>
    </div>
  </article>
</template>

<script setup>
/**
 * StoryItem Component
 * 
 * Displays a single HackerNews story with Figma-inspired design
 * 
 * @prop {Object} story - Story object from HackerNews API
 * @prop {string} category - Category label (default: 'Technology')
 * @prop {boolean} showReadingList - Show reading list button (default: true)
 */

const props = defineProps({
  story: {
    type: Object,
    required: true,
  },
  category: {
    type: String,
    default: 'Technology',
  },
  showReadingList: {
    type: Boolean,
    default: true,
  },
})

/**
 * Format Unix timestamp to readable date
 */
const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000)
  const day = date.getDate()
  const month = date.toLocaleDateString('en-US', { month: 'long' })
  const year = date.getFullYear()
  const ordinal = getOrdinal(day)
  return `${day}${ordinal} ${month}, ${year}`
}

/**
 * Get ordinal suffix for day
 */
const getOrdinal = (day) => {
  if (day > 3 && day < 21) return 'th'
  switch (day % 10) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
    default: return 'th'
  }
}

/**
 * Get description (placeholder for now)
 */
const getDescription = () => {
  return 'Unison is an open source functional programming language based on a simple idea with big implications: code is content-addressed and immutable.'
}

/**
 * Calculate estimated read time based on title length
 */
const getReadTime = () => {
  return Math.max(3, Math.ceil(props.story.title.length / 50))
}
</script>
