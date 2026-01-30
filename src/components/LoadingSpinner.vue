<template>
  <div class="flex items-center justify-center" :class="containerClass">
    <div class="animate-spin rounded-full border-t-2 border-b-2" :class="spinnerClass"></div>
    <span v-if="message" class="ml-3 text-gray-600">{{ message }}</span>
  </div>
</template>

<script setup>
/**
 * LoadingSpinner Component
 * 
 * Displays an animated loading spinner with optional message
 * 
 * @prop {string} size - Size of the spinner: 'sm', 'md', 'lg' (default: 'md')
 * @prop {string} message - Optional loading message to display
 * @prop {string} color - Color of the spinner (default: 'border-hn-orange')
 */

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  message: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'border-hn-orange',
  },
})

const sizeClasses = {
  sm: 'h-6 w-6',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
}

const spinnerClass = `${sizeClasses[props.size]} ${props.color}`
const containerClass = props.message ? '' : 'py-8'
</script>
