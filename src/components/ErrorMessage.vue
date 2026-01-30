<template>
  <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-md" role="alert">
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3 flex-1">
        <h3 class="text-sm font-medium text-red-800">{{ title }}</h3>
        <p v-if="message" class="mt-1 text-sm text-red-700">{{ message }}</p>
        <button 
          v-if="retryable" 
          @click="handleRetry"
          class="mt-2 text-sm text-red-800 underline hover:text-red-900"
        >
          Try again
        </button>
      </div>
      <div v-if="dismissible" class="ml-auto pl-3">
        <button 
          @click="handleDismiss"
          class="inline-flex text-red-400 hover:text-red-500"
        >
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * ErrorMessage Component
 * 
 * Displays error messages with optional retry and dismiss actions
 * 
 * @prop {string} title - Error title (default: 'Error')
 * @prop {string} message - Error message/description
 * @prop {boolean} retryable - Show retry button (default: false)
 * @prop {boolean} dismissible - Show dismiss button (default: false)
 * @emits {retry} - Emitted when retry button is clicked
 * @emits {dismiss} - Emitted when dismiss button is clicked
 */

const props = defineProps({
  title: {
    type: String,
    default: 'Error',
  },
  message: {
    type: String,
    default: '',
  },
  retryable: {
    type: Boolean,
    default: false,
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['retry', 'dismiss'])

const handleRetry = () => {
  emit('retry')
}

const handleDismiss = () => {
  emit('dismiss')
}
</script>
