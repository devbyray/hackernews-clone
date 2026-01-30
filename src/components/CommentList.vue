<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h2 class="text-xl font-bold mb-4">
      {{ comments.length }} Comment{{ comments.length !== 1 ? 's' : '' }}
    </h2>
    
    <LoadingSpinner v-if="loading" message="Loading comments..." />
    
    <ErrorMessage 
      v-else-if="error"
      title="Failed to load comments"
      :message="error"
      :retryable="true"
      @retry="$emit('retry')"
    />
    
    <div v-else-if="comments.length === 0" class="text-center py-8 text-gray-500">
      No comments yet. Be the first to comment!
    </div>
    
    <div v-else class="divide-y divide-gray-200">
      <CommentItem 
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        :level="0"
      />
    </div>
  </div>
</template>

<script setup>
import LoadingSpinner from './LoadingSpinner.vue'
import ErrorMessage from './ErrorMessage.vue'
import CommentItem from './CommentItem.vue'

/**
 * CommentList Component
 * 
 * Displays a list of comments with loading and error states
 * 
 * @prop {Array} comments - Array of comment objects
 * @prop {boolean} loading - Loading state
 * @prop {string} error - Error message
 * @emits {retry} - Emitted when retry is requested
 */

defineProps({
  comments: {
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
})

defineEmits(['retry'])
</script>
