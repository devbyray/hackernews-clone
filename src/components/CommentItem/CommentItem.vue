<template>
  <div class="comment-item" :class="{ 'ml-6 border-l-2 border-gray-200 pl-4': level > 0 }">
    <div v-if="!comment.deleted" class="py-3">
      <div class="flex items-center space-x-2 text-xs text-gray-600 mb-2">
        <span class="font-semibold text-gray-900">{{ comment.by }}</span>
        <span>·</span>
        <span>{{ getTimeAgo(comment.time) }}</span>
        <button 
          v-if="hasReplies"
          @click="collapsed = !collapsed"
          class="text-hn-orange hover:underline"
        >
          {{ collapsed ? `[+${replyCount} replies]` : '[-]' }}
        </button>
      </div>
      <div 
        v-show="!collapsed"
        class="prose prose-sm max-w-none text-gray-800"
        v-html="comment.text"
      ></div>
      <div v-if="!collapsed && hasReplies" class="mt-3">
        <CommentItem 
          v-for="reply in comment.replies"
          :key="reply.id"
          :comment="reply"
          :level="level + 1"
        />
      </div>
    </div>
    <div v-else class="py-3 text-sm text-gray-400 italic">
      [deleted]
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

/**
 * CommentItem Component
 * 
 * Displays a single comment with nested replies (recursive)
 * Supports collapsing/expanding comment threads
 * 
 * @prop {Object} comment - Comment object from HackerNews API
 * @prop {number} level - Nesting level (default: 0)
 */

const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
  level: {
    type: Number,
    default: 0,
  },
})

const collapsed = ref(false)

const hasReplies = computed(() => {
  return props.comment.replies && props.comment.replies.length > 0
})

const replyCount = computed(() => {
  if (!hasReplies.value) return 0
  
  const countReplies = (comment) => {
    let count = comment.replies?.length || 0
    comment.replies?.forEach(reply => {
      count += countReplies(reply)
    })
    return count
  }
  
  return countReplies(props.comment)
})

/**
 * Convert Unix timestamp to relative time
 */
const getTimeAgo = (timestamp) => {
  const seconds = Math.floor(Date.now() / 1000 - timestamp)
  
  if (seconds < 60) return 'just now'
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
  return `${Math.floor(seconds / 86400)}d ago`
}
</script>

<style scoped>
.prose :deep(p) {
  margin-bottom: 0.5rem;
}

.prose :deep(a) {
  color: #0066cc;
  text-decoration: underline;
}

.prose :deep(pre) {
  background-color: #f6f6ef;
  padding: 0.5rem;
  border-radius: 0.25rem;
  overflow-x: auto;
}

.prose :deep(code) {
  background-color: #f6f6ef;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}
</style>
