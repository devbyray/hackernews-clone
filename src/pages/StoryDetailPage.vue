<template>
	<div class="min-h-screen bg-hn-bg">
		<Header />
		<main class="container mx-auto px-4 py-8 max-w-5xl">
			<LoadingSpinner v-if="loading" message="Loading story..." />

			<ErrorMessage
				v-else-if="error"
				title="Failed to load story"
				:message="error"
				:retryable="true"
				@retry="fetchStory"
			/>

			<div v-else-if="story">
				<!-- Story Header -->
				<article class="bg-white p-6 rounded-lg shadow-md mb-6">
					<h1 class="text-2xl font-bold text-gray-900 mb-3">
						{{ story.title }}
					</h1>

					<div class="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
						<span class="font-semibold">{{ story.score }} points</span>
						<span>by {{ story.by }}</span>
						<span>{{ getTimeAgo(story.time) }}</span>
						<span>{{ story.descendants || 0 }} comments</span>
					</div>

					<a
						v-if="story.url"
						:href="story.url"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center text-hn-orange hover:underline mb-4"
					>
						<span>Visit Article</span>
						<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</a>

					<div
						v-if="story.text"
						class="prose prose-sm max-w-none text-gray-800 mt-4 p-4 bg-gray-50 rounded"
						v-html="story.text"
					></div>
				</article>

				<!-- Comments Section -->
				<CommentList
					:comments="comments"
					:loading="loadingComments"
					:error="commentsError"
					@retry="fetchComments"
				/>
			</div>
		</main>
	</div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../components/Header/Header.vue'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner.vue'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.vue'
import CommentList from '../components/CommentList/CommentList.vue'
import { getItem, getCommentWithReplies } from '../services/hackernews'

/**
 * StoryDetailPage Component
 *
 * Displays a single story with its comments
 */

const route = useRoute()
const story = ref(null)
const comments = ref([])
const loading = ref(false)
const loadingComments = ref(false)
const error = ref('')
const commentsError = ref('')

const storyId = computed(() => parseInt(route.params.id))

/**
 * Fetch story details
 */
const fetchStory = async () => {
	loading.value = true
	error.value = ''

	try {
		story.value = await getItem(storyId.value)

		// Fetch comments after story is loaded
		if (story.value.kids && story.value.kids.length > 0) {
			fetchComments()
		}
	} catch (err) {
		error.value = 'Failed to load story. Please try again.'
		console.error('Error fetching story:', err)
	} finally {
		loading.value = false
	}
}

/**
 * Fetch story comments
 */
const fetchComments = async () => {
	if (!story.value || !story.value.kids) return

	loadingComments.value = true
	commentsError.value = ''

	try {
		const commentPromises = story.value.kids.map(id => getCommentWithReplies(id))
		const fetchedComments = await Promise.all(commentPromises)
		comments.value = fetchedComments.filter(c => c !== null)
	} catch (err) {
		commentsError.value = 'Failed to load comments. Please try again.'
		console.error('Error fetching comments:', err)
	} finally {
		loadingComments.value = false
	}
}

/**
 * Convert Unix timestamp to relative time
 */
const getTimeAgo = timestamp => {
	const seconds = Math.floor(Date.now() / 1000 - timestamp)

	if (seconds < 60) return 'just now'
	if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`
	if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`
	return `${Math.floor(seconds / 86400)} days ago`
}

onMounted(() => {
	fetchStory()
})
</script>

<style scoped>
.prose :deep(p) {
	margin-bottom: 1rem;
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
