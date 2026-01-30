/**
 * HackerNews API Service
 *
 * Provides methods to interact with the HackerNews API
 * API Documentation: https://github.com/HackerNews/API
 */

const API_BASE = 'https://hacker-news.firebaseio.com/v0'

/**
 * Fetch top story IDs from HackerNews
 * @param {number} limit - Number of stories to fetch (default: 30)
 * @returns {Promise<number[]>} Array of story IDs
 */
export async function getTopStories(limit = 30) {
	try {
		const response = await fetch(`${API_BASE}/topstories.json`)
		if (!response.ok) throw new Error('Failed to fetch top stories')
		const ids = await response.json()
		return ids.slice(0, limit)
	} catch (error) {
		console.error('Error fetching top stories:', error)
		throw error
	}
}

/**
 * Fetch a single item (story, comment, etc.) by ID
 * @param {number} id - Item ID
 * @returns {Promise<Object>} Item data
 */
export async function getItem(id) {
	try {
		const response = await fetch(`${API_BASE}/item/${id}.json`)
		if (!response.ok) throw new Error(`Failed to fetch item ${id}`)
		return await response.json()
	} catch (error) {
		console.error(`Error fetching item ${id}:`, error)
		throw error
	}
}

/**
 * Fetch multiple items by their IDs
 * @param {number[]} ids - Array of item IDs
 * @returns {Promise<Object[]>} Array of item data
 */
export async function getItems(ids) {
	try {
		const promises = ids.map(id => getItem(id))
		return await Promise.all(promises)
	} catch (error) {
		console.error('Error fetching items:', error)
		throw error
	}
}

/**
 * Fetch a story with its comments
 * @param {number} id - Story ID
 * @returns {Promise<Object>} Story data with comments
 */
export async function getStoryWithComments(id) {
	try {
		const story = await getItem(id)
		if (story.kids && story.kids.length > 0) {
			story.comments = await getItems(story.kids)
		} else {
			story.comments = []
		}
		return story
	} catch (error) {
		console.error(`Error fetching story ${id} with comments:`, error)
		throw error
	}
}

/**
 * Recursively fetch comment and its replies
 * @param {number} id - Comment ID
 * @returns {Promise<Object>} Comment data with nested replies
 */
export async function getCommentWithReplies(id) {
	try {
		const comment = await getItem(id)
		if (comment && comment.kids && comment.kids.length > 0) {
			comment.replies = await Promise.all(comment.kids.map(kidId => getCommentWithReplies(kidId)))
		} else {
			comment.replies = []
		}
		return comment
	} catch (error) {
		console.error(`Error fetching comment ${id}:`, error)
		return null
	}
}
