<template>
  <div class="space-y-4">
    <LoadingSpinner v-if="loading" message="Loading stories..." />
    <ErrorMessage 
      v-else-if="error"
      title="Failed to load stories"
      :message="error"
      :retryable="true"
      @retry="$emit('retry')"
    />
    <div v-else-if="stories.length === 0" class="text-center py-12 text-gray-500">
      No stories found
    </div>
    <div v-else class="space-y-6">
      <StoryItem 
        v-for="(story, index) in stories"
        :key="story.id"
        :story="story"
        :index="startIndex + index"
        :class="{ 'border-b border-gray-200 pb-6': index < stories.length - 1 }"
      />
    </div>
  </div>
</template>

<script setup>
import LoadingSpinner from './LoadingSpinner.vue'
import ErrorMessage from './ErrorMessage.vue'
import StoryItem from './StoryItem.vue'

/**
 * StoryList Component
 * 
 * Displays a list of HackerNews stories with loading and error states
 * 
 * @prop {Array} stories - Array of story objects
 * @prop {boolean} loading - Loading state
 * @prop {string} error - Error message
 * @prop {number} startIndex - Starting index for numbering (default: 0)
 * @emits {retry} - Emitted when retry is requested
 */

defineProps({
  stories: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: '',
  },
  startIndex: {
    type: Number,
    default: 0,
  },
})

defineEmits(['retry'])
</script>
